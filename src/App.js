import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import Display from './components/Display';
// import Cathphrase from './components/Catchphrase';
import Controls from './components/Controls';
import bg from './bg.jpeg';
function App() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [input, setInput] = useState('');
  const [catchphrase, setCatchphrase] = useState([]);
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
            <Controls />
            {/* <Cathphrase /> */}
          </div>
          <div className="right">{/* <Display /> */}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
