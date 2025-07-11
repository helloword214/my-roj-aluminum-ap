import { useEffect } from 'react';

export default function FloatingParticles() {
  useEffect(() => {
    const container = document.getElementById('particle-container');
    if (!container) return;

    const totalParticles = 80;

    for (let i = 0; i < totalParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 6 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${10 + Math.random() * 20}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);
    }
  }, []);

  return (
    <div id="particle-container" className="absolute inset-0 overflow-hidden pointer-events-none" />
  );
}
