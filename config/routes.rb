Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users,
      only: [:create, :new, :show]
    resource :session,
      only: [:create, :new, :show, :destroy]


    resources :pins,
      only: [:index, :show, :create, :update]
    resources :photos,
      only: [:index, :show]
    resources :boards,
      only: [:index, :show, :create, :update, :destroy]
    resources :comments,
      only: [:index, :show, :create]

  end
end
