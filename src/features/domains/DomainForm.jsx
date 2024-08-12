import React from "react";

import styles from "./DomainForm.module.css";

export default function DomainForm() {
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

  return (
    <form className={styles["domain-form"]} onSubmit={handleSubmit}>
      <label htmlFor="domainName">
        Domain Name:
        <input
          type="text"
          name="domainName"
          id="domainName"
          aria-label="Domain Name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
