import React from 'react';

export default function Download() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Thank you for verifying your license!</h2>
      <a href="https://your-backend-url/download" className="text-green-700 font-bold underline">
        ✅ Click here to download Smart Scheduler
      </a>
    </div>
  );
}
