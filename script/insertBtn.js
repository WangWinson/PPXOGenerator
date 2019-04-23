import { SPBCode } from "./mod.js";

//Model is used to display the preview of the code first. Then let the user insert the button

const previewContainer = document.createElement("dialog");
const preFormat = document.createElement("pre");

const codeTag = document.createElement("code");
codeTag.className = "language-html";
codeTag.textContent = SPBCode;

const previewContainerTitle = document.createElement("h1");
previewContainerTitle.innerText = "This is the SPB integration code";

preFormat.appendChild(previewContainerTitle);
preFormat.appendChild(codeTag);
previewContainer.appendChild(preFormat);

document.body.appendChild(previewContainer);
previewContainer.showModal();

//If modal already injected, just show it
// if (document.getElementById("modal") != null) {
//   document.getElementById("modal").className = "modal is-active";
// } else {
//   document.body.appendChild(mod);
// }
