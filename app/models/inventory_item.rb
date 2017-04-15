class InventoryItem < ActiveRecord::Base

	belongs_to :product, class_name: "Product", foreign_key: :product_id, primary_key: :id

end
