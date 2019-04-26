export default {
  amazonDetail: function() {
    let amount = "";
    let productname = "";
    let quantity = "";
    let description = "";
    let currency = "";

    productname = jQuery("#productTitle")
      .text()
      .trim()
      .substr(0, 100);
    amount = jQuery("#cerberus-data-metrics").attr("data-asin-price");
    currency = jQuery("#cerberus-data-metrics").attr("data-asin-currency-code");
    quantity =
      jQuery("#quantity").length == 0
        ? "1"
        : jQuery("#quantity")
            .find("option:selected")
            .val();

    let detail = {
      unit_amount: { currency_code: currency, value: amount },
      name: productname,
      quantity: quantity
    };
    return detail;
  },
  amazonCartDetail: function() {
    let details = [];
    let wholelist = jQuery("[data-name='Active Items'] > div");

    for (let index = 0; index < wholelist.length; index++) {
      let detail = {
        unit_amount: {
          currency_code: $(wholelist[index])
            .find(".sc-product-price")
            .text()
            .replace(/\s+/g, "")
            .substr(0, 3),
          value: jQuery(wholelist[index]).attr("data-price")
        },
        quantity: jQuery(wholelist[index]).attr("data-quantity"),
        name: jQuery(wholelist[index])
          .find(".sc-product-title")
          .text()
          .trim()
          .replace(/^\s+|\s+$/g, "")
          .substr(0, 100)
        // currency: $(wholelist[index]).find(".sc-product-price").text().replace(/\s+/g,"").substr(0,3)
      };
      details.push(detail);
    }
    return details;
  }
};
