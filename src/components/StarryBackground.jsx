import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    // Star properties
    const stars = [];
    const numStars = 800;
    const shootingStars = [];
    
    // Initialize stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * width, // Depth
            o: '0.' + Math.floor(Math.random() * 99) + 1 // Opacity
        });
    }

    const clear = () => {
        ctx.fillStyle = '#0f172a'; // slate-900 like color (dark but not pitch black)
        ctx.fillRect(0, 0, width, height);
    };

    const drawStars = () => {
        let cx = width / 2;
        let cy = height / 2;

        stars.forEach(star => {
            // Move star closer
            star.z -= 0.5; // Speed

            // Reset star if it passes screen
            if (star.z <= 0) {
                star.z = width;
                star.x = Math.random() * width;
                star.y = Math.random() * height;
            }

            // Project 3D coordinates to 2D
            const k = 128.0 / star.z;
            const px = (star.x - cx) * k + cx;
            const py = (star.y - cy) * k + cy;

            if (px >= 0 && px <= width && py >= 0 && py <= height) {
                const size = (1 - star.z / width) * 2.5;
                const shade = parseInt((1 - star.z / width) * 255);
                
                ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    };

    // Shooting star logic
    const createShootingStar = () => {
        if (Math.random() < 0.02) { // Chance to create
            shootingStars.push({
                x: Math.random() * width,
                y: Math.random() * height / 2,
                len: Math.random() * 80 + 10,
                speed: Math.random() * 5 + 5,
                angle: Math.random() * 20 + 30 // degrees
            });
        }
    };

    const drawShootingStars = () => {
        for (let i = 0; i < shootingStars.length; i++) {
            const s = shootingStars[i];
            
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x + s.len * Math.cos(s.angle * Math.PI / 180), s.y + s.len * Math.sin(s.angle * Math.PI / 180));
            ctx.stroke();

            // Update position
            s.x += s.speed * Math.cos(s.angle * Math.PI / 180);
            s.y += s.speed * Math.sin(s.angle * Math.PI / 180);

            // Remove if off screen
            if (s.x > width || s.y > height) {
                shootingStars.splice(i, 1);
                i--;
            }
        }
    };

    let animationFrameId;

    const animate = () => {
        clear();
        drawStars();
        createShootingStar();
        drawShootingStars();
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0f172a]"
        style={{ pointerEvents: 'none' }} 
    />
  );
};

export default StarryBackground;
