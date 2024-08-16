chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "stop") {
        console.log("Received stop message");
    } else if (request.message === "google_alert") {
        console.log("Received google_alert message");
        alert("REMINDER: PLEASE FINISH YOUR TASKS BEFORE YOU SCROLL AIMLESSLY!!!");
    }
});

window.addEventListener('scroll', () => {
    chrome.runtime.sendMessage({ message: 'user_scrolled' });
});