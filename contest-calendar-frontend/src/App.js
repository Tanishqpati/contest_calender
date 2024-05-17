import React from 'react';
import AuthorizeButton from './components/AuthorizeButton';
import AddContestsButton from './components/AddContestsButton';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Contest Calendar</h1>
                <AuthorizeButton />
                <AddContestsButton />
            </header>
        </div>
    );
}

export default App;
