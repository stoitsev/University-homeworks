require 'test_helper'

class LibraryControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "guest should not get admin" do
    get :admin
    assert_redirected_to new_user_session_path
  end
end
