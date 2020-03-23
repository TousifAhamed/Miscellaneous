/*
Get JSON data using AJAX Calls
*/

$.getJSON("https://data-asg.goldprice.org/dbXRates/USD", function(response){
    console.log(response);
    for (var x in response.items[0]){
        console.log(x, "==" ,response.items[0][x]);
    }
});