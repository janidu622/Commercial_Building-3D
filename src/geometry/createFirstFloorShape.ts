import { Shape } from 'three'
import { firstFloorFootprint } from '../data/building'

export function createFirstFloorShape() {
  const { frontWidth, rearWidth, bodyDepth } = firstFloorFootprint

  const left = -frontWidth / 2
  const right = frontWidth / 2
  const front = -bodyDepth / 2
  const rear = bodyDepth / 2

  const shape = new Shape()

  shape.moveTo(left, front)
  shape.lineTo(right, front)
  shape.lineTo(right, rear)
  shape.lineTo(right - rearWidth, rear)
  shape.closePath()

  return shape
}