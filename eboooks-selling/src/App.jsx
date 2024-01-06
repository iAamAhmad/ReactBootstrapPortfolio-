import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </Router>
  );
}

export default App;
