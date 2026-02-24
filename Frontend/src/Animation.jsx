import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import thoughtLanding from "./assets/thought_landing.png";

import Stamp from './assets/restamp1.png'
const Animation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");   // redirect after 5 sec
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro-screen">
      <img src={Stamp} alt="" className="intro-img left" />
      <h1 className="intro-text">Your Thought</h1>
      <img src={thoughtLanding} alt="" className="intro-img right" />
    </div>
  );
};

export default Animation;
