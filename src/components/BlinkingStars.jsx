import React, { useEffect, useRef } from 'react';

const BlinkingStars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const starCount = 150;

    // Clear existing stars if any
    container.innerHTML = '';

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Create the star shape with 4 points (plus sign that rotates)
      const starShape = document.createElement('div');
      starShape.className = 'star-inner';
      star.appendChild(starShape);
      
      // Random position
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      // Random size (8-16px for better star visibility)
      const size = Math.random() * 8 + 8;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      
      // Random animation delay
      star.style.animationDelay = Math.random() * 3 + 's';
      
      // Random animation duration (0.8-2 seconds for varied twinkling)
      star.style.animationDuration = (Math.random() * 1.2 + 0.8) + 's';
      
      // Random rotation for variety
      starShape.style.transform = `rotate(${Math.random() * 90}deg)`;
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default BlinkingStars;