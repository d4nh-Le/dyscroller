import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

import {
    isChromeExtension, onUrlChange, isUrlSaved,
} from "./utils";

import Username_Container from './containers/username.container.jsx';
import Popup from "./components/popup";
import UrlForm from "./components/url-form";


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
            <Popup />
            <UrlForm />
        </div>
    );
};

const root = createRoot(document.getElementById('react-root'));
root.render(<App />);