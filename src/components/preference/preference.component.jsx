import './preference.component.css';
import React, { useState } from 'react';

export default function Preference({ onNext }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="preference-form-container">
            <div className="logo-container">
                Preferences
            </div>

            <form className="form">
                <div className="form-group">
                    <label htmlFor="username">Editing username:</label>
                    <div className="username-container">
                        <input type="text" id="username" name="username" placeholder="Enter your username" required />
                        <button className="form-submit-btn" type="submit" onClick={onNext}>Save</button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Editing doom scroll limit:</label>
                    <div className="username-container">

                        <div className="radio-group">
                            <fieldset>
                                <div class="button-group">
                                    <input type="radio" id="svelt" name="frameworks" checked="" />
                                    <label for="svelt">1</label>
                                </div>

                                <div class="button-group">
                                    <input type="radio" id="react" name="frameworks" />
                                    <label for="react">2</label>
                                </div>

                                <div class="button-group">
                                    <input type="radio" id="vue" name="frameworks" />
                                    <label for="vue">5</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Editing doom scroll websites:</label>
                    <div className="username-container">
                        <input type="text" id="username" name="username" placeholder="Enter your username" required />
                        <button className="form-submit-btn" type="submit" onClick={onNext}>Save</button>
                    </div>
                </div>
            </form>

            <p className="github-link">
                <a href="https://github.com/d4nh-Le/dyscroller" className="github-link link" target='_blank'>Visit Dyscroller Github!</a>
            </p>
        </div>
    );
}

