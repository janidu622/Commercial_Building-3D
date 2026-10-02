import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <main className="app">
      <header className="toolbar">
        <div>
          <p className="eyebrow">COMMERCIAL BUILDING</p>
          <h1>3D Explorer</h1>
        </div>
        <span className="badge">Viewer setup</span>
      </header>

      <section className="viewer" aria-label="Interactive 3D viewer">
        <Canvas
          camera={{ position: [6, 5, 6], fov: 45 }}
          dpr={[1, 1.5]}
          frameloop="demand"
          fallback={<p>Your browser cannot display this 3D viewer.</p>}
        >
          <color attach="background" args={['#101827']} />

          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 8, 4]} intensity={2} />

          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#6ee7b7" roughness={0.65} />
          </mesh>

          <gridHelper args={[20, 20, '#475569', '#263244']} />

          <OrbitControls
            makeDefault
            target={[0, 1, 0]}
            minDistance={3}
            maxDistance={25}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </section>

      <footer className="help">
        Drag to rotate · Scroll to zoom · Right-drag to pan
      </footer>
    </main>
  )
}