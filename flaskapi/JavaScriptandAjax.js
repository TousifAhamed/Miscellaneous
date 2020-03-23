/* 
    JavaScripts and Jquery Ajax calls
*/

// create an object 
const Http = new XMLHttpRequest();

// Creating Http response
Http.open("GET", "https://data-asg.goldprice.org/dbRates/USD");

// Send the http response
Http.send();

Http.onreadystatechange = function() {
    if(this.readyState==4 && this.status==200){
        console.log(Http.responseText);
    }
}