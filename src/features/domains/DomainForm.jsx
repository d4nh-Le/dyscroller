import React from "react";

import styles from "./DomainForm.module.css";

export default DomainForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (chrome) {
      chrome.storage.local.get("domains", (result) => {
        const domains = result.domains || [];
        const domainName = e.target.domainName.value;

        if (domains.includes(domainName)) {
          console.error("Domain already exists");
          return;
        }

        chrome.storage.local.set(
          { domains: [...domains, domainName] },
          () => {
            console.log("Domain added");
          }
        );
      });
    } else {
      console.error("Chrome API not available");
    }
  };

  const renderInput = () => (
    <label htmlFor="domainName">
      Domain Name:
      <input
        type="text"
        name="domainName"
        id="domainName"
        aria-label="Domain Name"
      />
    </label>
  );
  
  const renderSubmitBtn = () => <button type="submit">Submit</button>;

  return (
    <form className={styles["domain-form"]} onSubmit={handleSubmit}>
      {renderInput()}
      {renderSubmitBtn()}
    </form>
  );
};
