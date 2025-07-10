import { useState } from 'react';

export default function ThankYou() {
  const [key, setKey] = useState('');
  const [valid, setValid] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://your-backend-url/verify-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key: key }),
    });

    const data = await res.json();
    setValid(data.valid);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Enter License Key to Download</h2>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          className="border p-2 mr-2"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Your license key"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {valid === true && (
        <a href="https://your-backend-url/download" className="text-green-700 font-bold underline">
          ✅ Download Smart Scheduler
        </a>
      )}

      {valid === false && <p className="text-red-600">❌ Invalid license key</p>}
    </div>
  );
}
