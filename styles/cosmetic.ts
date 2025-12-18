
import { StyleManifesto } from '../types';

export const cosmeticManifesto: StyleManifesto = {
  id: 'cosmetic',
  name: 'Cosmetic Art',
  icon: '💄',
  philosophy: "The 'Clean Beauty' ideal. Focus on moisture, hydration, light-reflective skin, and the tactile nature of liquids and creams. It prioritizes a sense of 'purity' and 'glow'.",
  technicalRules: [
    "Skin must have a dewy, high-moisture finish with subtle specular highlights.",
    "Macro textures of creams should show soft peaks and viscosity.",
    "Lighting must be soft-box diffused to eliminate harsh shadows.",
    "Use 'wet' descriptors for textures: serum, balm, oil-slick."
  ],
  options: [
    { 
      id: 'cos1', 
      label: 'Dewy Hydration', 
      description: 'Ultra-moisturized skin with a healthy glow.', 
      value: 'high-hydration skin texture, dewy finish, soft-box highlight roll-off, (glow:1.5)',
      technicalDirective: "Simulate a thin layer of water over the skin surface."
    },
    { 
      id: 'cos2', 
      label: 'Cream Viscosity', 
      description: 'The thick, luxurious swirl of a high-end balm.', 
      value: 'luxurious cream swirl, thick viscosity, macro cosmetic texture, soft peaks',
      technicalDirective: "Render the cream with a high-surface-tension look."
    }
  ]
};
