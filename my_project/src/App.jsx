import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <Input
        type="text"
        placeholder="Enter something..."
        onChange={handleChange}
      />
      <Button
        text="Click me"
        type="button"
        onClick={handleClick}
      />
      <p>Input value: {inputValue}</p>
    </div>
  );
}

export default App;
