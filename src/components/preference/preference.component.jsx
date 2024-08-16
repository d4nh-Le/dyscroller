import React, { useState, useEffect } from 'react';
import './preference.component.css'; // Import the CSS file for styling

const loadPreferences = (setPreferences, setSelectedOption) => {
    if (chrome && chrome.storage) {
        chrome.storage.local.get(['preferences'], (result) => {
            if (result.preferences) {
                setPreferences(result.preferences);
                setSelectedOption(result.preferences.doomscrollCountdown.toString());
                console.log("Loaded preferences:", result.preferences);
            } else {
                console.log("No preferences found, initializing default preferences.");
                initializePreferences();
            }
        });
    } else {
        console.error("Chrome API not available");
    }
};

const initializePreferences = () => {
    const preferences = {
        name: "Default",
        doomscrollCountdown: 5,
        firstTime: true
    };

    if (chrome && chrome.storage) {
        chrome.storage.local.set({ preferences }, () => {
            console.log("Initialized preferences");
        });
    } else {
        console.error("Chrome API not available");
    }
};

export default function Preference({ onNext }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [preferences, setPreferences] = useState({ name: '', doomscrollCountdown: 5, firstTime: true });

    useEffect(() => {
        loadPreferences(setPreferences, setSelectedOption);
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const updatedPreferences = {
            name: preferences.name,
            doomscrollCountdown: selectedOption,
            firstTime: false
        };
    
        chrome.storage.local.set({ preferences: updatedPreferences }, () => {
            if (chrome.runtime.lastError) {
                console.error('Error updating preference:', chrome.runtime.lastError);
            } else {
                console.log('Preferences updated successfully');
            }
        });
    };

    return (
        <div className="preference-form-container">
            <div className="logo-container">
                Preferences
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Editing username:</label>
                    <div className="username-container">
                        <input type="text" id="username" name="username" placeholder="Enter your username" value={preferences.name} onChange={(e) => setPreferences({ ...preferences, name: e.target.value })} required />
                        <button className="form-submit-btn" type="submit">Save</button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Editing doom scroll limit (minutes):</label>
                    <div className="username-container">
                        <div className="radio-group">
                            <fieldset>
                                <div className="button-group">
                                    <input type="radio" id="countDown_1" name="countDown" value="1" checked={selectedOption === '1'} onChange={handleOptionChange} />
                                    <label htmlFor="countDown_1" className={`form-submit-btn ${selectedOption === '1' ? 'selected' : ''}`}>1</label>
                                </div>

                                <div className="button-group">
                                    <input type="radio" id="countDown_2" name="countDown" value="2" checked={selectedOption === '2'} onChange={handleOptionChange} />
                                    <label htmlFor="countDown_2" className={`form-submit-btn ${selectedOption === '2' ? 'selected' : ''}`}>2</label>
                                </div>

                                <div className="button-group">
                                    <input type="radio" id="countDown_5" name="countDown" value="5" checked={selectedOption === '5'} onChange={handleOptionChange} />
                                    <label htmlFor="countDown_5" className={`form-submit-btn ${selectedOption === '5' ? 'selected' : ''}`}>5</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <button className="form-submit-btn" type="button" onClick={onNext}>Back</button>
            </form>
        </div>
    );
};