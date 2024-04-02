import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";


function App() {

  return (
    <div className="App h-screen w-screen scrollbar-hide">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
