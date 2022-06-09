import './App.css';
import Lists from './components/Lists';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Info from './components/Info';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Lists />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
