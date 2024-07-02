import React from 'react';
import "../styles/Projects.css";
import preview1 from '../components/img/Tennis.jpg'; 
import preview2 from '../components/img/soundrentalsF.png';
import preview3 from '../components/img/Clinica.png';
import preview5 from '../components/img/arcblade.png';
import preview6 from '../components/img/soundrentals.png';


const ProjectButton = ({ text, image }) => {
  return (
    <div className="project-button">
      <img src={image} alt={text} className="project-preview" />
      <button className="custom-button">{text}</button>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="Projects">
      <div className='project-section'>
        <h2>FRONT AND BACK END</h2>
        <div className="button-row">
          <a href="https://github.com/Jhonnypax/Primerproyecto.git"><ProjectButton text="MY FIRST WEBPAGE" image={preview1} /></a>
          <a href="https://sound-rentals.vercel.app"><ProjectButton text="SOUNDRENTALS" image={preview2} /></a>
          <a href="https://github.com/Jhonnypax/ClinicaOdontologica.git"><ProjectButton text="DENTAL CLINIC" image={preview3} /></a>
        </div>
      </div>
      <div className='project-section'>
        <h2>UX</h2>
        <div className="button-row">
          <a href="https://www.figma.com/design/LowQTlQfLnYqgCHrGKczL8/ARC-BLADE-APP?node-id=0-1&t=kAnmSQt1OhuOtAh0-1"><ProjectButton text="ARC-BLADE" image={preview5} /></a>
          <a href="https://www.figma.com/design/iR1O2qZtc1sXCiYIGxLQcJ/SoundRentals?node-id=0-1&t=7ro40qFZOsowTgUb-1"><ProjectButton text="SOUNDRENTALS" image={preview6} /></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
