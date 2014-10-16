Rails.application.routes.draw do
	resources :welcome do 
		resources :statements
	end
	
  root 'welcome#index'

  get 'welcome/_skyline'
end
