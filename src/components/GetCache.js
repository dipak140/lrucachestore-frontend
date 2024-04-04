import React, { useState } from 'react';

function GetCache() {
    const [key, setKey] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
  
    const handleGetCache = async () => {
      try {
        const response = await fetch('http://localhost:8080/cache/' + key);
        const data = await response.json();
        if (response.ok) {
          setData(data);
          setError('');
        } else {
          setData(null);
          setError(data.error || 'Failed to fetch data from cache');
        }
      } catch (error) {
        setData(null);
        setError('Failed to fetch data from cache');
      }
    };
  
    return (
      <div>
        <h2>Get Data from Cache</h2>
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter Key" />
        <button onClick={handleGetCache}>Get Data</button>
        {error && <div>Error: {error}</div>}
        {data && <div>Data: {JSON.stringify(data)}</div>}
      </div>
    );
  }

  export default GetCache;