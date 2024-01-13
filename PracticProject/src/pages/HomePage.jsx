import React from "react";
import "./Pages.css";
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1 className="border">Hello From Homepage</h1>
      <button onClick={handleButtonClick} type="button">Hello</button>
    </div>
  )

};

export default HomePage;
