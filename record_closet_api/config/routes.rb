Rails.application.routes.draw do
      resources :records
      resources :users, only: [:create, :show, :index]
      post '/login', to: 'auth#create'
    
end

# fetch("http://localhost:3000/users", {
#   method: "POST",
#   headers: {
#     "Content-Type": "application/json",
#     Accept: "application/json",
#   },
#   body: JSON.stringify({
#     user: {
#       username: "crandall",
#       password: "piestyle69",
#     },
#   }),
# })
#   .then((r) => r.json())
#   .then(console.log);