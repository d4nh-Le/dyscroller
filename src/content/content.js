chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "stop") {
      console.log("Received stop message");
    } else if (request.message === "google_alert") {
      console.log("Received google_alert message");
      alert("REMINDER: PLEASE FINISH YOUR TASKS BEFORE YOU SCROLL AIMLESSLY!!!");
    }
  });