import React, { useState, useRef } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';  // Use useFrame for animation
import { Text3D } from '@react-three/drei';  // Import Text3D for 3D text
import { Mesh } from 'three';  // Import Mesh for type checking
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import FallingCoinsBackground from './components/Background';  // Import the new background

// Define the Expense type
interface Expense {
    category: string;
    amount: string;
    date: string;
    description: string;
}

const InteractiveText = () => {
  const textRef = useRef<Mesh>(null);  // Initialize ref with null to avoid TypeScript error
  const [hovered, setHovered] = useState(false);

  // UseFrame allows for animations, rotating the text in a back-and-forth motion
  useFrame(({ clock }) => {
    if (textRef.current) {
      const time = clock.getElapsedTime();
      textRef.current.rotation.y = Math.sin(time) * 0.6;  // Wave back and forth on Y-axis
    }
  });

  return (
    <Text3D
      ref={textRef}  // Apply the ref to the Text3D object
      font={'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json'}
      size={1}
      height={0.40}
      curveSegments={32}
      bevelEnabled
      bevelThickness={0.001}
      bevelSize={0.02}
      bevelSegments={10}
      position={[-4, 0, 0]}
      onPointerOver={() => setHovered(true)}  // Scale up on hover
      onPointerOut={() => setHovered(false)}  // Scale back when not hovered
      scale={hovered ? 1.2 : 1}  // Interactive scale effect
    >
      PennyWise
      <meshStandardMaterial
        attach="material"
        color={hovered ? "#b0b0b0" : "#004d00"} // Dark greyish-white on hover and dark green
        emissive={hovered ? "#ffffff" : "#003300"} // White on hover and very dark green
        roughness={0.2}
        metalness={0.5}  // Keep slightly metallic for depth
      />
    </Text3D>
  );
};

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]); // Explicitly type state

  return (
    <div className="App">
      <Canvas style={{ height: "400px" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <FallingCoinsBackground />  {/* Render the Falling Coins Background */}
        <InteractiveText />  {/* Render the Interactive Text component */}
      </Canvas>

      <ExpenseForm setExpenses={setExpenses} /> {/* Pass setExpenses to update the expense list */}
      <ExpenseList expenses={expenses} /> {/* Pass expenses to display the list */}
    </div>
  );
}

export default App;
