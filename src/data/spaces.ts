import { firstFloorFootprint, shop1Study } from './building'

type SpaceAnnotation = {
  id: string
  name: string
  position: [number, number, number]
  description: string
  drawingNotes: string
  status: string
  source: string
}

export const firstFloorSpaces: SpaceAnnotation[] = [
  {
    id: 'FF-SHOP-01',
    name: 'Shop 1',
    position: [
    firstFloorFootprint.frontWidth / 2 -
    shop1Study.rightShopWidth -
    shop1Study.width / 2,
            0.12,
            firstFloorFootprint.bodyDepth / 2 - shop1Study.depth / 2,
            ],
    description: 'The smaller shop near the front balcony.',
    drawingNotes:
      'The plan labels this space 14 ft 3 in [4.35 m] wide and 17 ft 2 in [5.22 m] deep.',
    status: 'Space identified; exact wall boundaries pending.',
    source: 'Original drawing set, PDF page 9 — first-floor plan.',
  },
  {
    id: 'FF-SHOP-02',
    name: 'Shop 2',
    position: [3.6, 0.12, -1.5],
    description:
      'The larger shop extends across the rear and down the right side.',
    drawingNotes:
      'Repeated Shop 2 labels describe the connected space. Do not divide it into separate rooms without a drawn partition.',
    status: 'Space identified; exact wall boundaries pending.',
    source: 'Original drawing set, PDF page 9 — first-floor plan.',
  },
  {
    id: 'FF-VOID-01',
    name: 'Void',
    position: [-4.1, 0.12, -2.8],
    description: 'The open area at the rear left, beside Shop 2.',
    drawingNotes:
      'A rear width of 7 ft 10 in [2.39 m] is labelled. The adjacent 4.60 m dimension does not span the full void depth.',
    status: 'Void identified; exact opening boundary pending.',
    source: 'Original drawing set, PDF page 9 — first-floor plan.',
  },
]