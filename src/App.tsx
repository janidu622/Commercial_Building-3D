import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import BuildingFootprint from './components/BuildingFootprint'

type ViewMode = 'perspective' | 'top'

export default function App() {
  const [view, setView] = useState<ViewMode>('perspective')

  const cameraPosition: [number, number, number] =
    view === 'top' ? [0, 24, 0.01] : [17, 15, 19]

  return (
    <main className="app">
      <header className="toolbar">
        <div>
          <p className="eyebrow">COMMERCIAL BUILDING</p>
          <h1>3D Explorer</h1>
        </div>

        <span className="badge">Provisional footprint</span>
      </header>

      <nav className="view-controls" aria-label="Camera views">
        <button
          type="button"
          aria-pressed={view === 'perspective'}
          onClick={() => setView('perspective')}
        >
          Perspective
        </button>

        <button
          type="button"
          aria-pressed={view === 'top'}
          onClick={() => setView('top')}
        >
          Top view
        </button>
      </nav>

      <section className="viewer" aria-label="Interactive 3D viewer">
        <Canvas
          key={view}
          camera={{ position: cameraPosition, fov: 45 }}
          dpr={[1, 1.5]}
          frameloop="demand"
          fallback={<p>Your browser cannot display this 3D viewer.</p>}
        >
          <color attach="background" args={['#101827']} />

          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 12, 8]} intensity={2} />

          <BuildingFootprint />

          <gridHelper args={[30, 30, '#475569', '#263244']} />

          <OrbitControls
            makeDefault
            target={[0, 0, 0]}
            enableRotate={view === 'perspective'}
            minDistance={5}
            maxDistance={45}
            maxPolarAngle={Math.PI / 2 - 0.05}
          />
        </Canvas>
      </section>

      <footer className="help">
        First-floor body outline · Grid spacing: 1 metre
        <br />
        Dimensions provisional · Balcony and openings pending
      </footer>
    </main>
  )
}