import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Web Design & Development", percentage: 95 },
  { name: "AI/Machine Learning", percentage: 88 },
  { name: "React/Vue.js", percentage: 92 },
  { name: "UX/UI Design", percentage: 90 }
];

export default function AboutSection() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" data-testid="about-title">About Me</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p data-testid="about-bio">
                I'm a passionate Web Designer and AI enthusiast with a unique blend of creative design skills 
                and technical expertise in artificial intelligence. My journey combines the art of visual 
                storytelling with the science of machine learning.
              </p>
              <p data-testid="about-experience">
                With over 5 years of experience in web development and design, I've worked with startups 
                and established companies to create digital experiences that are both beautiful and intelligent. 
                I specialize in integrating AI capabilities into web applications to create smarter, more 
                intuitive user experiences.
              </p>
              <p data-testid="about-philosophy">
                I believe that the future of web design lies in the seamless integration of artificial 
                intelligence to create personalized, adaptive, and highly engaging digital experiences.
              </p>
            </div>
            
            {/* Skills Section */}
            <div className="mt-8" ref={skillsRef}>
              <h3 className="text-2xl font-semibold mb-6" data-testid="skills-title">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} data-testid={`skill-${index}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300" data-testid={`skill-name-${index}`}>{skill.name}</span>
                      <span className="text-secondary" data-testid={`skill-percentage-${index}`}>{skill.percentage}%</span>
                    </div>
                    <div className="bg-slate-700 rounded-full h-2">
                      <div 
                        className="skill-bar bg-secondary h-2 rounded-full transition-all duration-2000 ease-out"
                        style={{ 
                          width: skillsVisible ? `${skill.percentage}%` : '0%'
                        }}
                        data-testid={`skill-bar-${index}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Professional developer workspace" 
              className="rounded-2xl shadow-2xl mx-auto animate-float"
              data-testid="about-image"
            />
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold text-secondary">30+</div>
                <div className="text-slate-300">Happy Clients</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-secondary">5+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-awards">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-slate-300">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
