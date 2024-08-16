
export const saveData = (key, value) => {
  chrome.storage.local.get(
    { savedData: {} },
    (result) => {
      const { savedData } = result;
      const data = { ...savedData };

      if (key && value) {
        if (!data.hasOwnProperty(key)) {
          data[key] = value;
          chrome.storage.local.set(
            { savedData: data },
            () => alert(`${key}: ${value} saved.`)
          );
        } else {
          alert(`${key}: ${value} is already saved.`);
        }
      } else {
        alert("Invalid key or value provided.");
      }
    }
  );
};


export const getData = (key) => {
  return new Promise((resolve) => {
    chrome.storage.local.get({ savedData: {} }, (result) => {
      resolve(result[key]);
    });
  });
};
export const removeData = (key, value) => {
  chrome.storage.local.get(
    { savedData: {} },
    (result) => {
      const { savedData } = result;
      const data = { ...savedData };
      const newData = {};

      Object.keys(data).forEach((dataKey) => {
        if (data[dataKey] !== value) {
          newData[dataKey] = data[dataKey];
        }
      });

      chrome.storage.local.set(
        { savedData: newData },
        () => {
          console.log(`${key}: ${value} has been removed.`);
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
    { savedData: {} },
    (result) => {
      const { savedData } = result;
      const data = { ...savedData };

      if (key && value) {
        if (!data.hasOwnProperty(key)) {
          data[key] = value;
          chrome.storage.local.set(
            { savedData: data },
            () => {
              callback(true);
            }
          );
        } else {
          callback(false);
        }
      } else {
        callback(false);
      }
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