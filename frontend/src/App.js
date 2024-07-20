import React, { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    // fetch('https://reactnative.dev/movies.json')
    fetch('http://184.72.108.95:8000/function1')
      .then(response => response.text())
      .then(data => {
        setResponse(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>howdy</h1>
      <p>{response}</p>
    </div>
  );
}

export default App;
