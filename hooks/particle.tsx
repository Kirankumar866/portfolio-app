'use client';
import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  radius: number;
  color: string;
}

class ParticleSystem {
  particles: Particle[];
  ctx: CanvasRenderingContext2D;
  animationId: number | null = null;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.particles = [];
    this.init();
  }

  init() {
    const particleCount = Math.min(50, Math.floor((this.ctx.canvas.width * this.ctx.canvas.height) / 10000));
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle(): Particle {
    return {
      x: Math.random() * this.ctx.canvas.width,
      y: Math.random() * this.ctx.canvas.height,
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      },
      radius: Math.random() * 1.5 + 0.5,
      color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 0.3)`
    };
  }

  update() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.particles.forEach(particle => {
      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;

      if (particle.x < 0 || particle.x > this.ctx.canvas.width) particle.velocity.x *= -1;
      if (particle.y < 0 || particle.y > this.ctx.canvas.height) particle.velocity.y *= -1;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.fill();
    });

    this.animationId = requestAnimationFrame(() => this.update());
  }

  start() {
    if (!this.animationId) {
      this.update();
    }
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}

export const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (particleSystemRef.current) {
        particleSystemRef.current.stop();
      }
      
      particleSystemRef.current = new ParticleSystem(ctx);
      particleSystemRef.current.start();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (particleSystemRef.current) {
        particleSystemRef.current.stop();
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};
