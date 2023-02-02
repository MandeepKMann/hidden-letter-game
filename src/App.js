import { useState } from 'react';
import './App.css';
import createBoard from './utils/createBoard';

function App() {
    const [board, setBoard] = useState(() => createBoard());
    return (
        <div className="App">
            {board.map((row, rowIdx) => (
                <div key={rowIdx}>
                    {row.map((letter, letterIdx) => (
                        <div key={letterIdx}>Cell</div>
                    ))}
                </div>
            ))} 
        </div>
    );
}

export default App;
