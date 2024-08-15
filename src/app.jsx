import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import {
    isChromeExtension, onUrlChange, isUrlSaved,
} from "./utils";


import Username_Container from './containers/username.container.jsx';
import Preference_Container from './containers/preference.container.jsx'


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
            {/* <Username_Container /> */}
            <Preference_Container />
        </div>
    );
};

const root = createRoot(document.getElementById('react-root'));
root.render(<App />);