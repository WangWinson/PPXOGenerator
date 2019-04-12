// define the order request
//instead of making or JS as text, make these 2 event as original JS
//later the param of actions.order.create would be generated based on
//the shopping cart web page
let steps = {
  // Set up the transaction
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

  // Finalize the transaction
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      // Show a success message to the buyer
      alert("Transaction completed by " + details.payer.name.given_name + "!");
    });
  }
};

chrome.storage.sync.get(["ppxosdkconfig"], result => {
  console.log(result);
  const sdkConfigs = result.ppxosdkconfig;
  //insert SPB div
  let sdkQueryParams = [];

  for (const key in sdkConfigs) {
    if (sdkConfigs.hasOwnProperty(key)) {
      if (sdkConfigs[key]) {
        sdkQueryParams.push(key + "=" + sdkConfigs[key]);
      }
    }
  }
  sdkQueryParams = sdkQueryParams.join("&");

  const sdkSrc = " https://www.paypal.com/sdk/js?" + sdkQueryParams;
  const testform = document.getElementById("form");
  const testButton = document.createElement("div");
  testButton.innerHTML = '<div id="paypal-button-container">123</div>';
  testform.appendChild(testButton);
  const jssdk = document.createElement("script");
  jssdk.src = sdkSrc;
  jssdk.onload = function() {
    //once JS SDK loaded, insert render button script
    const render = document.createElement("script");
    render.text =
      'paypal.Buttons.call(window["steps"]).render("#paypal-button-container");';
    document.body.appendChild(render);
  };

  document.body.appendChild(jssdk);
});
