import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import {
    isChromeExtension, onUrlChange, isUrlSaved,
} from "./utils";

import Username_Container from './containers/username.container.jsx';
import UrlForm from "./components/url-form";
import Preference_Container from './containers/preference.container.jsx'


const App = () => {
    useEffect(() => {
        if (isChromeExtension()) {
            onUrlChange((url) => {
                console.log("URL has changed!");
                if (isUrlSaved(
                    url,
                    (result) => {
                        if (result) {
                            alert("URL has been saved.");
                        } else {
                            alert("URL has not been saved.");
                        }
                    }
                ));
            });
        }
    }, []);

    return (
        <div>
            <Username_Container />
            <UrlForm />
            <Preference_Container />
        </div>
    );
};

const root = createRoot(document.getElementById('react-root'));
root.render(<App />);