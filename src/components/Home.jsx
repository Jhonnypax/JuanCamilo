import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {

  const phrases = [
    "Hi! my name is Juan Camilo.",
    'Go see my "PROJECTS"!',
    'Get to know me in "ABOUT"',
    "A coffee...?",
  ];

  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    if (loopNum === phrases.length) return;

    if (!isDeleting && subIndex === phrases[loopNum].length) {
      setTimeout(() => setIsDeleting(true), 5000);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }

    const timeout = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      setText(phrases[loopNum].substring(0, subIndex));
    }, timeout);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, loopNum, phrases]);

  useEffect(() => {
    if (
      loopNum === phrases.length - 1 &&
      subIndex === phrases[loopNum].length
    ) {
      setIsDeleting(false);
    }
  }, [loopNum, subIndex, phrases]);

  return (
      <div className="contenidoHome">
        <h1 className="typing-animation">{text}</h1>
        <p>
          <i> - Front end Developer, UX designer, based in Bogotá, Colombia -</i>
        </p>
        <a href="https://docs.google.com/document/d/1EQD9UueIV1AGTS-hVciIH5u6eiYtO8h11WJcWVuPpYQ/edit?usp=sharing" className="cv" target="_blank" rel="noopener noreferrer">MY CV</a>
      </div>
  );
};

export default Home;
