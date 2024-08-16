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
                isUrlSaved(url).then((isSaved) => {
                    if (isUrlSaved(url)) {
                        console.log("Watching for doomscrolling!");
                    }
                });
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