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

  # we want all other routes to just render out angular front end,
  # and let ui.router work from there
  root to: 'client#index'
  get '*path', to: 'client#index'
end
