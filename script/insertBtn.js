import { mod } from "./mod.js";
import paypalCodeGen from "./paypalCodeGen.js";
import amazonSite from "./amazon.js";

let previewContainer = "";
previewContainer = mod.getModWindow();
document.body.appendChild(previewContainer);

const paypalButtonContainer = document.createElement("div");
paypalButtonContainer.id = "paypal-button-container";
const paypalJSSDK = document.createElement("script");
paypalJSSDK.src = paypalCodeGen.sdkSrcGen();
document.body.appendChild(paypalJSSDK);

const insertTarget = amazonSite.getInsertTarget();
if (insertTarget === "gutterCartViewForm") {
  paypalButtonContainer.style = "width:300px";
}
if (insertTarget === "buybox") {
  paypalButtonContainer.style = "width:250px";
}

const targetElement = document.getElementById(insertTarget);
targetElement.appendChild(paypalButtonContainer);

previewContainer.addEventListener("close", () => {
  if (previewContainer.returnValue === "doInsert") {
    const render = document.createElement("script");
    render.text = mod.JScode;
    document.body.appendChild(render);
  }
});
previewContainer.showModal();
