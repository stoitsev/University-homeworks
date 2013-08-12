class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  def authorize_admin
    unless current_user.try(:admin?)
      redirect_to new_user_session_path, :notice=>"Please log in"
    end
  end
end


