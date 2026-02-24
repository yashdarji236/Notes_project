import React, { useEffect, useState } from 'react'
import thoughtLanding from './assets/thought_landing.png'
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
   const [showIntro, setShowIntro] = useState(true);
   useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);
  return (

    <div>
      
    <div className="hero">
      <div className="img">
        <img src={thoughtLanding} alt="" />
      </div>
       <nav className="navbar">
          <div className="logo">LOGOO</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Profile</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>Contacts</li>
          </ul>
        </nav>
         <div className="right">
            <h1>
              Share Your Thoughts <br /> With The World
            </h1>

            <p>
              Express your ideas, connect with others,
              <br></br>
              and explore inspiring thoughts from people
              <br></br>
              around the globe. Your voice matters here.
            </p>

            <div className="buttons">
            <Link className="buy-btn" to="/thought">Start Sharing</Link>
              <button className="show-btn">About Me</button>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Home
  