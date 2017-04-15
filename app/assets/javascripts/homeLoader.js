function loadProducts(){

	function createProductList(data){
		var productList = $("<ul>");
		var products = "";

		data.map(function(product){
			var prodDisplay = $("<li class='product-section'>");
			var prodShowOff = $("<div class='showoff group'>");
			prodShowOff.append("<h1>"  + product.product_name + "</h1>");
			prodShowOff.append("<img src='" + product.product_image + "' class='display-img'>");
			prodShowOff.append("<p>" + product.product_description + "</p>");
			prodDisplay.append(prodShowOff);

			var inventory = createInventoryList(product);

			prodDisplay.append(inventory);

			productList.append(prodDisplay);
		})

		productList.append(products);

		$("#root").append(productList);
	}

	function createInventoryList(product){
		var itemList = $("<ul class='inventory group'>");
		var items = "";
		items += "<li class='inventory-headers'><div class=' collumn col1'>Style</div><div class='collumn col2'>Waist</div><div class='collumn col3'>Length</div><div class='collumn col4'>Count</div></li>";
		product.inventory_items.map(function(item){
			items += "<li><div class=' collumn col1'>" + item.style + "</div><div class='collumn col2'>" + item.waist + "</div><div class='collumn col3'>" + item.length + "</div><div class=' collumn col4'>" + item.count + "</div></li>";
		})

		itemList.append(items);

		return itemList
	}

	$.ajax({
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

$(document).on('turbolinks:load', loadProducts );