import React from 'react';

const AuthorizeButton = () => {
    const handleAuthorize = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    return (
        <button onClick={handleAuthorize}>
            Authorize Google Calendar
        </button>
    );
};

export default AuthorizeButton;
