import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(code, errorMessage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your problematic code here"
      />
      <textarea
        value={errorMessage}
        onChange={(e) => setErrorMessage(e.target.value)}
        placeholder="Enter the error message here"
      />
      <button type="submit">Analyze</button>
    </form>
  );
}

export default InputForm;