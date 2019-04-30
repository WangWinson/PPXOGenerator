if (
  document.querySelector(
    `script[src="${chrome.extension.getURL("/script/insertBtn.js")}"]`
  )
) {
  previewContainer = document.getElementById("SPBCode-Preview");
  previewContainer.showModal();
} else {
  let script = document.createElement("script");
  script.setAttribute("type", "module");
  script.setAttribute("src", chrome.extension.getURL("/script/insertBtn.js"));
  let head =
    document.head ||
    document.getElementsByTagName("head")[0] ||
    document.documentElement;
  head.insertBefore(script, head.lastChild);
}
console.log(chrome.extension.getURL("/prism/prism.js"));
console.log(chrome.extension.getURL("/prism/prism.css"));
