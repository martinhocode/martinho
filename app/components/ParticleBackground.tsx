"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useWindowSize } from "@/hooks/use-window-size"

// Generate random particles
function generateParticles(count, size) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const color1 = new THREE.Color("#00fff9") // cyber-blue
  const color2 = new THREE.Color("#ff00ff") // cyber-pink
  const color3 = new THREE.Color("#ffff00") // cyber-yellow

  const colorOptions = [color1, color2, color3]

  for (let i = 0; i < count; i++) {
    const i3 = i * 3

    // Position
    positions[i3] = (Math.random() - 0.5) * size
    positions[i3 + 1] = (Math.random() - 0.5) * size
    positions[i3 + 2] = (Math.random() - 0.5) * size

    // Color
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]
    colors[i3] = randomColor.r
    colors[i3 + 1] = randomColor.g
    colors[i3 + 2] = randomColor.b
  }

  return { positions, colors }
}

function Particles({ count = 2000, size = 40 }) {
  const pointsRef = useRef()

  // Generate particles only once
  const { positions, colors } = useMemo(() => generateParticles(count, size), [count, size])

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1

    if (pointsRef.current) {
      // Rotate the entire particle system
      pointsRef.current.rotation.x = time * 0.05
      pointsRef.current.rotation.y = time * 0.075

      // Update individual particle positions for a subtle wave effect
      const positions = pointsRef.current.geometry.attributes.position.array

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]

        // Apply a subtle sine wave movement
        positions[i3] = x + Math.sin(time + x * 0.1) * 0.02
        positions[i3 + 1] = y + Math.cos(time + y * 0.1) * 0.02
        positions[i3 + 2] = z + Math.sin(time + z * 0.1) * 0.02
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.15} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function ParticleBackground() {
  const { width, height } = useWindowSize()

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  )
}
