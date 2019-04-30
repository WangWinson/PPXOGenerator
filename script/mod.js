import paypalCodeGen from "./paypalCodeGen.js";

const sdkSrc = paypalCodeGen.sdkSrcGen();
const SPBImplementCode = paypalCodeGen.SPBRenderCodeGen();

const SPBCode = `
  <div id="dlgcontent">
    <script src="${sdkSrc}"></script>
    <script>
      ${SPBImplementCode}
    </script>
  </div>
`;

function createMod() {
  const prismJS = document.createElement("script");
  const prismCSS = document.createElement("link");
  prismJS.src =
    "chrome-extension://dnipieldnbmepadmcjebfdifapocnkpp/prism/prism.js";
  prismCSS.rel = "stylesheet";
  prismCSS.href =
    "chrome-extension://dnipieldnbmepadmcjebfdifapocnkpp/prism/prism.css";
  let head =
    document.head ||
    document.getElementsByTagName("head")[0] ||
    document.documentElement;
  head.insertBefore(prismCSS, head.lastChild);
  const previewContainer = document.createElement("dialog");
  previewContainer.id = "SPBCode-Preview";
  previewContainer.appendChild(prismJS);
  const preFormat = document.createElement("pre");
  const codeTag = document.createElement("code");
  codeTag.className = "language-html";
  codeTag.textContent = SPBCode;
  preFormat.innerHTML = "<h1>This is the SPB integration code</h1>";
  preFormat.appendChild(codeTag);
  previewContainer.appendChild(preFormat);

  const commitButton = document.createElement("button");
  commitButton.id = "okBtn";
  commitButton.textContent = "Insert";

  commitButton.addEventListener("click", () => {
    if (previewContainer.open) {
      previewContainer.close("doInsert");
    }
  });

  previewContainer.appendChild(commitButton);

  const closeButton = document.createElement("button");
  closeButton.id = "cancelBtn";
  closeButton.textContent = "Close";

  closeButton.addEventListener("click", () => {
    if (previewContainer.open) {
      previewContainer.close("cancel");
    }
  });

  previewContainer.appendChild(closeButton);

  return previewContainer;
}

export const mod = {
  JScode: SPBImplementCode,

  getModWindow: function() {
    if (!document.getElementById("SPBCode-Preview")) {
      return createMod();
    } else {
      return document.getElementById("SPBCode-Preview");
    }
  }
};
