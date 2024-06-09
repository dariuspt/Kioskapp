import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartingScreen from './_root/pages/StartingScreen';
import Home from './_root/pages/Home';
import './global.css';
import ChooseScreen from './_root/pages/ChooseScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartingScreen />} />
        <Route path="/choose" element={<ChooseScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/StartingScreen" element={<StartingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
