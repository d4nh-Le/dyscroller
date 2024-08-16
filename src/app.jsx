import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import UsernameContainer from './containers/username.container.jsx';
import PreferenceContainer from './containers/preference.container.jsx';
import UrlForm from './components/url-form';
import { DysfunctionalTasksList } from './components/tasks-list';


const App = () => {
    const [currentComponentId, setCurrentComponentId] = useState('preference');

    const navigateTo = (componentId) => {
        setCurrentComponentId(componentId);
    };

    const renderComponent = () => {
        switch (currentComponentId) {
            case 'username':
                return <UsernameContainer onNext={() => navigateTo('preference')} />;
            case 'preference':
                return <PreferenceContainer onNext={() => navigateTo('username')} />;
            case 'urlForm':
                return <UrlForm />;
            default:
                return <div>Component not found</div>;
        }
    };

    return (
        <div>
            {renderComponent()}
            <DysfunctionalTasksList />
        </div>
    );
};

const root = createRoot(document.getElementById('react-root'));
root.render(<App />);