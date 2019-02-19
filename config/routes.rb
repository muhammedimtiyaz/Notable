Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show] do
      resources :restaurants, only: [:create]
    end

    resource :session, only: [:create, :destroy]

    resources :restaurants, only: [:index, :show]

    resources :reviews, except: [:new, :edit]

    resources :reservations, only: [:index, :show, :create, :destroy]

    resources :favourites, only: [:index, :show, :create, :destroy] 
  end
end
