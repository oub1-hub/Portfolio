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
    <section className="py-20 bg-slate-900/25 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="services-title">Services</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto" data-testid="services-description">
            I offer a comprehensive range of services combining design expertise with cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="card-hover bg-portfolio-surface p-8 rounded-xl border border-slate-700 text-center group animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`service-card-${service.id}`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-ml-pulse">
                <i className={`${service.icon} text-blue-400 text-2xl`} data-testid={`service-icon-${service.id}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`service-title-${service.id}`}>
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed" data-testid={`service-description-${service.id}`}>
                {service.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
