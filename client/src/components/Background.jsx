import React, { useRef, useEffect } from 'react';

// Helper to get CSS variable value
function getCSSVar(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

export const Background = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const bubblesRef = useRef([]);
  const themeRef = useRef(document.body.classList.contains('light-theme') ? 'light' : 'dark');

  // Bubble config
  const BUBBLE_COUNT = 36;
  const BUBBLE_MIN_SIZE = 8;
  const BUBBLE_MAX_SIZE = 58;
  const BUBBLE_MIN_SPEED = 0.15;
  const BUBBLE_MAX_SPEED = 0.45;
  const BUBBLE_OPACITY = 0.18;

  function getThemeColors() {
    const accent = getCSSVar('--accent-color') || '#a972f9';
    const start = getCSSVar('--background-start') || '#0f0f17';
    const end = getCSSVar('--background-end') || '#1a1a25';
    return [accent, start, end];
  }

  function createBubbles(width, height) {
    const [accent, start, end] = getThemeColors();
    const palette = [accent, start, end];
    return Array.from({ length: BUBBLE_COUNT }, () => {
      const size = Math.random() * (BUBBLE_MAX_SIZE - BUBBLE_MIN_SIZE) + BUBBLE_MIN_SIZE;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: size,
        speed: Math.random() * (BUBBLE_MAX_SPEED - BUBBLE_MIN_SPEED) + BUBBLE_MIN_SPEED,
        color: palette[Math.floor(Math.random() * palette.length)],
        dx: (Math.random() - 0.5) * 0.3, // gentle horizontal drift
        opacity: BUBBLE_OPACITY + Math.random() * 0.07,
      };
    });
  }

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    themeRef.current = theme;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      bubblesRef.current = createBubbles(width, height);
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
      const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      if (currentTheme !== themeRef.current) {
        themeRef.current = currentTheme;
        bubblesRef.current = createBubbles(width, height);
      }
      ctx.clearRect(0, 0, width, height);
      for (const b of bubblesRef.current) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = b.opacity;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
       
        b.y -= b.speed;
        b.x += b.dx;
        if (b.y + b.r < 0) {
          b.y = height + b.r;
          b.x = Math.random() * width;
        }
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Style: full screen, behind content
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 1,
        transition: 'background 0.5s',
      }}
      aria-hidden="true"
    />
  );
}; 