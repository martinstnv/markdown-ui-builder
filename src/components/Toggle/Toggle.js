import React from 'react';

import classes from './Toggle.module.css';

const Toggle = () => (
    <span className={classes.Toggle}>
        <svg width="24" height="24" viewBox="0 0 48 48" fill="#333" xmlns="http://www.w3.org/2000/svg">
            <path d={`
                            M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
                            3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
                            13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z
                        `}>
            </path>
        </svg>
    </span>
);

export default Toggle;