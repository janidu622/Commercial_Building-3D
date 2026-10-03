import { DoubleSide } from 'three'
import { Edges } from '@react-three/drei'

type WallWithDoorOpeningProps = {
  width: number
  height: number
  doorWidth: number
  doorHeight: number
  doorOffset?: number
  position: [number, number, number]
}

type WallPieceProps = {
  width: number
  height: number
  x: number
  y: number
}

function WallPiece({ width, height, x, y }: WallPieceProps) {
  return (
    <mesh position={[x, y, 0]}>
      <planeGeometry args={[width, height]} />

      <meshStandardMaterial
        color="#e2e8f0"
        side={DoubleSide}
        roughness={0.9}
      />

      <Edges color="#64748b" />
    </mesh>
  )
}

export default function WallWithDoorOpening({
  width,
  height,
  doorWidth,
  doorHeight,
  doorOffset = 0,
  position,
}: WallWithDoorOpeningProps) {
  const wallLeft = -width / 2
  const wallRight = width / 2

  const doorLeft = doorOffset - doorWidth / 2
  const doorRight = doorOffset + doorWidth / 2

  const leftWidth = doorLeft - wallLeft
  const rightWidth = wallRight - doorRight
  const upperHeight = height - doorHeight

  return (
    <group position={position}>
      <WallPiece
        width={leftWidth}
        height={height}
        x={(wallLeft + doorLeft) / 2}
        y={height / 2}
      />

      <WallPiece
        width={rightWidth}
        height={height}
        x={(doorRight + wallRight) / 2}
        y={height / 2}
      />

      <WallPiece
        width={doorWidth}
        height={upperHeight}
        x={doorOffset}
        y={doorHeight + upperHeight / 2}
      />
    </group>
  )
}