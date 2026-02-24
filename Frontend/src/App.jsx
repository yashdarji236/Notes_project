import { useEffect, useState } from 'react'

import viteLogo from '/vite.svg'
import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx'
import './index.css'
import Thoughts from './Thoughts.jsx';
import Animation from './Animation.jsx';
import About from './About.jsx';

function App() {
  
return (
  <>
  <Routes>
     <Route path="/" element={<Animation />} />
       <Route path="/home" element={<Home />} />
      <Route path="/thought" element={<Thoughts/>}/>
      <Route path="/about"  element={<About/>}/>
  </Routes>
  
    </>
)

}
export default App


