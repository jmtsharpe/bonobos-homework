class CreateProducts < ActiveRecord::Migration
	def change
		create_table :products do |t|
			t.string :product_name, null: false
			t.string :product_image, null: false
			t.string :product_description, null: false

			t.timestamps
		end
	end
end
