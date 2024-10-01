import { extractURL } from "../../utils";

/*
    @description: This function checks if the website is a doomscrolling website or not.
    @param url: the url of the website to be checked
*/

export function detect(url, tabId) {
    if (chrome) {
        chrome.storage.local.get("tasks", (result) => {
            const tasks = result.tasks || [];
            if (!tasks || tasks.length === 0) {
                return;
            }
            chrome.storage.local.get("urls", (result) => {
                    const urls = result.urls || [];
                    const extracted_url = extractURL(url);
                    
                    const doomscroll_url = extracted_url;

                    if (urls.includes(doomscroll_url)) {
                        if (chrome && chrome.storage) {
                            chrome.storage.local.get(['preferences'], (result) => {
                                if (result.preferences) {

                                    const countdown = result.preferences.doomscrollCountdown;
                                    let mode = result.preferences.mode;
                                    const alertCountLimit = (mode === "easy") ? 10 : (mode === "hard") ? 300 : 10;
                                    console.log("Detected doomscrolling website: " + doomscroll_url);
                                    console.log("Countdown starts for: " + countdown + " minutes");
                                    const countdownMs = countdown * 60 * 1000;

                                    setTimeout(() => {
                                        let alertCount = 0;
                                        const alertInterval = setInterval(() => {
                                            chrome.tabs.sendMessage(tabId, { message: "google_alert" });
                                            alertCount++;
                                            if (alertCount >= alertCountLimit) {
                                                clearInterval(alertInterval);
                                            }
                                        }, 1000);
                                    }, countdownMs);
                                }
                            });
                        }
                        return;
                    }
                });
            }
        );
    } else {
        console.error("Chrome API not available");
    }
}