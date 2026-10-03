import { useMemo } from 'react'
import { createFirstFloorShape } from '../geometry/createFirstFloorShape'

export default function BuildingFootprint() {
  const shape = useMemo(createFirstFloorShape, [])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial color="#6ee7b7" roughness={0.85} />
    </mesh>
  )
}