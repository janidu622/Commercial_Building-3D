# Architectural analysis

## Building use
Commercial building:
- Ground floor: parking and bathroom.
- First floor: shops, balcony, stairs and void.
- Second floor: offices and bathroom.
- Roof: open terrace and covered terrace.

## Source drawings
Original drawing set: 14 PDF pages.
Clearer sections: new chuti home 101.pdf, 2 pages.
Keep original drawings out of the public repository.

## Confirmed section labels
- Ground storey: 12 ft [3.65 m].
- First storey: 10 ft [3.04 m].
- Second storey: 10 ft [3.05 m], shown in both sections.
- Parapet: 3 ft 6 in [1.07 m].
- Terrace cover: 8 ft [2.44 m].
- Additional cover annotation: 7 ft 10 in [2.40 m].

## Still unresolved
- Clear heights versus floor-to-floor measurement endpoints.
- Slab thickness and resulting floor elevations.
- Imperial/metric discrepancies.
- Relationship between the two terrace-cover height labels.
- Exact footprints, projections and openings for each level.

## Current model
Provisional first-floor body reference surface only.
Uses printed metric dimensions.
Right-edge alignment is inferred.
Balcony, void and stair openings are not modeled.
Do not duplicate this footprint across every floor:
the plans show different boundaries and openings.

## First-floor volume study
- Flat footprint and envelope share one shape function.
- Envelope uses 3.04 m as a provisional study height.
- Its base is local y = 0, not the building's ground-floor elevation.
- It represents the outer body only, not walls or usable floor area.
- Balcony, void, stairs and openings remain absent.
- Actual floor elevations and slab thickness remain unresolved.

## First-floor space annotations
- Shop 1, Shop 2 and the void have stable IDs and selectable markers.
- Marker coordinates are approximate presentation positions.
- Markers do not define room geometry.
- Shop 2 is interpreted as one connected space around Shop 1.
- The 4.60 m dimension beside the void does not span its full depth.
- The void opening has not yet been cut from the reference surface.

## Shop 1 partition study
- Three zero-thickness surfaces show rear, right and left partitions.
- Labelled Shop 1 dimensions: 4.35 m wide × 5.22 m deep.
- Placement provisionally subtracts the labelled 4.33 m right-shop
  width from the body's outer right edge.
- This mixes outer-boundary and room-dimension references:
  wall-face offsets must be reconciled before verification.
- Study height: 3.04 m; not a verified finished wall height.
- Front facade and doorway are not modeled in this step.
- Shop 1 marker follows its calculated study centre.

## Shop 1 front doorway
- Added a zero-thickness front-wall study with a door opening.
- Uses TGD1 schedule dimensions: 1.22 m wide × 2.60 m high.
- Source: original PDF page 12; TGD1 identification on page 9.
- Opening is provisionally centred; exact offset remains unverified.
- Schedule dimensions are used as the study opening dimensions.
  Frame allowances and actual clear opening remain unresolved.
- Glass, door leaves, hardware and wall thickness are not modeled.
- This supersedes the earlier note that the front wall is absent.

## Camera views
- Perspective: external orbit inspection.
- Top: orthographic plan view, fitted to viewport dimensions.
- View Shop 1: fixed interior inspection position near the doorway.
- Interior eye height is a presentation setting of 1.60 m.
- The interior camera follows provisional Shop 1 placement.
- Walking, collision detection and full room navigation are not implemented.