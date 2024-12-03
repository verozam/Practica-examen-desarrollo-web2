import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Projects() {
  const proyectos = [
    {
      nombre: 'E-commerce Web',
      descripcion: 'Aplicación de compras en línea con React.',
      link: 'https://github.com/verozam/pokeapp',
    },
    {
      nombre: 'Blog Personal',
      descripcion: 'Un blog minimalista creado con React y Markdown.',
      link: 'https://github.com/verozam/practica03-git',
    },
    {
      nombre: 'Gestor de Tareas',
      descripcion: 'Aplicación para gestionar tareas diarias.',
      link: 'https://github.com/verozam/pokeapp',
    },
  ];

  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="project-card">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );

}

export default Projects;