import * as chrome from "chrome.runtime";

document.getElementById("sliderRange").addEventListener("input",changeSize);

document.getElementById("sliderColor").addEventListener("input",changeColor);
function getCurrentTabId(cb) {
    var query = {active: true, currentWindow: true};
    chrome.tabs.query(query, function (tabArray) {
        cb(tabArray[0].id)
    });
}

function connectToCurrentTab () {
    getCurrentTabId(function(currentTabId) {
       chrome.tabs.connect(currentTabId, {name: "cursorCustomizer"});
    });
}
chrome.storage.sync.get('size', function(sizeData){
    document.getElementById("cursorSize").value = "Cursor size "+ sizeData.size+"%";
    document.getElementById("sliderRange").value = sizeData.size;
    
});
chrome.storage.sync.get('color', function(colorData){
    document.getElementById("sliderColor").value = colorData.color;

});

function changeSize(){
    var rangeValue = sliderRange.value;
    var port = connectToCurrentTab();
    chrome.storage.sync.set({size:rangeValue});
    chrome.storage.sync.get('size', function(sizeData){
        document.getElementById("cursorSize").value = "Cursor size "+ sizeData.size+"%";
    }
    
);
    port.postMessage({size: sliderRange.value});
}

function changeColor(){ 
    var port=connectToCurrentTab();
    var colorValue = sliderColor.value;
    chrome.storage.sync.set({color:colorValue});
    port.postMessage({color:colorValue}) ;

}

