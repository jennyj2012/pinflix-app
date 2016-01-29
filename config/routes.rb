Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :new, :destroy]


  resources :pins,
    defaults: { format: :json },
    only: [:index, :show, :create, :update]
  resources :boards,
    defaults: { format: :json },
    only: [:index, :show, :create, :update, :destroy]
  resources :comments,
    defaults: { format: :json },
    only: [:index, :show, :create]


end
