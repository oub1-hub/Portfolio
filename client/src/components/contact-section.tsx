import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "oufadwa4@gmail.com"
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+212 707713749"
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Meknés,50000"
  }
];

const socialLinks = [
  { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/fadoua-oubza-b98089303/" },
  { icon: "fab fa-github", href: "https://github.com/oub1-hub" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/f_oubz/" },
  { icon: "fab fa-twitter", href: "#" }
];

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

   try {
    // 1️⃣ Send message to your email
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_TO_ME,
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // 2️⃣ Send auto-reply to user
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY,
      {
        name: form.name,
        email: form.email,
        subject: form.subject, // matches {{title}} in template
        message: "Thank you for reaching out! We received your message."
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: "Message sent successfully!",
      description: "Your message was sent and a confirmation email has been sent to you.",
    });

    setForm({ name: "", email: "", subject: "", message: "" });

  } catch (error: any) {
    console.error("EmailJS error:", error);
    toast({
      title: "Error sending message",
      description: "Please try again later.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section id="contact" className="py-20 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto" data-testid="contact-description">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" data-testid="contact-info-title">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className={`${info.icon} text-secondary`}></i>
                  </div>
                  <div>
                    <div className="font-semibold" data-testid={`contact-info-label-${index}`}>{info.label}</div>
                    <div className="text-slate-300" data-testid={`contact-info-value-${index}`}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4" data-testid="social-title">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300"
                    data-testid={`social-link-${index}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-portfolio-surface p-8 rounded-xl border border-slate-700 animate-slide-up relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
            <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors" 
                  placeholder="Your Name"
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors" 
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors" 
                  placeholder="Project Discussion"
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-none" 
                  placeholder="Tell me about your project..."
                  required
                  data-testid="textarea-message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                data-testid="button-submit"
              >
                {isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                )}
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
