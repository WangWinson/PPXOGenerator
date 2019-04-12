//insert SPB div
var testform = document.getElementById("form");
var testButton = document.createElement("div");
testButton.innerHTML = '<div id="paypal-button-container">123</div>';
testform.appendChild(testButton);

//insert JS SDK
var jssdk = document.createElement("script");
jssdk.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=USD";
jssdk.onload = function() {
  //once JS SDK loaded, insert render button script
  var render = document.createElement("script");
  render.text =
    'paypal.Buttons.call(window["steps"]).render("#paypal-button-container");';
  document.body.appendChild(render);
};

//instead of making or JS as text, make these 2 event as original JS
//later the param of actions.order.create would be generated based on
//the shopping cart web page
var steps = {
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

document.body.appendChild(jssdk);
