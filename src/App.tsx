import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ViewerCamera from './components/ViewerCamera'
import type { ViewMode } from './components/ViewerCamera'
import BuildingFootprint from './components/BuildingFootprint'
import FootprintDimensions from './components/FootprintDimensions'
import FirstFloorEnvelope from './components/FirstFloorEnvelope'
import SpaceMarkers from './components/SpaceMarkers'
import { firstFloorSpaces } from './data/spaces'
import FirstFloorPartitions from './components/FirstFloorPartitions'





export default function App() {
  const [view, setView] = useState<ViewMode>('perspective')
  const [showMeasurements, setShowMeasurements] = useState(true)
  const [showEnvelope, setShowEnvelope] = useState(false)
  const [selectedSpaceId, setSelectedSpaceId] = useState<string | null>(null)
  const [showPartitions, setShowPartitions] = useState(true)

  const selectedSpace = firstFloorSpaces.find(
    (space) => space.id === selectedSpaceId,
  )

  

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
          aria-pressed={showEnvelope}
          onClick={() => setShowEnvelope((visible) => !visible)}
        >
          Volume {showEnvelope ? 'on' : 'off'}
        </button>
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
        <button
          type="button"
          aria-pressed={view === 'shop1'}
          onClick={() => {
            setSelectedSpaceId(null)
            setShowPartitions(true)
            setShowEnvelope(false)
            setView('shop1')
          }}
        >
          View Shop 1
        </button>
        <button
          type="button"
          aria-pressed={showMeasurements}
          onClick={() => setShowMeasurements((visible) => !visible)}
        >
          Measurements {showMeasurements ? 'on' : 'off'}
        </button>
        <button
          type="button"
          aria-pressed={showPartitions}
          onClick={() => setShowPartitions((visible) => !visible)}
        >
          Partitions {showPartitions ? 'on' : 'off'}
        </button>
      </nav>

      <section className="viewer" aria-label="Interactive 3D viewer">
        <Canvas
          
          dpr={[1, 1.5]}
          frameloop="demand"
          fallback={<p>Your browser cannot display this 3D viewer.</p>}
        >
          <color attach="background" args={['#101827']} />

          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 12, 8]} intensity={2} />

          <BuildingFootprint />
          {showPartitions && <FirstFloorPartitions />}
          {view !== 'shop1' && (
           <SpaceMarkers
             selectedId={selectedSpaceId}
             onSelect={setSelectedSpaceId}
            />
          )}
          {showEnvelope && view === 'perspective' && <FirstFloorEnvelope />}
          {showMeasurements && view !== 'shop1' && <FootprintDimensions />}
          <gridHelper args={[30, 30, '#475569', '#263244']} />

          <ViewerCamera view={view} />
        </Canvas>
      </section>
      {selectedSpace && (
          <aside className="inspection-panel" aria-label="Selected space details">
            <div className="inspection-heading">
              <div>
                <p className="eyebrow">{selectedSpace.id}</p>
                <h2>{selectedSpace.name}</h2>
              </div>

              <button
                type="button"
                className="close-inspection"
                onClick={() => setSelectedSpaceId(null)}
                aria-label="Close space details"
              >
                Close
              </button>
            </div>

            <p>{selectedSpace.description}</p>
            <p>{selectedSpace.drawingNotes}</p>

            <dl>
              <dt>Status</dt>
              <dd>{selectedSpace.status}</dd>

              <dt>Source</dt>
              <dd>{selectedSpace.source}</dd>
            </dl>

            <small>Marker placement is approximate; room geometry is pending.</small>
          </aside>
        )}

        <footer className="help">
        First-floor layout study · Grid spacing: 1 metre
        <br />
        Partition placement and height provisional · Wall thickness omitted
        </footer>
    </main>
  )
}