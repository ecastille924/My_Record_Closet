Rails.application.routes.draw do
  resources :records
  resources :users

  get "/login" to: redirect("/auth/google_oauth2")
  get "/logout" to: "sessions#destroy"
  get "/auth/google_oauth2/callback", to: "sessions#create"
  get "auth/failure", to: redirect('/')
  resource :session, only: [:create, :destroy]

end
