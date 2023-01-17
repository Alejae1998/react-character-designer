import React from 'react';
import Select from '../Select/Select.js';

export default function Controls({
  head,
  middle,
  bottom,
  input,
  setInput,
  handleChange,
  handleClick,
}) {
  return (
    <div className="picker">
      <Select
        label="Head"
        options={['bird', 'duck', 'dog']}
        value={head}
        onChange={(e) => handleChange('head', e.target.value)}
      />
      <Select
        label="Middle"
        options={['blue', 'fancy', 'pink', 'red']}
        value={middle}
        onChange={(e) => handleChange('middle', e.target.value)}
      />
      <Select
        label="Bottom"
        options={['leg', 'white', 'blue']}
        value={bottom}
        onChange={(e) => handleChange('bottom', e.target.value)}
      />
      <div className="form-control">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <label>Add a catchphrase</label>
        <button onClick={handleClick}>submit</button>
      </div>
    </div>
  );
}
