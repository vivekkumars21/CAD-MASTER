"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function Gear({
  position,
  radius = 1,
  teeth = 12,
  thickness = 0.3,
  speed = 1,
  direction = 1,
  color = "#3b82f6",
}: {
  position: [number, number, number]
  radius?: number
  teeth?: number
  thickness?: number
  speed?: number
  direction?: number
  color?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const gearShape = useMemo(() => {
    const shape = new THREE.Shape()
    const innerRadius = radius * 0.4
    const toothHeight = radius * 0.2
    const toothWidth = (Math.PI * 2) / (teeth * 2)

    for (let i = 0; i < teeth; i++) {
      const angle = (i / teeth) * Math.PI * 2
      const nextAngle = ((i + 1) / teeth) * Math.PI * 2

      // Tooth base
      const x1 = Math.cos(angle) * radius
      const y1 = Math.sin(angle) * radius

      // Tooth tip
      const midAngle = angle + toothWidth / 2
      const x2 = Math.cos(midAngle) * (radius + toothHeight)
      const y2 = Math.sin(midAngle) * (radius + toothHeight)

      // Tooth end
      const x3 = Math.cos(angle + toothWidth) * radius
      const y3 = Math.sin(angle + toothWidth) * radius

      // Valley
      const x4 = Math.cos(nextAngle) * radius
      const y4 = Math.sin(nextAngle) * radius

      if (i === 0) {
        shape.moveTo(x1, y1)
      }
      shape.lineTo(x2, y2)
      shape.lineTo(x3, y3)
      shape.lineTo(x4, y4)
    }

    // Inner hole
    const holePath = new THREE.Path()
    holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true)
    shape.holes.push(holePath)

    return shape
  }, [radius, teeth])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.003 * speed * direction
    }
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <extrudeGeometry
        args={[
          gearShape,
          {
            depth: thickness,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.02,
            bevelSegments: 3,
          },
        ]}
      />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} envMapIntensity={1} />
    </mesh>
  )
}

function Piston({
  position,
  speed = 1,
}: {
  position: [number, number, number]
  speed?: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const pistonRef = useRef<THREE.Mesh>(null)
  const rodRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (pistonRef.current && rodRef.current) {
      const offset = Math.sin(state.clock.elapsedTime * speed) * 0.5
      pistonRef.current.position.y = offset
      rodRef.current.position.y = offset - 0.8
      rodRef.current.scale.y = 1 + offset * 0.3
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Cylinder housing */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.4, 1.5, 32, 1, true]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Piston head */}
      <mesh ref={pistonRef} castShadow receiveShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.3, 32]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Connecting rod */}
      <mesh ref={rodRef} castShadow receiveShadow>
        <cylinderGeometry args={[0.08, 0.08, 1.2, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}

function BlueprintGrid() {
  const gridRef = useRef<THREE.GridHelper>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.1) % 1
    }
  })

  return (
    <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper ref={gridRef} args={[40, 40, "#1e40af", "#1e3a5f"]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

function WireframeBox({
  position,
  size = 1,
  rotationSpeed = 0.5,
}: {
  position: [number, number, number]
  size?: number
  rotationSpeed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * rotationSpeed
      meshRef.current.rotation.y += 0.003 * rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.6} />
    </mesh>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005
      particlesRef.current.rotation.x += 0.0002
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function ExplodedAssembly() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      const explode = Math.sin(state.clock.elapsedTime * 0.3) * 0.3 + 0.5
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const direction = new THREE.Vector3(Math.sin((i * Math.PI * 2) / 5), Math.cos((i * Math.PI * 2) / 5) * 0.5, 0)
          child.position.copy(direction.multiplyScalar(explode))
        }
      })
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[4, 1, -2]}>
        {[...Array(5)].map((_, i) => (
          <mesh key={i} castShadow>
            <torusGeometry args={[0.3, 0.1, 16, 32]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#3b82f6" : "#1e293b"} metalness={0.9} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function CameraController() {
  useFrame((state) => {
    const time = state.clock.elapsedTime
    state.camera.position.x = Math.sin(time * 0.1) * 2
    state.camera.position.y = 2 + Math.sin(time * 0.15) * 0.5
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

function Scene() {
  return (
    <>
      <CameraController />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow shadow-mapSize={[2048, 2048]} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[5, -5, -5]} intensity={0.3} color="#3b82f6" />

      {/* Main gears */}
      <Gear position={[-2, 0, 0]} radius={1.2} teeth={16} speed={0.8} color="#3b82f6" />
      <Gear position={[0.8, 0.8, 0]} radius={0.8} teeth={12} speed={1.2} direction={-1} color="#1e40af" />
      <Gear position={[0.8, -0.8, 0]} radius={0.6} teeth={10} speed={1.4} direction={-1} color="#60a5fa" />

      {/* Pistons */}
      <Piston position={[-4, 0, 1]} speed={1.5} />
      <Piston position={[3, -1, 0.5]} speed={1.2} />

      {/* Wireframe objects */}
      <WireframeBox position={[3, 2, -1]} size={0.8} rotationSpeed={0.8} />
      <WireframeBox position={[-3, 2, 1]} size={0.5} rotationSpeed={1.2} />

      {/* Exploded view */}
      <ExplodedAssembly />

      {/* Blueprint grid */}
      <BlueprintGrid />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Environment fog */}
      <fog attach="fog" args={["#0a0a1a", 5, 25]} />
    </>
  )
}

export default function MechanicalScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}
