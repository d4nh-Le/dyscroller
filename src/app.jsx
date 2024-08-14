import React from "react";
import { createRoot } from 'react-dom/client';

import Username_Container from './containers/username.container.jsx';


const App = () => {
    return (
        <div>
            <Username_Container />
        </div>
    );
    };

const root = createRoot(document.getElementById('react-root'));
root.render(<App />);