import React, { useState, useEffect } from 'react';

const MouseAwareButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    
    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Adjust the time here for how long the button stays visible after mouse stops moving
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ position: 'relative' }}>
      {isVisible && (
        <button
          onClick={handleClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Mouse-aware Button
        </button>
      )}
    </div>
  );
};

export default MouseAwareButton;