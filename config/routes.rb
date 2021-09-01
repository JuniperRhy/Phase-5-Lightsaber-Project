Rails.application.routes.draw do
  
  resources :saber_segments
  resources :segments, only: [:index, :show]
  resources :user_sabers, only: [:index, :show, :create, :destroy]
  resources :sabers, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create]
  resources :sessions, only: [:index, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
