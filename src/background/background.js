import { detect } from './detect/detect.js';

/*
    background.js: handling all background scripts
*/

/*
    @description: This function listens for tab updates and check if the website is a doomscrolling website.
*/
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    if (chrome.runtime.lastError) {
      console.error('Error:', chrome.runtime.lastError.message);
    } else {
      detect(tab.url);
    }
  }
});