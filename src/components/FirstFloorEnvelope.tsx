import { useMemo } from 'react'
import { Edges } from '@react-three/drei'
import { sectionDimensions } from '../data/building'
import { createFirstFloorShape } from '../geometry/createFirstFloorShape'

export default function FirstFloorEnvelope() {
  const shape = useMemo(createFirstFloorShape, [])

  const extrusion = useMemo(
    () => ({
      depth: sectionDimensions.firstStorey.printedMetres,
      bevelEnabled: false,
      steps: 1,
    }),
    [],
  )

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <extrudeGeometry args={[shape, extrusion]} />

      <meshStandardMaterial
        color="#93c5fd"
        transparent
        opacity={0.18}
        depthWrite={false}
        roughness={0.8}
      />

      <Edges color="#bfdbfe" />
    </mesh>
  )
}