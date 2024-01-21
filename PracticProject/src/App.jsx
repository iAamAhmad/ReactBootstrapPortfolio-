// import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Practice from "./pages/Practice";
import ProjectOne from "./pages/Project-one";
import ProjectTwo from "./pages/ProjectTwo";
import Grid from "./pages/Grid";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Grid/>} />
      <Route path="/" exact element={<ProjectTwo/>} />
      <Route path="/" exact element={<ProjectOne/>} />
      <Route path="/home" exact element={<HomePage/>} />
      <Route path="/home" exact element={<Practice/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </Router>
  );
}

export default App;
