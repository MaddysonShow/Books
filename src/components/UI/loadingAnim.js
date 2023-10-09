import React from 'react';
import './UI.style.modules/loading.css'

const LoadingAnim = () => {
    return (
        <div className={'lds-roller'}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadingAnim;