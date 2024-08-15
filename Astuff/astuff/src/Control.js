import React, { useState } from 'react';
import './Control.css';

const directions = ['up', 'right', 'down', 'left']; // clockwise simulate
const directImages = {
  up: '/images/up.png',
  down:'/images/down.png',
  left:'/images/left.png',
  right:'/images/right.png',
}

const Control = () => {
  const [position, setPosition] = useState({ x: 2, y: 2 }); //init the robot at the middle
  const [direction, setDirection] = useState(0); // init with 0 up

  const moveForward = () => {
    const newPos = { ...position }; // create a copy if cur position
    switch (directions[direction]) {
      case 'up':
        if (position.y <= 3) newPos.y += 1;
        break;
      case 'right':
        if (position.x <= 3) newPos.x += 1;
        break;
      case 'down':
        if (position.y > 0) newPos.y -= 1;
        break;
      case 'left':
        if (position.x > 0) newPos.x -= 1;
        break;
      default:
        break;
    }
    setPosition(newPos);
  };

  const rotateLeft = () => {
    setDirection((prevDirection) => (prevDirection - 1 + 4) % 4);
  };

  const rotateRight = () => {
    setDirection((prevDirection) => (prevDirection + 1) % 4);
  };

  return (
    <div className="bellroy-robot">
      <div className="grid">
        {[...Array(5)].map((_, row) => (
          <div key={row} className="row">
            {[...Array(5)].map((_, col) => (
              <div key={col} className='cell'>
                {position.x === col && position.y ===  4-row && (
                  <img src={directImages[directions[direction]]} alt={directions[direction]} className ='logoImage'/>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controlPanel">
        <button onClick={rotateLeft}>rotate left</button>
        <button onClick={moveForward}>move forward</button>
        <button onClick={rotateRight}>rotate right</button>
      </div>
    </div>
  );
};

export default Control;
