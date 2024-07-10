import React from 'react';
import "../styles/About.css";
import { color } from 'three/examples/jsm/nodes/Nodes.js';

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <h1>Lets talk a bit about me..</h1>
        <p>I didn't thought I would´ve end up studying coding. 
          Since I was a child, I always dreamed of studying design. 
          I loved arts and drawing had always been my passion. However,
          that changed when I learned programming at school. Programming
          was more than just... coding. 
          <br />
          <br />
          2 years before finishing school, I took programming as another branch
          for my studies. That's why as soon as I finished school I knew what I
          wanted to study. "Programming" was the term I used without knowing how
          expanded and diverse that world is. So I decided to take a year and a half
          to study full-stack development. There I encountered <strong>UX DESING AND FRONT-END 
          DEVELOPMENT WHICH I DECIDED WILL BE MY MAIN INTERESTS.</strong>
          <br />
          <br />
          Right now I'm finishing my studies as a full-stack developer and of course, I'm 
          not going to stop there. I need to improve, learn and search even more if I want 
          to do better.
        </p>
      </div>
    </div>
  )
}

export default About;
