import React from 'react';
import './App.css';
import Main from './Main';
import back from '../src/images/back.jpg';
function App() {
    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: 1045,
            }}
        >
            <Main></Main>
        </div>
    );
}

export default App;
