
import { StyleManifesto } from '../types';

export const fragranceManifesto: StyleManifesto = {
  id: 'fragrance',
  name: 'Fragrance',
  icon: '🧪',
  philosophy: "Visualizing the invisible. This module uses volumetric clouds, golden liquids, and crystalline refraction to represent the 'soul' of a scent.",
  technicalRules: [
    "Incorporate 'Mist' and 'Aura' as physical layers.",
    "Liquids inside bottles must have high refractive clarity.",
    "Include 'Headnotes' as floating botanical fragments.",
    "Lighting should be ethereal and multi-directional."
  ],
  options: [
    { 
      id: 'fr1', 
      label: 'Golden Mist', 
      description: 'Fine spray catching the light like stardust.', 
      value: 'volumetric perfume mist, golden light-catchers, suspended scent droplets',
      technicalDirective: "Particles in the air must follow a spiral 'scent-trail' flow."
    },
    { 
      id: 'fr2', 
      label: 'Crystal Flask', 
      description: 'Ultra-heavy lead crystal bottle with complex caustics.', 
      value: 'heavy lead-crystal bottle, golden liquid core, complex shadow caustics',
      technicalDirective: "The liquid must be 20% more refractive than the glass."
    }
  ]
};
