import "@fortawesome/fontawesome-free/css/all.min.css";
const footerLinks = ["Home", "Projects", "About", "Contact"];
const socialLinks = [
  { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/fadoua-oubza-b98089303/" },
  { icon: "fab fa-github", href: "https://github.com/oub1-hub" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/f_oubz/" }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900/40 backdrop-blur-sm border-t border-slate-800/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4" data-testid="footer-name" style={{fontFamily:'Playfair display'}}>Fadoua OUBZA</div>
          <p className="text-slate-400 mb-6" data-testid="footer-tagline"style={{fontFamily:'Times New Roman'}}>
            Web Design & Artificial Intelligence Specialist
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {footerLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-slate-400 hover:text-secondary transition-colors"
                data-testid={`footer-link-${link.toLowerCase()}`}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-slate-700 transition-all duration-300"
                data-testid={`footer-social-${index}`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500" data-testid="footer-copyright" style={{ fontFamily: "'Playfair Display', serif" }}>
              © 2025 Fadoua OUBZA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
