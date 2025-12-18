
import { StyleManifesto } from '../types';

export const compositionManifesto: StyleManifesto = {
  id: 'composition',
  name: 'Composition',
  icon: '📐',
  philosophy: "The geometry of focus. This module enforces the structural rules of cinematography and classical painting to guide the eye.",
  technicalRules: [
    "Follow the Golden Ratio or Rule of Thirds.",
    "Use 'Leading Lines' to point toward the subject.",
    "Incorporate 'Dutch Angles' for psychological tension.",
    "Frame within a frame: use architecture or foliage to border the subject."
  ],
  options: [
    { 
      id: 'cp1', 
      label: 'Golden Ratio', 
      description: 'Naturally pleasing mathematical arrangement.', 
      value: 'Fibonacci spiral composition, golden ratio alignment, perfect balance',
      technicalDirective: "Place the primary focal point at the intersection of the spiral."
    },
    { 
      id: 'cp2', 
      label: 'Dutch Angle', 
      description: 'Tilted horizon for unease and energy.', 
      value: 'tilted Dutch angle, horizon tilt, psychological tension, dynamic perspective',
      technicalDirective: "Tilt the camera by exactly 15 degrees off-axis."
    }
  ]
};
