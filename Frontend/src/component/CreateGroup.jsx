import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/Home';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;