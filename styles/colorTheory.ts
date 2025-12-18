
import { StyleManifesto } from '../types';

export const colorTheoryManifesto: StyleManifesto = {
  id: 'colortheory',
  name: 'Color Theory',
  icon: '🌈',
  philosophy: "Psychological and physical color control. This module treats color as a narrative tool, enforcing professional LUT-based grading and physical light wavelengths.",
  technicalRules: [
    "Enforce specific palettes: Analogous, Complementary, or Split-Complementary.",
    "Black levels must be crushed or lifted based on the desired 'Film Stock'.",
    "Color temperature must be consistent across the scene (e.g., 3200K vs 5600K).",
    "Use 'Teal and Orange' or 'Monochromatic' color schemes."
  ],
  options: [
    { 
      id: 'ct1', 
      label: 'Cinema Noir', 
      description: 'Deep shadows with lifted, grainy blacks.', 
      value: 'cinema noir grading, lifted blacks, 35mm film grain, high-contrast monochrome',
      technicalDirective: "Ensure no true #000000 blacks exist; lift shadows to dark grey."
    },
    { 
      id: 'ct2', 
      label: 'Teal & Orange', 
      description: 'Classic blockbuster high-contrast color grading.', 
      value: 'teal and orange blockbuster grade, warm skin tones, cold blue shadows',
      technicalDirective: "Restrict all shadow tones to hex #002233 and highlights to #FFBB77."
    }
  ]
};
