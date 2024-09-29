import "./UrlForm.css";
import React, { useState, useEffect } from "react";

import {isChromeExtension, saveData, isDataSaved, extractURL, validateURL} from "../../utils";

const UrlForm = ({ onNext }) => {
  const [url, setUrl] = useState("");
  const [savedUrls, setSavedUrls] = useState([]);

  useEffect(() => {
    chrome.storage.local.get(['urls'], (result) => {
      if (chrome.runtime.lastError) {
        console.error('Error retrieving values:', chrome.runtime.lastError);
      } else {
        setSavedUrls(result.urls || []);
      }
    });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateURL(url)) {
      alert("Invalid URL provided.");
      return;
    }

    if (isChromeExtension() && url) {
      let domain = extractURL(url);
      saveData("urls", domain, () => {
        isDataSaved("urls", domain, (result) => {
          console.log("Data saved:", result);
        });
      });
    }

    setTimeout(() => {
      chrome.storage.local.get(['urls'], (result) => {
        if (chrome.runtime.lastError) {
          console.error('Error retrieving values:', chrome.runtime.lastError);
        } else {
          setSavedUrls(result.urls || []);
        }
      });
    }, 300);
  };

  const removeData = (key, value, keyToCompare = null, callback = null) => {
    chrome.storage.local.get({ [key]: [] }, (result) => {
      const data = [...result[key]];
      let newData;
      if (!keyToCompare) {
        newData = data.filter((item) => item !== value);
      } else {
        newData = data.filter((item) => item[keyToCompare] !== value);
      }

      chrome.storage.local.set({ [key]: newData }, () => {
        if (callback !== null) {
          callback();
        }
        console.log(`Value has been removed from ${key}.`);
      });
    });
  };

  const getData = (key, callback) => {
    chrome.storage.local.get({ [key]: [] }, (result) => {
      callback(result[key]);
    });
  };

  return (
    <div className="url-form-form-container">
      <div className="logo-container">
        Enter Doom Scroll URLs
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="url">URLs</label>
          <div className="url-form-container">
            <input type="text" name="url" id="url" aria-label="url" value={url} onChange={({ target }) => setUrl(target.value)} placeholder="Enter doom scroll URLs" />
            <button className="form-submit-btn" type="submit">Add</button>
          </div>
        </div>
        <button className="form-submit-btn" type="button" onClick={onNext}>Next</button>
      </form>

      <p className="saved">Saved URLs:</p>
      <div className="saved-urls-container">
        <div className="saved-urls-scroll">
          <ul>
            {savedUrls.map((savedUrl, index) => (
              <div key={index} className="saved-urls-list">
                <li>{savedUrl}
                <button className='remove-btn' onClick={() => removeData("urls", savedUrl, null, () => getData("urls", (urlsResult) => setSavedUrls(urlsResult)))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#3b3b3b" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                </button></li>
              </div>
            ))
            }
          </ul>
        </div>
      </div>

      <p className="url-form-reminder">
        Dyscroller will watch for these websites and remind you when you are doomscrolling and need to focus on the tasks.
      </p>
    </div>
  );
};

export default UrlForm;