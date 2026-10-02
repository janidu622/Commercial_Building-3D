import { useMemo } from 'react'
import { Shape } from 'three'
import { firstFloorFootprint } from '../data/building'

export default function BuildingFootprint() {
  const shape = useMemo(() => {
    const { frontWidth, rearWidth, bodyDepth } = firstFloorFootprint

    const left = -frontWidth / 2
    const right = frontWidth / 2
    const front = -bodyDepth / 2
    const rear = bodyDepth / 2

    const outline = new Shape()

    outline.moveTo(left, front)
    outline.lineTo(right, front)
    outline.lineTo(right, rear)
    outline.lineTo(right - rearWidth, rear)
    outline.closePath()

    return outline
  }, [])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial color="#6ee7b7" roughness={0.85} />
    </mesh>
  )
}