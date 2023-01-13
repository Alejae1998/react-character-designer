// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Display from './components/Display/Display.js';
import Cathphrase from './components/Catchphrase/Catchphrase.js';
import Controls from './components/Controls/Controls.js';
import bg from './bg.jpeg';
function App() {
  const [head, setHead] = useState('duck');
  const [middle, setMiddle] = useState('pink');
  const [bottom, setBottom] = useState('leg');
  const [input, setInput] = useState('');
  const [catchphrases, setCatchphrase] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  const handleClick = () => {
    if (!input) return;
    setCatchphrase((prevState) => {
      return [...prevState, input];
    });
    setInput('');
  };

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
    }
    if (type === 'middle') {
      setMiddle(value);
      setMiddleCount(middleCount + 1);
    }
    if (bottom === 'bottom') {
      setBottom(value);
      setBottomCount(bottomCount + 1);
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <main>
        <h1>Character Designer</h1>
        <section className="container">
          <div className="left">
            <Controls {...{ head, middle, bottom, input, setInput, handleClick, handleChange }} />
            <Cathphrase {...{ headCount, middleCount, bottomCount, catchphrases }} />
          </div>
          <div className="right">
            <Display {...{ head, middle, bottom }} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
