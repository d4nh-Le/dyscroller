import React, { useState } from "react";

import { isChromeExtension, saveUrl } from "../../utils";

import styles from "./UrlForm.module.css";

const UrlForm = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChromeExtension() && url) {
      saveUrl(url)
        .then(() => {
          console.log(`URL saved: ${url}`);
          setUrl("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const renderInput = () => (
    <label htmlFor="url">
      URL:
      <input
        type="text"
        name="url"
        id="url"
        aria-label="url"
      />
    </label>
  );
  
  const renderSubmitBtn = () => (
    <button type="submit">Submit</button>
  );

  return (
    <form className={styles["url-form"]} onSubmit={handleSubmit}>
      {renderInput()}
      {renderSubmitBtn()}
    </form>
  );
};

export default UrlForm;