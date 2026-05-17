import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import CounterPage from './pages/CounterPage';
import DoubleCounterPage from './pages/DoubleCounterPage';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/double-counter" element={<DoubleCounterPage />} />
      </Routes>
    </div>
  );
}

export default App;
