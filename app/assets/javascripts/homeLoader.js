function loadProducts(){

	function createProductList(data){
		var productList = $("<ul>");
		var products = "";

		data.map(function(product){
			products += "<li>" + product.product_name + "</li>"
		})

		productList.append(products);

		$("#root").append(productList);
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