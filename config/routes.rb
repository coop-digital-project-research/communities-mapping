Rails.application.routes.draw do

  namespace :api do
    resource :assets
  end

  resources :pages, only: :show
  root to: 'pages#index'
end
