
// Create a rule that will show the page action when the conditions are met.
const kMatchRule = {
  // Declare the rule conditions.
  conditions: [new chrome.declarativeContent.PageStateMatcher({
    // pageUrl: { urlMatches: ["https://www.baidu.com/*"] },
    pageUrl: { hostEquals: 'www.baidu.com' },
  })],
  // Shows the page action when the condition is met.
  actions: [new chrome.declarativeContent.ShowPageAction()]
}

// Register the runtime.onInstalled event listener.
chrome.runtime.onInstalled.addListener(function () {
  // Overrride the rules to replace them with kMatchRule.
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([kMatchRule]);
  });
});

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//       sendResponse({ farewell: "Got it! :" + request.msg });
//       if ('sdkloaded' !== request.msg) return;
//       chrome.tabs.executeScript({
//         file: "/renderBtn.js",
//         allFrames: true
//       });    
//   });

// chrome.webRequest.onBeforeRequest.addListener(
//   function(info) {
//     console.log("Cat intercepted: " + info.url);
//     // Redirect the lolcal request to a random loldog URL.
//     var i = Math.round(Math.random() * loldogs.length);
//     return {redirectUrl: loldogs[i]};
//   },
//   // filters
//   {
//     urls: [
//       "https://i.chzbgr.com/*"
//     ],
//     types: ["image"]
//   },
//   // extraInfoSpec
//   ["blocking"]);
