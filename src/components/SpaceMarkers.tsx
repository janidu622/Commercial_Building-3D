import { Html } from '@react-three/drei'
import { firstFloorSpaces } from '../data/spaces'

type SpaceMarkersProps = {
  selectedId: string | null
  onSelect: (id: string) => void
}

export default function SpaceMarkers({
  selectedId,
  onSelect,
}: SpaceMarkersProps) {
  return (
    <group>
      {firstFloorSpaces.map((space) => (
        <Html
          key={space.id}
          position={space.position}
          center
          zIndexRange={[20, 0]}
        >
          <button
            type="button"
            className="space-marker"
            aria-pressed={selectedId === space.id}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              onSelect(space.id)
            }}
          >
            {space.name}
          </button>
        </Html>
      ))}
    </group>
  )
}