import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import perfil from "../components/img/file.png";

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
      <div className="profile-container">
        <img src={perfil} alt="Profile" className="profile-image" />
      </div>
      <h1 className="typing-animation">{text}</h1>
      <p>
        - Software Designer / Engineer, UX/UI designer, based in Bogotá,
        Colombia -
      </p>
      <a
        href="https://drive.google.com/file/d/10ubECFYJxyK0ogrXs-3bVPECWH5s4Jh6/view?usp=sharing"
        className="cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        MY CV
      </a>
    </div>
  );
};

export default Home;
