Rails.application.routes.draw do
  root "users#new"
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :new, :destroy]

  resources :pins, defaults: { format: :json }, only: [:index, :show, :create, :update]

end
