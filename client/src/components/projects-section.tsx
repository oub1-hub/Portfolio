import { useState } from "react";
import WhisperNittyImg from "./images/WhisperNitty.png";
import ESP32Img from "./images/ESP32.jpg";
import AGRImg from "./images/AGRIHEAL.png";
import RIVALREVERBImg from "./images/RIVAL REVERB.png";
import DjImg from "./images/Squarelytics.png";
import PImg from "./images/POTA.jpg";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Beverage Management Java App",
    description: "Java GUI application for managing and ordering beverages, providing a user-friendly interface for real-time operations.",
    image:PImg ,
    technologies: ["Java", "JavaFX", "SQLite"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Smart Analytics Dashboard",
    description: "Real-time analytics platform with AI-driven insights and beautiful data visualizations.",
    image: DjImg,
    technologies: ["Html", "Django", "javaScript","CSS"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Plant Diseases Detection system",
    description: "plant disease detection system using ESP32 microcontroller and a smart mobile application to identify and track plant health issues in real time.",
    image: ESP32Img,
    technologies: ["TensorFlow", "ESP32", "MobileNetv2","React Native","Firebase","React"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: " IA assistant for Branding",
    description: "AI assistant to support users in launching their own brand, including logo evaluation, logo generation, and personalized business advice.",
    image: WhisperNittyImg,
    technologies: ["Firebase", "React Native", "flask"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: " RIVAL REVERB",
    description: "Rival Reverb is a platform for publishing articles and exchanging ideas, aimed at creating a large, educated, and highly motivated network of innovative and influential individuals",
    image: RIVALREVERBImg,
    technologies: ["MySQL", "Html", "PHP", "CSS", "JavaScript"],
    liveLink: "#",
    codeLink: "#"
  }
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto" data-testid="projects-description">
            Explore my latest work in web design and AI applications, showcasing innovative solutions and modern design principles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card-hover bg-portfolio-surface rounded-xl overflow-hidden border border-slate-700 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-secondary rounded-full text-sm"
                      data-testid={`project-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    className="text-secondary hover:text-accent transition-colors"
                    data-testid={`project-live-${project.id}`}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="text-secondary hover:text-accent transition-colors"
                    data-testid={`project-code-${project.id}`}
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            data-testid="button-view-all-projects"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
