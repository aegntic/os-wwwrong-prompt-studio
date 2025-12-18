
import { StyleManifesto } from '../types';

export const typographyManifesto: StyleManifesto = {
  id: 'typo',
  name: 'Typography',
  icon: '🔠',
  philosophy: "Visual language as form. This module treats the letter as a sculptural object, focusing on negative space, kerning, and the 'weight' of ink on paper.",
  technicalRules: [
    "Treat text as a 3D element with depth and shadow.",
    "Incorporate high-end serifs (Didot style) or ultra-thin sans-serifs.",
    "Use 'Gold Leafing' or 'Debossing' as material effects.",
    "Editorial white-space must be 70% of the composition."
  ],
  options: [
    { 
      id: 'typ1', 
      label: 'Editorial Serif', 
      description: 'Vogue-style elegant serifs with extreme kerning.', 
      value: 'high-end editorial typography, elegant serifs, gold leaf debossing, thick cotton paper',
      technicalDirective: "Force the letters to overlap slightly to create negative space patterns."
    },
    { 
      id: 'typ2', 
      label: 'Neon Glyphs', 
      description: 'Glowing futuristic characters floating in space.', 
      value: 'holographic neon typography, glowing glyphs, floating 3D letters, digital static',
      technicalDirective: "Apply a subtle glitch effect to the letter edges."
    }
  ]
};
