class CreateInventoryItems < ActiveRecord::Migration
	def change
		create_table :inventory_items do |t|
			t.integer :product_id, null: false
			t.integer :waist, null: false
			t.integer :length, null: false
			t.string :style, null: false
			t.integer :count, null: false

			t.timestamps
		end
	end
end
