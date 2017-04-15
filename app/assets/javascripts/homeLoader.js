
	/**
	* Calls api/products
	* uses returned data to create product list
	*/
function loadProducts(){

	/**
	* Creates product list
	* replaces html of #root div
	* @param {JSON Object} data
	*/
	function createProductList(data){
		// Find root div
		var root = $("#root");

		// Create product list
		var productList = $("<ul>");

		data.map(function(product){
			// Create product section
			var prodDisplay = $("<li class='product-section'>");

			// Create showOff section
			var prodShowOff = $("<section class='showoff group'>");

			// Create each section of of the display. Append to prodShowOff
			prodShowOff.append("<h1 class='product-title'>"  + product.product_name + "</h1>");
			prodShowOff.append("<img src='" + product.product_image + "' class='display-img'>");
			prodShowOff.append("<article class='prod-descript'>" + product.product_description + "</article>");
			
			// Append showOff section to product display section
			prodDisplay.append(prodShowOff);

			// Create inventory List
			var inventory = createInventoryList(product);

			// Append inventory to prodDisplay
			prodDisplay.append(inventory);

			// Append productDisplay to productList
			productList.append(prodDisplay);
		})

		// Replace root html with product list
		$("#root").html(productList);
	}
	/**
	* Creates inventory list
	* @param {JSON Object} product
	* @return {JQuery object} itemList
	*/
	function createInventoryList(product){
		var itemList = $("<ul class='inventory group'>");
		var items = "";

		// Sort inventory
		product.inventory_items.sort(function(a, b){
			return sortByStyle(a, b);
		});

		// Create header for inventory
		items += "<li class='inventory-headers'><div class=' collumn col1'>Style</div><div class='collumn col2'>Waist</div><div class='collumn col3'>Length</div><div class='collumn col4'>Count</div></li>";
		
		// Create each inventory item. Add to list.
		product.inventory_items.map(function(item){
			items += "<li class='inventory-item'><div class=' collumn col1'>" + item.style + "</div><div class='collumn col2'>" + item.waist + "</div><div class='collumn col3'>" + item.length + "</div><div class=' collumn col4'>" + item.count + "</div></li>";
		})

		// Append all inventory items to item list
		itemList.append(items);

		// Return itemList
		return itemList
	}

	function sortByStyle(a, b){
		var nameA=a.style, nameB=b.style;
		if (nameA === nameB){
			// if styles are equal sorth by waist
			return sortByWaist(a, b);
		} else if (nameA > nameB){
			return 1;
		} else {
			return -1;
		}
	}

	function sortByWaist(a, b){
		var nameA=a.waist, nameB=b.waist;
		if (nameA === nameB){
			// if waists are eqaul sort by length
			return sortByLength(a, b);
		} else if (nameA > nameB){
			return 1;
		} else {
			return -1;
		}
	}

	function sortByLength(a, b){
		var nameA=a.length, nameB=b.length;
		if (nameA < nameB){
			return -1;
		}
		if (nameA > nameB){
			return 1;
		}
		return 0;
	}

	$.ajax({
		// call products api
		url: "api/products",
		type: "GET",
		dataType: "json",
		complete: function() {},
		success: function(data, textStatus, xhr) {
			createProductList(data);
		},
		error: function() {
			alert("Ajax error!")
		}
	});
}

// Call load products when page is loaded.
$(document).on('turbolinks:load', loadProducts );