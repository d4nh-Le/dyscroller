import { detect } from './detect/detect.js';
import { initialize } from './initialize/initialize.js';

/*
    background.js: handling all background scripts
*/

/*
    @description: This function listens for the extension installation and initializes the local storage.
*/
chrome.runtime.onInstalled.addListener(() => {
  initialize();
});

/*
    @description: This function listens for tab updates and check if the website is a doomscrolling website.
*/
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete' && tab.active) {
//     if (chrome.runtime.lastError) {
//       console.error('Error:', chrome.runtime.lastError.message);
//     } else {
//       detect(tab.url, tabId);
//     }
//   }
// });


/*
    @description: This function listens for tab activation and executes the content script.
*/
chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
      if (tab.url && tab.url.startsWith('http')) {
          chrome.scripting.executeScript({
              target: { tabId: activeInfo.tabId },
              files: ['content.js']
          });
      }
  });
});

