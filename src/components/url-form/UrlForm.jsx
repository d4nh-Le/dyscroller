import React, { useState } from "react";

import { isChromeExtension, saveUrl, isUrlSaved } from "../../utils";

import "./UrlForm.css";

const UrlForm = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChromeExtension() && url) {
      saveUrl(url, () => {
        isUrlSaved(url, (result) => {
            alert(result);
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

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      {renderInput()}
      {renderSubmitBtn()}
    </form>
  );
};

export default UrlForm;