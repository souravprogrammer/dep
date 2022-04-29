import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import First from './First';
import Second from './Second';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/dep' element={<First/>}  />

        <Route  path="/dep/second" element={<Second/>} />
        <Route  path="/dep/*" element={<div>no rout here</div>} />


      </Routes>
  
    </div>
  );
}

export default App;
