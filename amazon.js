function amazonDetail() {
  let amount = '';
  let productname = '';
  let quantity = '';
  let description = '';
  let currency = '';

  productname = $('#productTitle').text();
  amount = $('#cerberus-data-metrics').attr('data-asin-price');
  // amount = $('#priceblock_ourprice').text();
  currency = $('#cerberus-data-metrics').attr('data-asin-currency-code');
  quantity = $('#quantity').find("option:selected").text();

  let detail = {
    "amount" : amount,
    "productname" : productname,
    "quantity" : quantity,
    "currency" : currency
  }
  return detail;
}

function amazonCartDetail() {
  let details =[];
  let wholelist = $("[data-name='Active Items'] > div")

  for (let index = 0; index < wholelist.length; index++) {
    let detail = {
      amount: $(wholelist[index]).attr('data-price'),
      quantity: $(wholelist[index]).attr('data-quantity'),
      productname: $(wholelist[index]).find(".sc-product-title").text().replace(/^\s+|\s+$/g,""),
      currency: $(wholelist[index]).find(".sc-product-price").text().replace(/\s+/g,"").substr(0,3)
    }
    details.push(detail)
  }
  return details;
}