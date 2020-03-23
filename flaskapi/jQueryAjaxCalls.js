// jQuery Ajax Calls

$.ajax({
  url: 'https://data-asg.goldprice.org/dbXRates/USD',
  type: 'GET',
  success: function (resp) {
    console.log(resp);
  },
  error: function (error) {
    console.log(error);
  }
});