# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'


# parses 
products_text = File.read(Rails.root.join('lib', 'seeds', 'products.csv'))
product_csv = CSV.parse(products_text, :headers => true, :encoding => 'ISO-8859-1')
product_csv.each do |row|
	t = Product.new
	t.product_name = row['product_name']
	t.product_image = row['product_image']
	t.product_description = row['product_description']

	t.save
	puts "#{t.product_name} saved"
end

inventory_text = File.read(Rails.root.join('lib', 'seeds', 'inventory.csv'))
inventory_csv = CSV.parse(inventory_text, :headers => true, :encoding => 'ISO-8859-1')
inventory_csv.each do |row|
	t = InventoryItem.new
	t.product_id = row['product_id']
	t.waist = row['waist']
	t.length = row['length']
	t.style = row['style']
	t.count = row['count']

	t.save
	puts "#{t.style} saved"
end