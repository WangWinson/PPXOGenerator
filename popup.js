
var insertBtn = document.getElementById('insert');

insertBtn.onclick = function (e) {
    console.log('12312321');
    chrome.tabs.executeScript({
        file: "/insertBtn.js",
        allFrames: true
    } 
    // function () {
    //     console.log('---------- js SDK downloaded ----------');
    //     chrome.tabs.executeScript({
    //         file: "/renderBtn.js",
    //         allFrames: true
    //     });
    // }
    );
}