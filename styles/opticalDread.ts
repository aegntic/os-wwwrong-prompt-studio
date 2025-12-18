
import { StyleManifesto } from '../types';

export const opticalDreadManifesto: StyleManifesto = {
  id: 'opticaldread',
  name: 'Optical Dread',
  icon: 'OD',
  philosophy: "The Unreliable Eye. This module violates the laws of reflection and peripheral persistence. It focuses on 'Distorted Perceptions' where mirrors show mismatches, and shadows move out of sync with their casters.",
  technicalRules: [
    "Mirror Mismatch: The reflection must diverge from the subject by exactly 15% (expression change, delayed movement).",
    "Peripheral Persistence: Glimpsed figures in the outer 10% of the frame must vanish or shift upon focal center.",
    "Geometric Unease: Lines of perspective must converge at impossible angles (Non-Euclidean).",
    "Chromatic Fringe: Apply 2px red/blue separation only to moving shadows."
  ],
  options: [
    { 
      id: 'od1', 
      label: 'Mirror Dissonance', 
      description: 'The reflection shows a different reality.', 
      value: 'distorted mirror reflection, asynchronous reflection movement, (reflection-wrongness:1.6)',
      technicalDirective: "Diverge the reflected facial expression from the source subject by one emotional state."
    },
    { 
      id: 'od2', 
      label: 'Peripheral Shadow', 
      description: 'Malevolent glimpses in the frame edges.', 
      value: 'peripheral silhouette anomaly, fleeting malevolent presence, edge-of-frame distortion',
      technicalDirective: "Place a high-contrast dark figure at the 90th percentile horizontal axis, blurred."
    },
    { 
      id: 'od3', 
      label: 'Impossible Convergence', 
      description: 'Perspective lines that defy logic.', 
      value: 'non-euclidean perspective convergence, distorted architectural geometry, warped spatial depth',
      technicalDirective: "Adjust vanishing points to create an optical illusion of an endless, narrowing hallway."
    }
  ]
};
