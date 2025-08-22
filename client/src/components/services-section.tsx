interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for performance and scalability."
  },
  {
    id: 2,
    icon: "fas fa-brain",
    title: "AI Integration",
    description: "Intelligent features and machine learning capabilities to enhance user experience and business efficiency."
  },
  {
    id: 3,
    icon: "fas fa-palette",
    title: "UI/UX Design",
    description: "User-centered design solutions that prioritize usability, accessibility, and visual appeal."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="services-title">Services</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto" data-testid="services-description">
            I offer a comprehensive range of services combining design expertise with cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="card-hover bg-portfolio-surface p-8 rounded-xl border border-slate-700 text-center"
              data-testid={`service-card-${service.id}`}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${service.icon} text-secondary text-2xl`} data-testid={`service-icon-${service.id}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`service-title-${service.id}`}>
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed" data-testid={`service-description-${service.id}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
