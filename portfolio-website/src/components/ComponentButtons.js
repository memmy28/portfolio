import React from 'react'
import "../style/component-buttons.css"

const Buttons = ({ buttons }) => {
    return (
        <div className="button-container">
            {buttons.map((button, index) => (
                button.download ? (
                    <a className="button" href={button.href} download target={button.target}>{button.text}</a>
                ) : <a className="button" href={button.href} target={button.target}>{button.text}</a>
            ))}
            
        </div>
    );
};

export default Buttons;