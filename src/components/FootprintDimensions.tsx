import { Html, Line } from '@react-three/drei'
import { firstFloorFootprint } from '../data/building'

type Point = [number, number, number]

type DimensionProps = {
  start: Point
  end: Point
  label: string
}

function Dimension({ start, end, label }: DimensionProps) {
  const middle: Point = [
    (start[0] + end[0]) / 2,
    start[1],
    (start[2] + end[2]) / 2,
  ]

  // End ticks run perpendicular to the dimension line.
  const alongX = Math.abs(end[0] - start[0]) > 0
  const tickX = alongX ? 0 : 0.18
  const tickZ = alongX ? 0.18 : 0

  return (
    <group>
      <Line points={[start, end]} color="#fbbf24" lineWidth={1.5} />

      {[start, end].map((point, index) => (
        <Line
          key={index}
          points={[
            [point[0] - tickX, point[1], point[2] - tickZ],
            [point[0] + tickX, point[1], point[2] + tickZ],
          ]}
          color="#fbbf24"
          lineWidth={1.5}
        />
      ))}

      <Html
        position={middle}
        center
        zIndexRange={[10, 0]}
        style={{ pointerEvents: 'none' }}
      >
        <span className="dimension-label">{label}</span>
      </Html>
    </group>
  )
}

export default function FootprintDimensions() {
  const { frontWidth, rearWidth, bodyDepth } = firstFloorFootprint

  const left = -frontWidth / 2
  const right = frontWidth / 2
  const front = bodyDepth / 2
  const rear = -bodyDepth / 2

  const height = 0.08
  const offset = 1

  return (
    <group>
      <Dimension
        start={[left, height, front + offset]}
        end={[right, height, front + offset]}
        label={`Front · ${frontWidth.toFixed(2)} m`}
      />

      <Dimension
        start={[right - rearWidth, height, rear - offset]}
        end={[right, height, rear - offset]}
        label={`Rear · ${rearWidth.toFixed(2)} m`}
      />

      <Dimension
        start={[right + offset, height, front]}
        end={[right + offset, height, rear]}
        label={`Depth · ${bodyDepth.toFixed(2)} m`}
      />
    </group>
  )
}