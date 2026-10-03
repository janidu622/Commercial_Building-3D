import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { firstFloorFootprint, shop1Study } from '../data/building'

export type ViewMode = 'perspective' | 'top' | 'shop1'

type ViewerCameraProps = {
  view: ViewMode
}

export default function ViewerCamera({ view }: ViewerCameraProps) {
  const { size } = useThree()

  const shopCentreX =
    firstFloorFootprint.frontWidth / 2 -
    shop1Study.rightShopWidth -
    shop1Study.width / 2

  const front = firstFloorFootprint.bodyDepth / 2

  // Presentation settings, not architectural dimensions.
  const eyeHeight = 1.6

  const position: [number, number, number] =
    view === 'shop1'
      ? [shopCentreX, eyeHeight, front - 0.7]
      : [17, 15, 19]

  const target: [number, number, number] =
    view === 'shop1'
      ? [shopCentreX, eyeHeight, front - shop1Study.depth + 0.7]
      : [0, 0, 0]

  // Fit the footprint and its dimension guides on different screens.
  const planZoom = Math.max(
    1,
    Math.min(size.width / 19, size.height / 16),
  )

  return (
    <group key={view}>
      {view === 'top' ? (
        <OrthographicCamera
          makeDefault
          position={[0, 24, 0]}
          up={[0, 0, -1]}
          zoom={planZoom}
          near={0.1}
          far={100}
        />
      ) : (
        <PerspectiveCamera
          makeDefault
          position={position}
          fov={view === 'shop1' ? 65 : 45}
          near={0.05}
          far={150}
        />
      )}

      <OrbitControls
        makeDefault
        target={target}
        enableRotate={view === 'perspective'}
        enablePan={view !== 'shop1'}
        enableZoom={view !== 'shop1'}
        minDistance={5}
        maxDistance={45}
        minZoom={5}
        maxZoom={150}
        maxPolarAngle={
          view === 'top' ? Math.PI : Math.PI / 2 - 0.05
        }
        enabled={view !== 'shop1'}
      />
    </group>
  )
}