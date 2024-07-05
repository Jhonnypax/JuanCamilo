import React, { useState, useEffect } from 'react';
import "../styles/Experience.css";

const Experience = () => {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`Exp ${!showError ? 'show' : ''}`}>
      {showError ? (
        <>
          <h2>404</h2>
          <h1>Page not found</h1>
        </>
      ) : (
        <p>Just kidding. This will come soon</p>
      )}
    </div>
  );
}

export default Experience;
