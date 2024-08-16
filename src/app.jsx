import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import UsernameContainer from './containers/username.container.jsx';
import PreferenceContainer from './containers/preference.container.jsx';
import UrlForm from './components/url-form';
import TasksList from './components/tasks-list';


const App = () => {
    const [currentComponentId, setCurrentComponentId] = useState('urlForm');

    const navigateTo = (componentId) => {
        setCurrentComponentId(componentId);
    };

    const renderComponent = () => {
        switch (currentComponentId) {
            case 'username':
                return <UsernameContainer onNext={() => navigateTo('urlForm')} />;
            case 'urlForm':
                return <UrlForm onNext={() => navigateTo('preference')} />;
            case 'preference':
                return <PreferenceContainer onNext={() => navigateTo('username')} />;

            default:
                return <div>Component not found</div>;
        }
    };

    return (
        <div>
            {renderComponent()}
        </div>
    );
};

const root = createRoot(document.getElementById('react-root'));
root.render(<App />);