json.array!(@boards) do |product|
	json.partial!('product', product: product)
end
