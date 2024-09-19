// src/Background.tsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

// Utility function to generate a random number between a range
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

// Coin component
const Coin: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const [positionY, setPositionY] = useState(getRandom(5, 10)); // Random starting position
  const [positionX] = useState(getRandom(-5, 5)); // Random X position
  const [rotationSpeed] = useState(getRandom(0.01, 0.05)); // Random rotation speed
  const [fallSpeed] = useState(getRandom(0.01, 0.05)); // Random fall speed

  useFrame(() => {
    if (meshRef.current) {
      // Rotate the coin
      meshRef.current.rotation.y += rotationSpeed;
      // Make the coin fall
      setPositionY((prev) => (prev <= -5 ? getRandom(5, 10) : prev - fallSpeed));
      meshRef.current.position.set(positionX, positionY, -2); // Set position of the coin
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[0.3, 0.2, 0.05, 32]} /> {/* Coin shape */}
      <meshStandardMaterial color="#ffd700" /> {/* Gold color */}
    </mesh>
  );
};

// Background component rendering multiple falling coins
const FallingCoinsBackground: React.FC = () => {
  const numCoins = 20; // Number of coins to render

  return (
    <>
      {Array.from({ length: numCoins }).map((_, index) => (
        <Coin key={index} />
      ))}
    </>
  );
};

export default FallingCoinsBackground;
