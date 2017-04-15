json.extract!( product, :product_name, :product_image, :product_description )

json.inventory_items do
	json.array!(product.inventory_items) do |item|
		json.partial!('api/inventory/item', item: item)
	end
end
