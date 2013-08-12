require 'test_helper'

class CategoriesControllerTest < ActionController::TestCase
  setup do
    @request.env["devise.mapping"] = Devise.mappings[:admin]
    sign_in users(:admin)
    
    @category = categories(:one)
  end

  #test "should get index" do
  #  get :index
  #  assert_response :success
  #  assert_not_nil assigns(:categories)
  #end

  test "guest should not get new" do
    get :new
    assert_redirected_to new_user_session_path
  end

  test "guest should not create category" do
    #sign_in users(:admin)
    assert_difference('Category.count', 0) do
      post :create, category: @category.attributes
    end
  end

  #test "should show category" do
  #  get :show, id: @category.to_param
  #  assert_response :success
  #end

  test "guest should not get edit" do
    get :edit, id: @category.to_param
    assert_redirected_to new_user_session_path
  end

  #test "should update category" do
  #  put :update, id: @category.to_param, category: @category.attributes
  #  assert_redirected_to category_path(assigns(:category))
  #end

  test "guest should not destroy category" do
    assert_difference('Category.count', 0) do
      delete :destroy, id: @category.to_param
    end
  end
end
