Rails.application.routes.draw do
  root to: "api/v1/products#index"

  namespace :api do
    namespace :v1 do
      resources :products do
        resources :comments, only: [:create]
      end
      resources :users, only: [:create]
      post '/signin',    to: 'sessions#create'
      delete '/signout', to: 'sessions#destroy', as: 'session'
    end
  end

  get '*path', to: 'api/v1/products#index'



# Sign Up
  # # get 'users/new', to: 'users#new', as: 'new_user'
  # # get '/signup', to: 'users#new'
  # # get '/signin', to: 'sessions#new'
  # # post '/signin', to: 'sessions#create'
  # # delete '/signout', to: 'sessions#destroy', as: 'session'
  # #
  # # resources :users, only: [:create]
  # # resources :products do
  # #   resources :comments, only: [:create]
  # # end
  # # # Sign In
  # #
  # # # Products
  # # get 'products/search'
  # # post 'products/search', to: 'products#filterByName', as: 'search_products'
  #
  #
  # # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # # get "/products", to: "products#index"
  # # get "/products/new", to: "products#new", as: 'new_product'
  # # get "/products/:id", to: "products#show", as: 'product'
  # # get "/products/:id/edit", to: "products#edit", as: 'edit_product'
  # # patch "/products/:id", to: "products#update"
  # # delete "/products/:id", to: "products#destroy"
  #
  # post "/products", to: "products#create"
end
