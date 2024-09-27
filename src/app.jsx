import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import UsernameContainer from './containers/username.container.jsx';
import PreferenceContainer from './containers/preference.container.jsx';
import UrlForm from './containers/url.container.jsx';
import TasksList from './containers/tasklist.container.jsx'
import { DysfunctionalTasksList } from './components/tasks-list';


const App = () => {
    const [currentComponentId, setCurrentComponentId] = useState('null');

    useEffect(() => {
        chrome.storage.local.get(['preferences'], (result) => {
            if (result.preferences) {
                if (result.preferences.firstTime) {
                    setCurrentComponentId('username');
                } else {
                    setCurrentComponentId('urlForm');
                }
            } else {
                setCurrentComponentId('username');
            }
        });
    }, []);

    const navigateTo = (componentId) => {
        setCurrentComponentId(componentId);
    };

    const renderComponent = () => {
        switch (currentComponentId) {
            case 'username':
                return <UsernameContainer onNext={() => navigateTo('urlForm')} />;
            case 'urlForm':
                return <UrlForm onNext={() => navigateTo('tasksList')} />;
            case 'tasksList':
                return <TasksList navigateTo={navigateTo} />;
            case 'preference':
                return <PreferenceContainer onNext={() => navigateTo('tasksList')} />;


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

document.addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.getElementById('react-root'));
    root.render(<App />);
});