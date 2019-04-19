import { sdkConfig } from "./parameters.js";

//TODO: Load the config from extension's settings via local storage and merge with the default params.

// chrome.storage.sync.get(key,() => {
//  update sdkConfig
//})

// Now we have the configuration information for the SDK.

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

const targetEl = "#paypal-button-container";
let buttonConfig = {
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01"
          }
        }
      ]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert("Transaction completed by " + details.payer.name.given_name + "!");
    });
  }
};

let replacer = (key, value) => {
  // if we get a function, give us the code for that function
  if (typeof value === "function") {
    return value.toString();
  }
  return value;
};

//TODO, generate the string representation for the buttonConfig object
//For now just use JSON to do it.
let buttonConfigCode = JSON.stringify(buttonConfig, replacer, 2);

let SPBRenderCodeGen = () => {
  return `paypal.Buttons(${buttonConfigCode}).render(${targetEl});`;
};

let SPBRenderGen = () => {
  console.log(buttonConfig);
  return `paypal.Buttons(${buttonConfig}).render(${targetEl});`;
};

const paypalCodeGen = {
  sdkSrcGen,
  SPBRenderGen,
  SPBRenderCodeGen
};

export default paypalCodeGen;
