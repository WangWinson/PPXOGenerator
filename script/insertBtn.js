import { SPBCode } from "./mod.js";
import paypalCodeGen from "./paypalCodeGen.js";

//Model is used to display the preview of the code first. Then let the user insert the button

const previewContainer = document.createElement("dialog");
const preFormat = document.createElement("pre");

const codeTag = document.createElement("code");
codeTag.className = "language-html";
codeTag.textContent = SPBCode;

preFormat.innerHTML = "<h1>This is the SPB integration code</h1>";
preFormat.appendChild(codeTag);
previewContainer.appendChild(preFormat);

document.body.appendChild(previewContainer);

const paypalButtonContainer = document.createElement("div");
paypalButtonContainer.id = "paypal-button-container";
const paypalJSSDK = document.createElement("script");
paypalJSSDK.src = paypalCodeGen.sdkSrcGen();
document.body.appendChild(paypalJSSDK);
document.body.appendChild(paypalButtonContainer);

previewContainer.showModal();
