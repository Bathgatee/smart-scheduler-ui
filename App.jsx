import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThankYou from './ThankYou';
import Download from './Download';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;
