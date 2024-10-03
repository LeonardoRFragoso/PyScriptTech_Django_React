// src/pages/ProjectsPage/ProjectsPage.js
import React from 'react';
import './ProjectsPage.css'; 
import project1 from '../../assets/img/project1.png';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import project4 from '../../assets/img/project4.png';
import project5 from '../../assets/img/project5.png';
import project6 from '../../assets/img/project6.png';
import video1 from '../../assets/img/video1.mp4'; // Caminho corrigido
import video2 from '../../assets/img/video2.mp4'; // Caminho corrigido
import video3 from '../../assets/img/video3.mp4'; // Caminho corrigido
import video4 from '../../assets/img/video4.mp4'; // Caminho corrigido
import video5 from '../../assets/img/video5.mp4'; // Caminho corrigido
import video6 from '../../assets/img/video6.mp4'; // Caminho corrigido

const projectsData = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: project1,
    video: video1
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    image: project2,
    video: video2
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: project3,
    video: video3
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do projeto 4.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    image: project4,
    video: video4
  },
  {
    title: 'Projeto 5',
    description: 'Descrição do projeto 5.',
    technologies: ['C#', '.NET', 'SQL Server'],
    image: project5,
    video: video5
  },
  {
    title: 'Projeto 6',
    description: 'Descrição do projeto 6.',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    image: project6,
    video: video6
  }
];

const ProjectsPage = () => {
  return (
    <div className="projectPage">
      <h1 className="projectTitle">Nossos Projetos</h1>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <div key={index} className="projectItem">
            <img src={project.image} alt={project.title} className="projectImage" />
            <div className="projectDescription">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectText">{project.description}</p>
              <div className="projectTechnologies">
                <h3>Tecnologias Utilizadas:</h3>
                <ul>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="projectVideo">
                <h3>Veja o vídeo:</h3>
                <video controls>
                  <source src={project.video} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
