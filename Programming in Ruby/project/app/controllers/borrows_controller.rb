class BorrowsController < ApplicationController
  before_filter :authorize_admin, :except => [:index, :show]
  
  # GET /borrows
  # GET /borrows.json
  def index
    if !user_signed_in?
      redirect_to new_user_session_path, :notice=>"Please log in"
      return
    elsif current_user.try(:admin?)
      @borrows = Borrow.order(:return_date)
    elsif current_user
      @borrows = Borrow.where("user_id=#{current_user.id}").order(:return_date)
    end      

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @borrows }
    end
  end

  # GET /borrows/1
  # GET /borrows/1.json
  def show
    unless user_signed_in?
      redirect_to new_user_session_path, :notice=>"Please log in"
      return
    end
  
    @borrow = Borrow.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @borrow }
    end
  end

  # GET /borrows/new
  # GET /borrows/new.json
  def new
    @borrow = Borrow.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @borrow }
    end
  end

  # GET /borrows/1/edit
  def edit
    @borrow = Borrow.find(params[:id])
    @edit = true
  end

  # POST /borrows
  # POST /borrows.json
  def create
    @borrow = Borrow.new(params[:borrow])

    respond_to do |format|
      if @borrow.save
        format.html { redirect_to @borrow, notice: 'Borrow was successfully created.' }
        format.json { render json: @borrow, status: :created, location: @borrow }
      else
        format.html { render action: "new" }
        format.json { render json: @borrow.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /borrows/1
  # PUT /borrows/1.json
  def update
    @borrow = Borrow.find(params[:id])

    respond_to do |format|
      if @borrow.update_attributes(params[:borrow])
        format.html { redirect_to @borrow, notice: 'Borrow was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @borrow.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /borrows/1
  # DELETE /borrows/1.json
  def destroy
    @borrow = Borrow.find(params[:id])
    @borrow.destroy

    respond_to do |format|
      format.html { redirect_to borrows_url }
      format.json { head :ok }
    end
  end
end
