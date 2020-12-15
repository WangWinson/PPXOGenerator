import { sdkConfig } from "./parameters.js";

var insertBtn = document.getElementById("insert");

insertBtn.onclick = function(e) {
  chrome.storage.sync.set({ ppxosdkconfig: sdkConfig }, () => {
    chrome.tabs.executeScript({
      file: "/insertBtn.js",
      allFrames: true
    });
  });
};
