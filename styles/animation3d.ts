import { StyleManifesto } from '../types';

export const animation3dManifesto: StyleManifesto = {
  id: 'animation3d',
  name: '3D Animation',
  icon: '🎬',
  philosophy: "The art of 'Appeal'. This module captures the cinematic magic of modern 3D feature films. It prioritizes expressive character 'DNA', lush environments, and the physical warmth of light hitting digital surfaces.",
  technicalRules: [
    "Subsurface Scattering (SSS) is mandatory for skin to create a lifelike, fleshy glow.",
    "Ocular Brilliance: Eyes must have a distinct 'cornea' reflection and high-saturated irises.",
    "The 'Silhouette' must be readable and iconic, following classical animation posing rules.",
    "Hair and Fur should use a 'multi-strand' shader with soft-anisotropic highlights.",
    "Environments should feature 'Soft-Box' global illumination for a friendly, approachable look."
  ],
  options: [
    { 
      id: 'a3d1', 
      label: 'Pixar Sparkle', 
      description: 'Lush textures and hyper-expressive ocular depth.', 
      value: 'Pixar 3D animation style, high-fidelity textures, expressive facial rigging, ocular sparkle, (appeal:1.6)',
      technicalDirective: "Add a sharp white reflection point in the top-third of the pupils."
    },
    { 
      id: 'a3d2', 
      label: 'Dreamworks Snap', 
      description: 'High-energy, snappy posing and vibrant color saturation.', 
      value: 'Dreamworks animation style, snappy posing, vibrant color palette, dynamic lighting, (energy:1.4)',
      technicalDirective: "Exaggerate the 'line of action' in the character's spine."
    },
    { 
      id: 'a3d3', 
      label: 'Disney Painterly 3D', 
      description: 'Soft, rounded edges and light-filled shadows.', 
      value: 'Modern Disney 3D style, soft-rounded features, painterly textures, warm cinematic glow',
      technicalDirective: "Soften all hard edges and use a split-complementary color scheme."
    }
  ]
};
