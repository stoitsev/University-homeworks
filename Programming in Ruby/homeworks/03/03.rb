require 'bigdecimal'
require 'bigdecimal/util'
require 'active_support/core_ext/integer/inflections'

class Inventory

  def initialize()
    @@products_list = {}
    @@coupon_list = {}
  end

  def register(product_name, product_price = nil, promotion = nil)
    validate_name(product_name)
    validate_price(product_price)
    @@products_list[product_name] = Product.new(product_price.to_d, promotion)
  end

  def new_cart()
    Cart.new()
  end

  def register_coupon(name, coupon_type)
    type = coupon_type.keys.first.to_s
    if type == "percent" 
      @@coupon_list[name] = PercentsCoupon.new(coupon_type.values.first, name)
    elsif type == "amount" 
      @@coupon_list[name] = AmountCoupon.new(coupon_type.values.first, name)
    end
  end

  def self.get_product(name)
    @@products_list[name]
  end

  def self.get_coupon(name)
    @@coupon_list[name]
  end

  private

  def validate_name(product_name)
    if @@products_list.has_key? product_name
      raise "Product already registered."
    end
    if product_name.length > 40
      raise "Name is too long. Should be 40 characters max."
    end
  end

  def validate_price(product_price)
    if product_price == nil
      raise "Specify product price."
    end
    if product_price.to_d < 0.01 || product_price.to_d > 999.99
      raise "Incorrect price."
    end
  end

end

class Product

  attr_reader :price, :promotion

  def initialize(product_price, promotion)
    @price = product_price
    if promotion != nil
      @promotion = add_promotion(promotion.keys.first, promotion.values.first)
    else
      @promotion = nil
    end
  end

  def add_promotion(promotion_name, params)
    case promotion_name
      when :get_one_free then GetOneFreePromotion.new(params)
      when :package      then PackagePromotion.new(params)
      when :threshold    then ThresholdPromotion.new(params)
    end
  end

  def get_price(number_of_products)
    if has_promotion?
      @promotion.calc_price(@price, number_of_products)
    else
      @price * number_of_products
    end
  end

  def has_promotion?
    not @promotion.nil?
  end

end

class Cart

  def initialize()
    @basket = {}
    @coupon = nil
  end

  def add(product_name, num_of_products = 1)
    validate_product_name(product_name)
    validate_num_of_products(num_of_products)
    if @basket.has_key? product_name
      @basket[product_name] += num_of_products
    else
      @basket[product_name] = num_of_products
    end
  end

  def use(coupon_name)
    @coupon = Inventory.get_coupon(coupon_name)
  end

  def total()
    sum = BigDecimal('0')
    @basket.each { |product_name, num_of_products|
      sum += Inventory.get_product(product_name).get_price(num_of_products)
    }
    if @coupon != nil
      sum -= @coupon.total(sum)
    end
    sum
  end

  def invoice()
    invoice = Invoice.new
    out = invoice.print_head + "\n"
    @basket.each { |name, prod_num|
      prd = Inventory.get_product(name)
      out << invoice.print_row(name, prod_num, prd.price, prd.promotion) + "\n"
    }
    out << invoice.print_footer(total(), @coupon) + "\n"
    out
  end

  private

  def validate_product_name(product_name)
    if Inventory.get_product(product_name) == nil
      raise "Product not registered."
    end
  end

  def validate_num_of_products(num_of_products)
    if num_of_products < 1 || num_of_products > 99
      raise "Incorecr number of products."
    end
  end

end

class Invoice

  def print_head()
    output = "+------------------------------------------------+----------+\n"
    output << "| Name                                       qty |    price |\n"
    output << "+------------------------------------------------+----------+"
    output
  end

  def print_row(prod_name, num_of_prods, prod_price, prod_promo = nil)
    row = '| ' + prod_name.to_s.ljust(44) + num_of_prods.to_s.rjust(2) + ' | '
    row << ("%.2f" % (prod_price * num_of_prods)).to_s.rjust(8) + ' |'
    if not prod_promo.nil?
      prod_promo.calc_price(prod_price, num_of_prods)
      row << "\n|   " + prod_promo.to_s.ljust(44) + ' | ' 
      row << ('-' + ("%.2f" % prod_promo.get_discount).to_s).rjust(8) + ' |'
    end
    row
  end

  def print_footer(total, coupon)
    output = ''
    if coupon != nil
      output << "| " + coupon.to_s.ljust(46) + ' | '
      output << ('-' + ("%.2f" % coupon.get_discount).to_s).rjust(8) + " |\n"
    end
    output + print_total(total) 
  end

  def print_total(total)
    row = "+------------------------------------------------+----------+\n"
    row <<  "| TOTAL                                          |"
    row << ("%.2f" % total).to_s.rjust(9)
    row << " |\n+------------------------------------------------+----------+"
    row
  end

end

class NoPromotion

  def calc_price(price, num_of_products)
    price * num_of_products
  end

end

class GetOneFreePromotion

  def initialize(free_after_each)
    @free_each = free_after_each
    @discount = 0
  end

  def calc_price(price, num_of_products)
    free_products = num_of_products / @free_each
    @discount = free_products * price
    return price * (num_of_products - free_products)
  end

  def get_discount()
    @discount
  end

  def to_s()
    "(buy #{@free_each - 1}, get 1 free)"
  end

end

class PackagePromotion

  def initialize(discount)
    @products_needed = discount.keys.first
    @percents_discount = discount.values.first
    @discount = 0
  end

  def calc_price(price, num_of_products)
    discounted = num_of_products / @products_needed
    not_discounted = num_of_products % @products_needed
    sum = (1 - (@percents_discount.to_f / 100))
    sum *= (price * discounted * @products_needed)
    sum += (not_discounted * price)
    @discount = (price * num_of_products) - sum
    sum.to_d
  end

  def get_discount()
    @discount
  end

  def to_s()
    "(get #{@percents_discount}% off for every #{@products_needed})"
  end

end

class ThresholdPromotion

  def initialize(discount)
    @discount_after = discount.keys.first
    @percents_discount = discount.values.first
    @discount = 0
  end

  def calc_price(price, num_of_products)
    discounted = num_of_products - @discount_after
    if discounted <= 0
      return price * num_of_products
    end
    sum = num_of_products * price
    @discount = discounted * price * (@percents_discount.to_f / 100)
    sum - @discount
  end

  def get_discount()
    @discount
  end

  def to_s()
    row = "(#{@percents_discount}% off of every after the "
    row << @discount_after.ordinalize 
    row << ')'
  end

end

class PercentsCoupon

  def initialize(percents, name)
    @name = name
    @percents = percents
    @total = 0
  end

  def total(sum)
    @total = sum * (@percents.to_f / 100)
  end

  def get_discount()
    @total
  end

  def to_s()
    "Coupon #{@name} - #{@percents}% off"
  end

end

class AmountCoupon

  def initialize(amount, name)
    @amount = amount.to_d
    @name = name
    @discount = 0
  end

  def total(sum)
    if sum <= @amount
      return @discount = sum
    else
      return @discount = @amount
    end
  end

  def get_discount()
    @discount
  end

  def to_s()
    "Coupon #{@name} - #{"%.2f" % @amount.to_f} off"
  end

end
