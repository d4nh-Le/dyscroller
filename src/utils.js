
export const saveData = (key, value, callback) => {
  chrome.storage.local.get(
    { [key]: [] },
    (result) => {
      const newData = [...result[key]];

      if (value) {
        if (!newData.includes(value)) {
          newData.push(value);
          chrome.storage.local.set(
            { [key]: newData },
            () => {
              if (callback !== null) {
                callback();
              }
            }
          );
        } else {
          alert(`Value for ${key} already saved.`);
        }
      } else {
        alert("Invalid value provided.");
      }
    }
  );
};


export const getData = (key, callback) => {
  chrome.storage.local.get({ [key]: [] }, (result) => {
    callback(result[key]);
  });
};

export const removeData = (key, value, keyToCompare=null, callback=null) => {
  chrome.storage.local.get(
    { [key]: [] },
    (result) => {
      const data = [ ...result[key] ];
      let newData;
      if (!keyToCompare) {
        newData = data.filter((item) => item !== value);
      } else {
        newData = data.filter((item) => item[keyToCompare] !== value);
      }

      chrome.storage.local.set(
        { [key]: newData },
        () => {
          if (callback !== null) {
            callback();
          }
          console.log(`Value has been removed from ${key}.`);
        }
      );
    }
  );
};

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

export const isDataSaved = (key, value, callback) => {
  chrome.storage.local.get(
    { [key]: [] },
    (result) => {
      const data = [ ...result[key] ];
      const isSaved = data.includes(value);
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