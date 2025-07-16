import React from 'react'

export const OptionsModal = ({ isOpen, onClose, theme, onToggleTheme}) => {

    if (!isOpen) return null;

    return (
        <div id="optionsModal" className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Options</h2>
                <div className="option-row">
                    <span className="option-label">Light Theme:</span>
                    <label className="switch">
                        <input type="checkbox" id="themeSwitch"
                            checked={theme === 'light'}
                            onChange={onToggleTheme}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}
