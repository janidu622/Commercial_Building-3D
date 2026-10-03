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
// Source: new chuti home 101.pdf, pages 1–2.
// These are transcribed labels, not calculated floor elevations.
// "Drawing label confirmed" does not mean construction verified.

export const sectionDimensions = {
  groundStorey: {
    original: "12'",
    printedMetres: 3.65,
  },
  firstStorey: {
    original: "10'",
    printedMetres: 3.04,
  },
  secondStorey: {
    original: "10'",
    printedMetres: 3.05,
  },
  parapet: {
    original: "3'6\"",
    printedMetres: 1.07,
  },
  terraceCover: {
    original: "8'",
    printedMetres: 2.44,
    additionalLabelMetres: 2.4,
  },
  status: 'DRAWING_LABELS_CONFIRMED',
  floorElevationsStatus: 'PENDING_SLAB_AND_DATUM_RECONCILIATION',
} as const