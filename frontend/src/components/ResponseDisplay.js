import React from 'react';

function ResponseDisplay({ response }) {
  return (
    <div className="response">
      <h2>Analysis:</h2>
      <p>{response}</p>
    </div>
  );
}

export default ResponseDisplay;