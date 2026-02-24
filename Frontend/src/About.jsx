import React from 'react'

import about from './assets/me.png'
const About = () => {
  return (
    <div>
      <div className="all-about">
         <div className="div-left">
            <img src={about} alt="" />
         </div>
         <div className="div-right">
            <div className='right-inner'>
                <h1>Mindfulness</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus natus sequi, labore sunt nulla voluptates aliquam. Tempore temporibus veniam quod possimus optio, deserunt sed molestiae alias atque dolore ad saepe?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus natus sequi, labore sunt nulla voluptates aliquam. Tempore temporibus veniam quod possimus optio, deserunt sed molestiae alias atque dolore ad saepe?
            </p>
            <div className="abtn-div">
                 <button id="a-c">Contact</button>
                 <button id="a-o">Other</button>

            </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
