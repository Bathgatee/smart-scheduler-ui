
import React, { useState } from "react";
import axios from "axios";

const Download = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [valid, setValid] = useState(null);
  const [error, setError] = useState("");

  const handleValidate = async () => {
    try {
      const res = await axios.post("http://localhost:4242/validate-license", { license_key: licenseKey });
      if (res.data.valid) {
        setValid(true);
        setError("");
      } else {
        setValid(false);
        setError("Invalid license key.");
      }
    } catch (err) {
      setError("Server error. Try again later.");
      setValid(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>License Key Validation</h2>
      <input
        type="text"
        placeholder="Enter your license key"
        value={licenseKey}
        onChange={(e) => setLicenseKey(e.target.value)}
        style={{ width: "300px", padding: "0.5rem" }}
      />
      <button onClick={handleValidate} style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
        Validate
      </button>
      {valid && <div style={{ marginTop: "1rem", color: "green" }}>✅ Valid license key! Download unlocked.</div>}
      {error && <div style={{ marginTop: "1rem", color: "red" }}>{error}</div>}
    </div>
  );
};

export default Download;
