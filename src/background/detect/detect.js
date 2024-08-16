/*
    @description: This function checks if the website is a doomscrolling website or not.
    @param url: the url of the website to be checked
*/
export function detect(url, tabId) {
    if (chrome) {
        chrome.storage.local.get("urls", (result) => {
            const urls = result.urls || [];
            const doomscroll_url = url;

            if (urls.includes(doomscroll_url)) {
                console.log("Dyscroller: doomscroll detected.");

                if (chrome && chrome.storage) {
                    chrome.storage.local.get(['preferences'], (result) => {
                        if (result.preferences) {
                            const countdown = result.preferences.doomscrollCountdown;
                            console.log("Countdown starts for: " + countdown + " minutes");
                            const countdownMs = 3000;

                            setTimeout(() => {
                                chrome.tabs.sendMessage(tabId, { message: "stop" });

                                let alertCount = 0;
                                const alertInterval = setInterval(() => {
                                    if (alertCount < 10) {
                                        chrome.tabs.sendMessage(tabId, { message: "google_alert" });
                                        alertCount++;
                                    } else {
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
    } else {
        console.error("Chrome API not available");
    }
}