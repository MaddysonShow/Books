import React from 'react';
import './UI.style.modules/button.css'

const Button = ({content, onClick, disabled}) => {
    return (
        <button className="button-78" role="button" onClick={() => onClick()} disabled={disabled()}>{content}</button>
    );
};

export default Button;
