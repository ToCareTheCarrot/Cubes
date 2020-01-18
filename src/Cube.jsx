import React from 'react';

export function Cube(props) {
  const cubeColor = {
    backgroundColor: props.color,
  };

  return (
    <div style={cubeColor} className="cube">
    </div>
  );
}

