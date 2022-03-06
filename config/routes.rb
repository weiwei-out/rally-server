Rails.application.routes.draw do
  resources :users

  #User Routes
  post '/signup', to: "users#create"
  get '/me', to: "users#show" 

  # Session Routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
