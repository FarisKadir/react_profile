import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectListItem } from "./components/Project";
import projects from "./assets/projects/projects";

function App() {
  return (
    <div>
          <Header />
          <div className="blue-grey darken-2 s12">
            <div className="container">
              <div className="row cardholder s12 m12 l12 xl4">
                  <h2 className="teal-text text-lighten-5 center-align">PROJECTS</h2>
              </div>
              <div className="s3">
                {projects.map(project => {
                    return (
                      <ProjectListItem
                        key={project.title}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        deployed={project.deployed}
                        repo={project.repo}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <Footer />
    </div>

  )
}

export default App;
