// import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Practice from "./pages/Practice";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Practice/>} />
      <Route path="/home" exact element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </Router>
  );
}

export default App;
