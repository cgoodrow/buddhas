Rails.application.routes.draw do

  get 'welcome/the_experience'

  get 'welcome/index'

  root 'welcome#index'

  # match '/contacts',     to: 'contacts#new',             via: 'get'
  resources "contacts", only: [:new, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
