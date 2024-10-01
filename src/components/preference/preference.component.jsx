import React, { useState, useEffect } from 'react';
import './preference.component.css';
import { initializePreferences } from '../../background/initialize/initialize';

//to-delete
const printAllValues = () => {
    chrome.storage.local.get(['urls', 'preferences'], (result) => {
        if (chrome.runtime.lastError) {
            console.error('Error retrieving values:', chrome.runtime.lastError);
        } else {
            console.log('URL Table:', result.urls);
            console.log('Preferences Table:', result.preferences);
        }
    });
};

const loadPreferences = (setSelectedName, setSelectedCountdown, setSelectedMode) => {
    if (chrome && chrome.storage) {
        chrome.storage.local.get(['preferences'], (result) => {
            if (result.preferences) {
                setSelectedName(result.preferences.name);
                setSelectedMode(result.preferences.mode);
                setSelectedCountdown(result.preferences.doomscrollCountdown.toString());
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

export default function Preference({ onNext }) {
    const [selectedName, setSelectedName] = useState('');
    const [selectedCountdown, setSelectedCountdown] = useState('');
    const [selectedMode, setSelectedMode] = useState('');
    

    useEffect(() => {
        loadPreferences(setSelectedName, setSelectedCountdown, setSelectedMode);
    }, []);

    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    };

    const handleCountdownChange = (event) => {
        setSelectedCountdown(event.target.value);
    };

    const handleModeChange = (event) => {
        setSelectedMode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const updatedPreferences = {
            name: selectedName,
            doomscrollCountdown: selectedCountdown,
            firstTime: false,
            mode: selectedMode
        };
    
        chrome.storage.local.set({ preferences: updatedPreferences }, () => {
            if (chrome.runtime.lastError) {
                console.error('Error updating preference:', chrome.runtime.lastError);
            } else {
                console.log('Preferences updated successfully');
                printAllValues();
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
                        <input type="text" id="username" name="username" placeholder="Enter your username" value={selectedName} onChange={handleNameChange} required />
                    </div>
                </div>

                <div className="form-group">
                <label htmlFor="username">Editing difficulty:</label>
                <div className='difficulty-container'>
                <div className='difficulty-group'> 
                    <fieldset>
                    <div className="button-group">
                                    <input type="radio" id="mode_easy" name="mode" value="easy" checked={selectedMode === 'easy'} onChange={handleModeChange} />
                                    <label htmlFor="mode_easy" className={`form-submit-btn ${selectedMode === 'easy' ? 'selected' : ''}`}>Easy</label>
                                </div>

                                <div className="button-group">
                                    <input type="radio" id="mode_hard" name="mode" value="hard" checked={selectedMode === 'hard'} onChange={handleModeChange} />
                                    <label htmlFor="mode_hard" className={`form-submit-btn ${selectedMode === 'hard' ? 'selected' : ''}`}>Hard</label>
                            </div>
                    </fieldset>
                </div>
                </div>
                </div>


                <div className="form-group">
                    <label htmlFor="username">Editing doom scroll limit (minutes):</label>
                    <div className="username-container">
                        <div className="radio-group">
                            <fieldset>
                                <div className="button-group">
                                    <input type="radio" id="countDown_1" name="countDown" value="1" checked={selectedCountdown === '1'} onChange={handleCountdownChange} />
                                    <label htmlFor="countDown_1" className={`form-submit-btn ${selectedCountdown === '1' ? 'selected' : ''}`}>1</label>
                                </div>

                                <div className="button-group">
                                    <input type="radio" id="countDown_2" name="countDown" value="2" checked={selectedCountdown === '2'} onChange={handleCountdownChange} />
                                    <label htmlFor="countDown_2" className={`form-submit-btn ${selectedCountdown === '2' ? 'selected' : ''}`}>2</label>
                                </div>

                                <div className="button-group">
                                    <input type="radio" id="countDown_5" name="countDown" value="5" checked={selectedCountdown === '5'} onChange={handleCountdownChange} />
                                    <label htmlFor="countDown_5" className={`form-submit-btn ${selectedCountdown === '5' ? 'selected' : ''}`}>5</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                
                <div className="save-button-group">
                <button className="form-submit-btn" type="button" onClick={onNext}>Back</button>
                <button className="form-submit-btn" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};