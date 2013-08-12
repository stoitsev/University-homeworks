require 'test_helper'

class BooksControllerTest < ActionController::TestCase
  setup do
    @book = books(:one)
  end

  test "guest should not get index" do
    get :index
    assert_redirected_to categories_path(assigns(:index))
  end

  test "guest should not get new" do
    get :new
    assert_redirected_to new_user_session_path 
  end

  #test "should create book" do
  #  sign_in users(:admin)
  
  #  assert_difference('Book.count') do
  #    post :create, book: @book.attributes
  #  end

  #  assert_redirected_to book_path(assigns(:book))
  #end

  test "should show book" do
    get :show, id: @book.to_param
    assert_response :success
  end

  test "should not get edit" do
    get :edit, id: @book.to_param
    assert_redirected_to new_user_session_path
  end

  #test "should update book" do
  #  put :update, id: @book.to_param, book: @book.attributes
  #  assert_redirected_to book_path(assigns(:book))
  #end

  test "guest should not destroy book" do
  #  sign_in users(:admin)
    
    assert_difference('Book.count', 0) do
      delete :destroy, id: @book.to_param
    end

  #  assert_redirected_to books_path
  end
end
