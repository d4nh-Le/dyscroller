import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import Username_Container from './containers/username.container.jsx';
import Preference_Container from './containers/preference.container.jsx'


const App = () => {

    return (
        <div>
            <Username_Container />
            <Preference_Container />
        </div>
    );
};

const root = createRoot(document.getElementById('react-root'));
root.render(<App />);