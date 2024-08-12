import React from "react";

import styles from "./DomainForm.module.css";

export default function DomainForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
