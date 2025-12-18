
import { StyleManifesto } from '../types';

export const interiorsManifesto: StyleManifesto = {
  id: 'interiors',
  name: 'Interiors',
  icon: '🛋️',
  philosophy: "The psychology of 'Quiet Luxury'. This module focuses on the interaction between bespoke furniture, soft-natural light, and monumental space.",
  technicalRules: [
    "Light must feel directional and soft (e.g., from a hidden skylight).",
    "Material-mix is key: wool vs marble vs walnut wood.",
    "Maintain a strict minimalist grid; zero clutter.",
    "Include high-end audio or design icons as environmental accents."
  ],
  options: [
    { 
      id: 'int1', 
      label: 'Quiet Luxury', 
      description: 'Minimalist, palatial, and deeply calm.', 
      value: 'minimalist palatial interior, soft indirect sunlight, walnut and travertine, (calm:1.6)',
      technicalDirective: "Use a wide-angle lens (18mm) but maintain vertical alignment."
    },
    { 
      id: 'int2', 
      label: 'Atelier Light', 
      description: 'Shadowy, creative sanctuary with soft dust motes.', 
      value: 'sculptor’s atelier, north-facing soft light, dust motes in sunbeams, tactile mess',
      technicalDirective: "Place subtle volumetric light rays in 40% of the frame."
    }
  ]
};
