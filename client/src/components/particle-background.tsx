import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'circle' | 'triangle' | 'square' | 'diamond' | 'hexagon';
}

interface FloatingIcon {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  scaleDirection: number;
  opacity: number;
  icon: string;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const iconsRef = useRef<FloatingIcon[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));

      for (let i = 0; i < particleCount; i++) {
        const shapes = ['circle', 'triangle', 'square', 'diamond', 'hexagon'] as const;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 6 + 2,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.4 + 0.1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }

      particlesRef.current = particles;
    };

    const createFloatingIcons = () => {
      const icons: FloatingIcon[] = [];
      const aiIcons = ['🤖', '🧠', '⚡', '🔬', '💡', '⚙️', '🚀', '💻', '🌐', '📊'];
      const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4'];
      
      for (let i = 0; i < 12; i++) {
        icons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          scale: Math.random() * 0.5 + 0.5,
          scaleDirection: Math.random() > 0.5 ? 1 : -1,
          opacity: Math.random() * 0.6 + 0.2,
          icon: aiIcons[Math.floor(Math.random() * aiIcons.length)],
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      iconsRef.current = icons;
    };

    const drawShape = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, shape: string, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      switch (shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.lineTo(-size * 0.866, size * 0.5);
          ctx.lineTo(size * 0.866, size * 0.5);
          ctx.closePath();
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-size/2, -size/2, size, size);
          break;
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.lineTo(size, 0);
          ctx.lineTo(0, size);
          ctx.lineTo(-size, 0);
          ctx.closePath();
          ctx.fill();
          break;
        case 'hexagon':
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6;
            const px = Math.cos(angle) * size;
            const py = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fill();
          break;
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate geometric particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;

        const color = `rgba(59, 130, 246, ${particle.opacity})`;
        drawShape(ctx, particle.x, particle.y, particle.size, particle.rotation, particle.shape, color);
      });

      // Animate floating AI icons
      iconsRef.current.forEach((iconObj) => {
        iconObj.x += iconObj.speedX;
        iconObj.y += iconObj.speedY;
        iconObj.rotation += iconObj.rotationSpeed;
        iconObj.scale += iconObj.scaleDirection * 0.001;

        if (iconObj.scale > 1) {
          iconObj.scaleDirection = -1;
        } else if (iconObj.scale < 0.3) {
          iconObj.scaleDirection = 1;
        }

        // Wrap around edges
        if (iconObj.x > canvas.width + 50) iconObj.x = -50;
        if (iconObj.x < -50) iconObj.x = canvas.width + 50;
        if (iconObj.y > canvas.height + 50) iconObj.y = -50;
        if (iconObj.y < -50) iconObj.y = canvas.height + 50;

        // Draw floating icon
        ctx.save();
        ctx.translate(iconObj.x, iconObj.y);
        ctx.rotate(iconObj.rotation);
        ctx.scale(iconObj.scale, iconObj.scale);
        ctx.globalAlpha = iconObj.opacity;
        
        // Create a glow effect
        ctx.shadowColor = iconObj.color;
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = iconObj.color;
        ctx.fillText(iconObj.icon, 0, 0);
        
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    createFloatingIcons();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
      createFloatingIcons();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
