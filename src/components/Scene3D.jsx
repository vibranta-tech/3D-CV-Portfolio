import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Icosahedron, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb({ position, color, speed = 1, distort = 0.4, size = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })

  return (
    <Float speed={2 * speed} rotationIntensity={1.5} floatIntensity={2.5}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={3}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </Sphere>
    </Float>
  )
}

function WireframeIcosahedron({ position, color, size = 1.2, speed = 0.5 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25 * speed
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <Icosahedron ref={meshRef} args={[size, 1]} position={position}>
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Icosahedron>
    </Float>
  )
}

function GlowingTorus({ position, color, size = [0.8, 0.3, 32, 32], speed = 0.4 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed
    }
  })

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Torus ref={meshRef} args={size} position={position}>
        <MeshWobbleMaterial
          color={color}
          factor={0.3}
          speed={2}
          transparent
          opacity={0.5}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  )
}

function FloatingOctahedron({ position, color, size = 0.6, speed = 0.6 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 * speed
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
      <Octahedron ref={meshRef} args={[size]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </Octahedron>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef()
  const count = 800
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3)
    const palette = [
      new THREE.Color('#6c5ce7'),
      new THREE.Color('#a29bfe'),
      new THREE.Color('#00f5d4'),
      new THREE.Color('#ff006e'),
      new THREE.Color('#ffd60a'),
    ]
    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)]
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }
    return cols
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function DNAHelix({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  const count = 40

  const spheres = useMemo(() => {
    const items = []
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 4
      const y = (i / count) * 8 - 4
      items.push({
        pos1: [Math.cos(t) * 1.5, y, Math.sin(t) * 1.5],
        pos2: [Math.cos(t + Math.PI) * 1.5, y, Math.sin(t + Math.PI) * 1.5],
        index: i,
      })
    }
    return items
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {spheres.map((s, i) => (
        <group key={i}>
          <mesh position={s.pos1}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#6c5ce7' : '#00f5d4'}
              emissive={i % 2 === 0 ? '#6c5ce7' : '#00f5d4'}
              emissiveIntensity={0.5}
            />
          </mesh>
          <mesh position={s.pos2}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#00f5d4' : '#ff006e'}
              emissive={i % 2 === 0 ? '#00f5d4' : '#ff006e'}
              emissiveIntensity={0.5}
            />
          </mesh>
          {i % 3 === 0 && (
            <mesh position={[(s.pos1[0] + s.pos2[0]) / 2, s.pos1[1], (s.pos1[2] + s.pos2[2]) / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
              <meshStandardMaterial
                color="#a29bfe"
                transparent
                opacity={0.3}
                emissive="#a29bfe"
                emissiveIntensity={0.2}
              />
            </mesh>
          )}
        </group>
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#6c5ce7" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00f5d4" />
        <pointLight position={[0, 5, -10]} intensity={0.4} color="#ff006e" />
        
        {/* Main floating orbs */}
        <FloatingOrb position={[-5, 3, -3]} color="#6c5ce7" speed={0.8} distort={0.5} size={1.2} />
        <FloatingOrb position={[5, -2, -4]} color="#00f5d4" speed={0.6} distort={0.3} size={0.8} />
        <FloatingOrb position={[3, 4, -6]} color="#ff006e" speed={1} distort={0.6} size={0.6} />
        
        {/* Wireframe shapes */}
        <WireframeIcosahedron position={[-4, -3, -5]} color="#a29bfe" size={1.5} speed={0.3} />
        <WireframeIcosahedron position={[6, 2, -7]} color="#ffd60a" size={1} speed={0.5} />
        
        {/* Glowing torus */}
        <GlowingTorus position={[-3, 1, -4]} color="#ff006e" size={[0.7, 0.25, 32, 32]} speed={0.5} />
        <GlowingTorus position={[4, -3, -3]} color="#6c5ce7" size={[0.5, 0.2, 32, 32]} speed={0.7} />
        
        {/* Octahedrons */}
        <FloatingOctahedron position={[2, 3, -2]} color="#ffd60a" size={0.5} speed={0.8} />
        <FloatingOctahedron position={[-5, -1, -6]} color="#00f5d4" size={0.4} speed={0.5} />
        
        {/* DNA Helix */}
        <DNAHelix position={[7, 0, -8]} />
        
        {/* Particle field */}
        <ParticleField />
      </Canvas>
    </div>
  )
}
