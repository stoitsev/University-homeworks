require 'test_helper'

class BorrowsControllerTest < ActionController::TestCase
  setup do
    @borrow = borrows(:one)
  end

  test "guest should not get index" do
    get :index
    assert_redirected_to new_user_session_path
  end

  test "guest should not get new" do
    get :new
    assert_redirected_to new_user_session_path
  end

  test "guest should not create borrow" do
    assert_difference('Borrow.count', 0) do
      post :create, borrow: @borrow.attributes
    end
  end

  test "guest should not see borrow" do
    get :show, id: @borrow.to_param
    assert_redirected_to new_user_session_path
  end

  test "guest should not get edit" do
    get :edit, id: @borrow.to_param
    assert_redirected_to new_user_session_path
  end

  #test "should update borrow" do
  #  put :update, id: @borrow.to_param, borrow: @borrow.attributes
  #  assert_redirected_to borrow_path(assigns(:borrow))
  #end

  test "guest should not destroy borrow" do
    assert_difference('Borrow.count', 0) do
      delete :destroy, id: @borrow.to_param
    end
  end
end
