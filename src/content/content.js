chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "stop") {
      console.log("Received stop message");
    } else if (request.message === "google_alert") {
      let luckyNumber = Math.floor(Math.random() * 101);
      switch (luckyNumber) {
        case 0:
          alert("REMINDER: Please finish your tasks before you scroll aimlessly!!!");
          break;
        case 1:
          alert("REMINDER: Don't you have some tasks to finish?");
          break;
        case 2:
          alert("REMINDER: You have tasks to finish! Finish them first before you waste time!");
          break;
        case 3:
          alert("REMINDER: How about you finish your tasks first huh?");
          break;
        case 4:
          alert("REMINDER: I'm not letting you continue, what are you gonna do about it? Finish your tasks first!");
          break;
        case 5:
          alert("REMINDER: You have tasks to finish, don't you?");
          break;
        case 6:
          alert("REMINDER: You shall not pass! Finish your tasks first!");
          break;
        case 7:
          alert("REMINDER: My job is to stop you when you're not doing your tasks. Finish them first!");
          break;
        case 8:
          alert("REMINDER: LOL, you thought you could get away with not finishing your tasks?");
          break;
        case 9:
          alert("REMINDER: You have tasks to finish, don't you?");
          break;
        case 10:
          alert("REMINDER: Are you frustrated? You want to uninstall me? What are you? A botch?! Finish your tasks first!");
          break;
    }
  }});