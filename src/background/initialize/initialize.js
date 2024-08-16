/*
    @description: initialize the local storage with the default values
*/

export function initialize() {
    try {
        initializeTasks();
        initializeURL();
        initializePreferences();
    }
    catch (e) {
        console.error(e);
    }
}

function initializeTasks() {
    const tasks = {
        tasks: [
            {
                description: "First Task",
                isDone: false
            }
        ]
    };

    if (chrome) {
        chrome.storage.local.set({ tasks }, () => {
            console.log("Initialized tasks table");
        });
    } else {
        console.error("Chrome API not available");
    }   
}

function initializeURL() {
    const urls = ["https://www.tiktok.com/"];

    if (chrome) {
        chrome.storage.local.set({ urls }, () => {
            console.log("Initialized URL");
        });
    } else {
        console.error("Chrome API not available");
    }
}

function initializePreferences() {
    const preferences = {
        name: "Default",
        doomscrollCountdown: 5,
        firstTime: true
    };

    if (chrome) {
        chrome.storage.local.set({ preferences }, () => {
            console.log("Initialized preferences");
        });
    } else {
        console.error("Chrome API not available");
    }
}
