import React from 'react';

const Badge = ({ children , customClass }) => {
    return (
        <span className = {`w-fit font-display border border-neutral-200 dark:border-neutral-800 p-1 px-2 rounded-md transition-all ${customClass}`}>{ children }</span>
    );
};

export default Badge;