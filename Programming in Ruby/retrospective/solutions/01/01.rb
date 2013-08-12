class Array

  def to_hash
    inject({}) { |hash, pair| 
      hash[pair.first] = pair[1] 
      hash 
    }
  end

  def subarray_count(subarray)
    each_cons(subarray.length).count(subarray)
  end

  def index_by(&block)
    map(&block).zip(self).to_hash
  end

  def occurences_count
    Hash.new { |hash, key| 0 }.tap do |output|
      each { |item| output[item] += 1 }
    end
  end

end
