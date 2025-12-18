
import { StyleManifesto } from '../types';

export const botanicalManifesto: StyleManifesto = {
  id: 'botanical',
  name: 'Exotic Flora',
  icon: '🌺',
  philosophy: "The unachievable beauty of nature. This module focuses on the velvety textures of rare orchids, translucent petals, and crystalline dew drops.",
  technicalRules: [
    "Petals must have visible micro-veins and soft subsurface scattering.",
    "Dew drops should act as spherical lenses (refracting the background).",
    "Colors should be hypersaturated but physically grounded.",
    "Use macro focus to emphasize the 'velvet' texture of surfaces."
  ],
  options: [
    { 
      id: 'b1', 
      label: 'Velvet Orchid', 
      description: 'Deep, light-absorbing floral textures.', 
      value: 'exotic velvet orchid texture, deep saturated pigments, microscopic floral hair',
      technicalDirective: "Simulate the way velvet traps light at steep angles."
    },
    { 
      id: 'b2', 
      label: 'Crystalline Dew', 
      description: 'Perfect spheres of water on petals.', 
      value: 'crystalline dew drops, internal refraction, macroscopic water spheres, (purity:1.4)',
      technicalDirective: "Render the background inverted inside each water droplet."
    }
  ]
};
