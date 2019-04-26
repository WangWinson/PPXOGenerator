import { sdkConfig } from "./parameters.js";
import amazonSite from "./amazon.js";

//TODO: Load the config from extension's settings via local storage and merge with the default params.

// chrome.storage.sync.get(key,() => {
//  update sdkConfig
//})

// Now we have the configuration information for the SDK.

const productDetials = amazonSite.amazonDetail();
const cartDetails = amazonSite.amazonCartDetail();

let sdkSrcGen = () => {
  let sdkQueryParams = [];

  for (const key in sdkConfig) {
    if (sdkConfig.hasOwnProperty(key)) {
      if (sdkConfig[key]) {
        sdkQueryParams.push(key + "=" + sdkConfig[key]);
      }
    }
  }
  sdkQueryParams = sdkQueryParams.join("&");

  return `https://www.paypal.com/sdk/js?${sdkQueryParams}`;
};

//TODO:Get the target to insert the SPB on the current web page
// e.g.: const targetEl = getTargetEl();

const targetElID = "paypal-button-container";

let onCartPage = false;
if (location.href.indexOf("https://www.amazon.com/gp/cart/view.html") > -1) {
  onCartPage = true;
}

let buttonConfig = {};

if (onCartPage) {
  const totalAmount = cartDetails.reduce((subtotal, lineItem) => {
    parseFloat(subtotal) +
      parseFloat(lineItem.unit_amount.value) * parseFloat(lineItem.quantity);
  });

  buttonConfig = `
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: ${totalAmount.toFixed(2)},
              breakdown: {
                item_total: {
                  currency_code: ${cartDetails[0].unit_amount.currency_code},
                  value: ${totalAmount.toFixed(2)}
                }
              }
            },
            items: ${JSON.stringify(cartDetails)}
          }
        ]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert("Transaction completed by " + details.payer.name.given_name + "!");
      });
    }
  }).render("#${targetElID}");`;
} else {
  const totalAmount =
    parseFloat(productDetials.unit_amount.value) *
    parseInt(productDetials.quantity);

  buttonConfig = `
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: ${totalAmount.toFixed(2)},
              breakdown: {
                item_total: {
                  currency_code: ${productDetials.unit_amount.currency_code},
                  value: ${totalAmount.toFixed(2)}
                }
              }
            },
            items: ${JSON.stringify([productDetials])}
          }
        ]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert("Transaction completed by " + details.payer.name.given_name + "!");
      });
    }
  }).render("#${targetElID}");`;
}

let SPBRenderCodeGen = () => {
  return buttonConfig;
};

const paypalCodeGen = {
  sdkSrcGen,
  SPBRenderCodeGen
};

export default paypalCodeGen;
