import UrlForm from "../components/url-form";
import React from "react";

export default function UrlFormContainer({onNext}) {
    return <UrlForm onNext={onNext} />;
}