import React, { useState } from "react";

import {
  isChromeExtension, saveData, getData,
  getFullUrl,
} from "../../utils";

import "./UrlForm.css";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChromeExtension() && url) {
      saveData("urls", getFullUrl(url), () => {
        getData("urls", (urlsResult) => {
          setUrls(urlsResult);
          setUrl("");
        });
      });
    }
  };

  const renderInput = () => (
    <>
      <label htmlFor="url">
        URL to Watch
      </label>
      <input
        type="text"
        name="url"
        id="url"
        aria-label="url"
        value={url}
        onChange={({ target }) => setUrl(target.value)}
      />
    </>
  );
  
  const renderSubmitBtn = () => (
    <button type="submit">Add URL</button>
  );

  const renderUrls = () => {
    if (urls && urls.length) {
      return (
        <ul>
          {urls.map((url, index) => (
            <li key={"url-" + index}>
              {url}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      {renderInput()}
      {renderSubmitBtn()}
      {renderUrls()}
    </form>
  );
};

export default UrlForm;