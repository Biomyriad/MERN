import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:messageParam" element={<Home />} />
        <Route path="/:messageParam/:textColorParam/:bkGndColorParam" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
