import React from 'react';
import axios from 'axios';

const AddContestsButton = () => {
    const handleAddContests = async () => {
        try {
            const response = await axios.get('http://localhost:5000/contests/add');
            alert('Contests added to your Google Calendar!');
        } catch (error) {
            console.error('Error adding contests:', error);
            alert('Failed to add contests. Please try again.');
        }
    };

    return (
        <button onClick={handleAddContests}>
            Add Contests to Google Calendar
        </button>
    );
};

export default AddContestsButton;
