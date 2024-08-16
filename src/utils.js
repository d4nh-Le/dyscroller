
export const saveUrl = (inputUrl) => {
  const targetUrl = getFullUrl(inputUrl);
  if (targetUrl) {
    chrome.storage.local.get(
      {savedUrls: []},
      (result) => {
        const { savedUrls } = result;
        const urls = [...savedUrls];
        alert(result);
        if (targetUrl && !urls.includes(targetUrl)) {
            urls.push(targetUrl);
            chrome.storage.local.set(
              {savedUrls: urls},
              () => alert(targetUrl + " saved.")
            );
        }
      }
    );
  }
}


export const getUrls = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get("urls", (result) => {
      resolve(result.urls || []);
    });
  });
};

export const removeUrl = (targetUrl) => {
  chrome.storage.local.get(
    {savedUrls: []},
    (result) => {
      const { savedUrls } = result;
      const urls = [...savedUrls];
      const finalUrls = urls.filter((savedUrl) => savedUrl !== targetUrl);

      chrome.storage.local.set(
        {savedUrls: finalUrls},
        () => {
          console.log(url + " has been removed.");
        }
      );
  });
}

export const isChromeExtension = () => {
  return typeof chrome !== "undefined";
};

export const onUrlChange = (callback) => {
  chrome.webNavigation.onHistoryStateUpdated.addListener((historyState) => {
    const { url } = historyState;
    if (typeof callback === "function") {
      callback(url);
    }
  });
};

export const isUrlSaved = (url, callback) => {
  chrome.storage.local.get(
    {savedUrls: []},
    (result) => {
      const { savedUrls } = result;
      const isSaved = savedUrls.includes(url);
      callback(isSaved);
    }
  );
};

export const getFullUrl = (input) => {
  // Trim any leading or trailing whitespace
  let inputUrl = input;
  inputUrl = inputUrl.trim();

  // Check if the input already starts with a valid protocol
  if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
      // If not, prepend "https://" by default
      inputUrl = "https://" + inputUrl;
  }

  try {
      let url = new URL(inputUrl);
      return url.href;
  } catch (e) {
      console.error("Invalid URL provided: " + input);
      return null;
  }
};