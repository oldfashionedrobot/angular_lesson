Rails.application.routes.draw do
  # Our Devise routes
  # All server side rendering
  devise_for :users

  # Our JSON endpoints
  # We'll hit these with Angular
  namespace :api do
    resources :appointments
    resources :doctors
  end

  # Because we aren't using UI router,
  # We use these routes to ultimately serve up Angular views
  resources :doctors, only: [:index]
  resources :appointments, only: [:index]

  root to: 'doctors#index'
end
