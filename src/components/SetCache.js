// src/components/SetCache.js

import React, { useState } from 'react';

function SetCache() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSetCache = async () => {
    try {
      const response = await fetch('http://localhost:8080/cache', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key, value }),
      });
      if (response.ok) {
        setMessage('Data successfully added to cache');
        setError('');
      } else {
        const data = await response.json();
        setMessage('');
        setError(data.error || 'Failed to add data to cache');
      }
    } catch (error) {
      setMessage('');
      setError('Failed to add data to cache');
    }
  };

  return (
    <div>
      <h2>Set Data to Cache</h2>
      <input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter Key" />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter Value" />
      <button onClick={handleSetCache}>Set Data</button>
      {error && <div>Error: {error}</div>}
      {message && <div>{message}</div>}
    </div>
  );
}

export default SetCache;
