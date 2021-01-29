const allOrders = [
	{
		product: "Монітор Sony 8764d",
		price: 2430,
		type: 'монітор'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1350,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 3240,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1080,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 2705c",
		price: 1215,
		type: 'клавіатура'
	},
	{
		product: "Клавіатура 1905b",
		price: 1242,
		type: 'клавіатура'
	},
	{
		product: "Монітор Sony 8764d",
		price: 2160,
		type: 'монітор'
	},
	{
		product: "Монітор Samsung 734s",
		price: 4860,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 091g",
		price: 810,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1566,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 2700,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1242,
		type: 'роутер'
	},
];

function drawOrders(val, new_orders){
	
	const orders_table = document.getElementById('orders_table');
	let table_html = ``;
	new_orders.map(function(order, index){
		table_html += 
		`
		<tr>
			<td>${index + 1}</td>
			<td>${order.product}</td>
			<td>${order.type}</td>
			<td>${order.price} ${val}</td>
		</tr>
		`;
	})
	orders_table.innerHTML = table_html;
}

let prev_val = "UAH";
function changePricing(val){
	
	if( val == "UAH" && prev_val == "USD" ){
		prev_val = "UAH";
		new_orders = allOrders.map(function(order){
			order.price = (order.price * 27).toFixed(2);
		})
	}
	if( val == "USD" && prev_val == "UAH" ){
		prev_val = "USD";
		new_orders = allOrders.map(function(order){
			order.price = (order.price / 27).toFixed(2);
		})
	}
	drawOrders(val, allOrders)
}

function filterOrders(){

	let type_filter = document.getElementById("type_filter").value;
	
	let new_orders = allOrders.filter(function(order){
		return order.type == type_filter
	})

	drawOrders(prev_val, new_orders)
}

function drawPrice(){
	let total = allOrders.reduce(function(acc, order){
		return acc + order.price
	},0)
	let result = document.getElementById('result');
	
	result.innerHTML = `Загалом витрачено - ${total} ${prev_val}`
	console.log(total);
}

drawPrice()

drawOrders('UAH', allOrders);