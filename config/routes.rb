Rails.application.routes.draw do

  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  # Sign Up
  get 'users/new', to: 'users#new', as: 'new_user'
  get '/signup', to: 'users#new'
  resources :users, only: [:create]

  # Sign In
  get '/signin', to: 'sessions#new'
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy', as: 'session'

  # Products
  root to: "products#index"
  resources :products

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "/products", to: "products#index"
  # get "/products/new", to: "products#new", as: 'new_product'
  # get "/products/:id", to: "products#show", as: 'product'
  # get "/products/:id/edit", to: "products#edit", as: 'edit_product'
  # patch "/products/:id", to: "products#update"
  # delete "/products/:id", to: "products#destroy"

  post "/products", to: "products#create"
end
