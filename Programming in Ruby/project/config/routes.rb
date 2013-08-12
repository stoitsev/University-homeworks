Elib::Application.routes.draw do

  resources :borrows

  get "categories/admin"
  get "library/admin"

  resources :categories
  resources :library
  resources :books
    
  devise_for :user do
    root :to => "library#index"
  end

  root :to =>'library#index', :as => 'library'

end
