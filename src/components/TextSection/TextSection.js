import React from 'react';

const TextSection = ({ children }) => {
    return(
        <div>
            {children ? children : ''}
        </div>
    );
};

export default TextSection;