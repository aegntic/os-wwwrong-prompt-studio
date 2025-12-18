
import { StyleManifesto } from '../types';

export const automotiveManifesto: StyleManifesto = {
  id: 'auto',
  name: 'Automotive',
  icon: '🏎️',
  philosophy: "Speed frozen in material. This module explores multi-layer paint systems, metallic flakes, and the aerodynamic sculpting of light.",
  technicalRules: [
    "Use 'Candy Coat' physics: a colored clear-layer over a metallic base.",
    "Incorporate metallic flakes (glitter) with varying sizes and sparkle.",
    "Reflections must be continuous and 'flow' across panels.",
    "Simulate carbon fiber weave with anisotropic light response."
  ],
  options: [
    { 
      id: 'au1', 
      label: 'Candy Clearcoat', 
      description: 'Deep, multi-layered high-gloss paint.', 
      value: 'candy-apple clearcoat, multi-layer depth, metallic flake sparkle, (polish:1.8)',
      technicalDirective: "Place a transparent red layer over a silver metallic base."
    },
    { 
      id: 'au2', 
      label: 'Exposed Carbon', 
      description: 'Raw carbon fiber weave with clear gloss.', 
      value: 'exposed 2x2 carbon fiber weave, structural composite, anisotropic sheen',
      technicalDirective: "Vary the reflection intensity based on the weave direction."
    }
  ]
};
