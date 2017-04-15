function loadProducts(){

	function createProductList(data){
		var root = $("#root");
		var productList = $("<ul>");
		var products = "";

		data.map(function(product){
			var prodDisplay = $("<li class='product-section'>");

			var prodShowOff = $("<div class='showoff group'>");
			prodShowOff.append("<h1 class='product-title'>"  + product.product_name + "</h1>");
			prodShowOff.append("<img src='" + product.product_image + "' class='display-img'>");
			prodShowOff.append("<article class='prod-descript'>" + product.product_description + "</article>");
			
			prodDisplay.append(prodShowOff);

			var inventory = createInventoryList(product);

			prodDisplay.append(inventory);

			productList.append(prodDisplay);
		})

		productList.append(products);

		$("#root").html(productList);
	}

	function createInventoryList(product){
		var itemList = $("<ul class='inventory group'>");
		var items = "";
		product.inventory_items.sort(function(a, b){
			return sortByStyle(a, b);
		});
		items += "<li class='inventory-headers'><div class=' collumn col1'>Style</div><div class='collumn col2'>Waist</div><div class='collumn col3'>Length</div><div class='collumn col4'>Count</div></li>";
		product.inventory_items.map(function(item){
			items += "<li class='inventory-item'><div class=' collumn col1'>" + item.style + "</div><div class='collumn col2'>" + item.waist + "</div><div class='collumn col3'>" + item.length + "</div><div class=' collumn col4'>" + item.count + "</div></li>";
		})

		itemList.append(items);

		return itemList
	}

	function sortByStyle(a, b){
		var nameA=a.style, nameB=b.style;
		if (nameA === nameB){
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