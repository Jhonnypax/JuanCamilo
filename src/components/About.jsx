import React from 'react'
import "../styles/About.css"
import codingImage from "./img/aboutimg.webp";

const about = () => {
  return (
    <div className='about'>
      <div>
      <h1>lets talk a bit about me..</h1>
      <p>I didnt tought i would've ended studying coding. 
        Since i was a child i always dreamed of studying design. 
        I loved arts and drawing had been always my passion. However
        that changed when i learned programming at school. Programming
        was more than just... coding. 
        <br />
        <br />
        2 years before finishing school y took programming as another branch
        for my studies. That's why as soon as I finished school I knew what i
        wanted to study. "programming" was the term i used without knowing how
        expanded and diverse that world is. So I decided to take a 1/2 years to
        study fullstack developer. There I encountered <strong>ux design and front end 
        developement which i decided will be my main interests. </strong>
        <br />
        <br />
        Right now im finishing my studies as a fullstack developer and of course, im 
        not going to stop there. I need to improve, learn and search even more if I want 
        to do better.
        </p>
        </div>
        <img src={codingImage} alt="Coding Illustration" className="coding-image" />
    </div>
  )
}

export default about