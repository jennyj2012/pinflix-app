Rails.application.routes.draw do
  root to: "static_pages#root"
  get 'auth/facebook/callback', to: 'api/sessions#omniauth_facebook'

  namespace :api, defaults: { format: :json } do
    resources :users,
      only: [:create, :new, :show, :index]
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

    get "search", to: "utils#search"
  end
end
