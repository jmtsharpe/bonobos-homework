class Product < ActiveRecord::Base

	has_many :inventory_items, class_name: "InventoryItem", foreign_key: :product_id, primary_key: :id
end
