// Internal units: metres.
// Source: PDF page 9, first-floor plan.
// Printed metric values retained pending dimension reconciliation.

export const firstFloorFootprint = {
  frontWidth: 13.22,
  rearWidth: 11.8,
  bodyDepth: 10.12,
  status: 'UNVERIFIED',
  assumptions: [
    'Right edge aligned; taper placed on the left.',
    'Balcony excluded from body depth.',
    'Reference surface only; void and stair openings not yet cut.',
    'Imperial and metric dimension discrepancies remain unresolved.',
  ],
} as const