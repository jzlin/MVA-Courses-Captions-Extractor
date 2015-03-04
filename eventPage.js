chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request === 'showPageActionButton') {
  	chrome.pageAction.show(sender.tab.id);
  }
});

chrome.pageAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		file: 'extract_captions.js',
		allFrames: true
	}, function (result) {});
});