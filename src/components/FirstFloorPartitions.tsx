import { DoubleSide } from 'three'
import { Edges } from '@react-three/drei'
import {
  firstFloorFootprint,
  shop1Study,
  shop1DoorStudy,
} from '../data/building'

import WallWithDoorOpening from './WallWithDoorOpening'

type WallSurfaceProps = {
  width: number
  height: number
  position: [number, number, number]
  rotationY?: number
}

function WallSurface({
  width,
  height,
  position,
  rotationY = 0,
}: WallSurfaceProps) {
  return (
    <mesh position={position} rotation={[0, rotationY, 0]}>
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

export default function FirstFloorPartitions() {
  const { frontWidth, bodyDepth } = firstFloorFootprint
  const { width, depth, rightShopWidth, height } = shop1Study

  // Provisional placement based on the labelled shop widths.
  const buildingRight = frontWidth / 2
  const front = bodyDepth / 2

  const shopRight = buildingRight - rightShopWidth
  const shopLeft = shopRight - width
  const shopRear = front - depth

  const centreX = (shopLeft + shopRight) / 2
  const centreZ = (front + shopRear) / 2
  const centreY = height / 2

  return (
    <group name="first-floor-partition-study">
      {/* Rear partition: Shop 1 / Shop 2 */}
      <WallSurface
        width={width}
        height={height}
        position={[centreX, centreY, shopRear]}
      />

      {/* Right partition: Shop 1 / Shop 2 */}
      <WallSurface
        width={depth}
        height={height}
        position={[shopRight, centreY, centreZ]}
        rotationY={Math.PI / 2}
      />

      {/* Left boundary: Shop 1 / stair and circulation side */}
      <WallSurface
        width={depth}
        height={height}
        position={[shopLeft, centreY, centreZ]}
        rotationY={Math.PI / 2}
      />
      {/* Front wall facing the future balcony */}
        <WallWithDoorOpening
        width={width}
        height={height}
        doorWidth={shop1DoorStudy.width}
        doorHeight={shop1DoorStudy.height}
        doorOffset={shop1DoorStudy.centreOffset}
        position={[centreX, 0, front]}
        />

    </group>
  )
}