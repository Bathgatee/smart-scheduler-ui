import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // This pings your backend to log the visitor IP
    fetch('https://smart-scheduler-backend-8567.onrender.com/ping')
      .catch(err => console.error('Backend ping failed:', err));
  }, []);

  const handleBuy = async () => {
    const res = await fetch('https://smart-scheduler-backend-8567.onrender.com/create-checkout-session', {
      method: 'POST',
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Smart Scheduler</h1>
      <p className="mb-4">Automated production scheduling software for manufacturers.</p>
      <button onClick={handleBuy} className="bg-blue-600 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}

