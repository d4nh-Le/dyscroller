/*
    @description: This function checks if the website is a doomscrolling website or not.
    @param url: the url of the website to be checked
    @return: (TO BE IMPLEMENTED)
*/
export function detect(url) {
    if (chrome) {
        chrome.storage.local.get("domains", (result) => {
          const domains = result.domains || [];
          const doomscroll_url = url
          console.log(doomscroll_url)
  
            if (domains.includes(doomscroll_url)) {
                console.log("Dyscroller: doomscroll detected.");
                return;
            }
        }
    )}
    else {
        console.error("Chrome API not available");
    }
}