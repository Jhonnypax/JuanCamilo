import React from 'react';
import "../styles/Projects.css";
import preview1 from '../components/img/Tennis.jpg'; 
import preview2 from '../components/img/soundrentalsF.png';
import preview3 from '../components/img/Clinica.png';
import preview5 from '../components/img/arcblade.png';
import preview6 from '../components/img/soundrentals.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = ({ text, image, description, tools, visitLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={text} className="project-preview" />
      <div className="project-details">
        <div className="project-header">
          <h3 className="project-title">{text}</h3>
          <div className="project-tools">
            {tools.map((tool, index) => (
              <span key={index} className="project-tool">{tool}</span>
            ))}
          </div>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={visitLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaExternalLinkAlt /> Visit
          </a>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  return (
    <div className="Projects">
      <div className="project-section">
        <div className="button-row">
        <Project
            text="SOUNDRENTALS"
            image={preview2}
            description="A 10 group made dj rental service developed with a complete front and back environment."
            tools={['REACT', 'JAVA']}
            visitLink="https://sound-rentals.vercel.app"
            githubLink="https://github.com/DOF1109/sound-rentals"
          />
          <Project
            text="MY FIRST WEBPAGE"
            image={preview1}
            description="My first webpage. Learning the essentials of html and css."
            tools={['HTML', 'CSS']}
            visitLink="https://1-proyecto-ashy.vercel.app"
            githubLink="https://github.com/Jhonnypax/1-proyecto"
          />
          <Project
            text="DENTAL CLINIC"
            image={preview3}
            description="A dental clinic management system developed in Java with spring and HQL"
            tools={['JAVA', 'SPRING', 'HQL']}
            visitLink="https://github.com/Jhonnypax/ClinicaOdontologica"
            githubLink="https://github.com/Jhonnypax/ClinicaOdontologica"
            />
          <Project
            text="ARC-BLADE UX"
            image={preview5}
            description="A mobile app to offer arcade related info, designed in Figma."
            tools={['FIGMA']}
            visitLink="https://www.figma.com/design/LowQTlQfLnYqgCHrGKczL8/ARC-BLADE-APP?node-id=0-1&t=kAnmSQt1OhuOtAh0-1"
            githubLink={null} // Añadir esta línea
          />
          <Project
            text="SOUNDRENTALS UX"
            image={preview6}
            description="User experience design for SoundRentals service, created with Figma."
            tools={['FIGMA']}
            visitLink="https://www.figma.com/design/iR1O2qZtc1sXCiYIGxLQcJ/SoundRentals?node-id=0-1&t=7ro40qFZOsowTgUb-1"
            githubLink={null} // Añadir esta línea
          />
          </div>
        </div>
    </div>
  );
};

export default Projects;
