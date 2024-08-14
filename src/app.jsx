import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

import {
    isChromeExtension, onUrlChange, isUrlSaved,
} from "./utils";

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
            <h1>Start Dyscroller here!</h1>
        </div> 
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);