import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import CounterPage from './pages/CounterPage';
import DoubleCounterPage from './pages/DoubleCounterPage';
import RtkCounter from './pages/RtkCounter';
import LegacyCounter from './pages/LegacyCounter';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/double-counter" element={<DoubleCounterPage />} />
        <Route path="/legacy-counter" element={<LegacyCounter />} />
        <Route path="/rtk-counter" element={<RtkCounter />} />
      </Routes>
    </div>
  );
}

export default App;
