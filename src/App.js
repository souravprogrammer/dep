import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import First from "./First";
import Second from "./Second";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First />} />

        <Route path="/second" element={<Second />} />
        <Route path="*" element={<div>no rout here</div>} />
      </Routes>
    </div>
  );
}

export default App;
