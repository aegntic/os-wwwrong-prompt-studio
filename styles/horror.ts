
import { StyleManifesto } from '../types';

export const horrorManifesto: StyleManifesto = {
  id: 'horror',
  name: 'Abyssal Horror',
  icon: 'HR',
  philosophy: "Horror is not an emotion; it is a violation of material physics and psychological safety. This module focuses on 'Unsettling Stillness', 'Environmental Decay', and 'Distorted Perceptions'. It prioritizes the 'Uncanny Valley' and atmospheric dread over explicit content.",
  technicalRules: [
    "Enforce low-key chiaroscuro lighting with deep shadows and minimal highlights (0.1% fill).",
    "Material viscosity for fluids must be set to 'thick/sluggish' (e.g., oil, tar, or black bile).",
    "Use a desaturated palette with cold blue or jaundiced yellow undertones.",
    "Atmospheric stillness: Glimpsed silhouettes and peripheral figures must appear 'wrong' or 'frozen'.",
    "Incorporate subtle environmental decay: peeling velvet, tarnished gold, and flickering candlelight."
  ],
  options: [
    { 
      id: 'hr1', 
      label: 'Psychological Unease', 
      description: 'Subtle wrongness and malevolent presence.', 
      value: 'oppressive sense of dread, unsettling stillness, malevolent presence implied through shadows, (unease:1.6)',
      technicalDirective: "Diverge character expressions slightly from human norms; use asynchronous eye movements."
    },
    { 
      id: 'hr2', 
      label: 'Viscous Decay', 
      description: 'Sluggish, light-absorbing fluids and textures.', 
      value: 'high-viscosity black fluid, oily sheen, necrotic skin textures, advanced subsurface scattering',
      technicalDirective: "Apply a 1.0 specular reflection to fluids with zero transparency; simulate internal structural collapse."
    },
    { 
      id: 'hr3', 
      label: 'Chiaroscuro Shadows', 
      description: 'Extreme contrast and isolated light sources.', 
      value: 'low-key chiaroscuro lighting, deep shadows, flickering candlelight, isolated glowing points',
      technicalDirective: "Set shadow density to 95% and restrict light bounce to the immediate 10cm of the source."
    }
  ]
};
