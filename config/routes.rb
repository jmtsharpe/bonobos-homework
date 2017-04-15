Rails.application.routes.draw do

root to: 'static_pages#landing'

	namespace :api, defaults: {format: :json} do
		resources :products do
			resources :inventory_items
		end
	end


end
