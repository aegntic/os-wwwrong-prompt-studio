
import { StyleManifesto } from '../types';

export const gastronomyManifesto: StyleManifesto = {
  id: 'food',
  name: 'Gastronomy',
  icon: '🍽️',
  philosophy: "Culinary architecture. Focus on molecular plating, the physics of steam, liquid nitrogen clouds, and the perfect 'sear' on organic surfaces.",
  technicalRules: [
    "Plating should follow high-end minimalist geometric arrangements.",
    "Highlight the 'wet' vs 'crisp' contrast of food textures.",
    "Steam and smoke must be volumetric and light-reactive.",
    "Tableware should be artisanal: basalt, raw clay, or sterling silver."
  ],
  options: [
    { 
      id: 'gas1', 
      label: 'Molecular Mist', 
      description: 'Liquid nitrogen clouds over a plated dish.', 
      value: 'molecular gastronomy plating, liquid nitrogen vapor, volumetric steam, cold-blue light',
      technicalDirective: "Flow the vapor around the edges of the plate using gravity physics."
    },
    { 
      id: 'gas2', 
      label: 'The Perfect Sear', 
      description: 'Macro detail of caramelization and heat.', 
      value: 'Maillard reaction texture, glistening oils, macro food detail, charcoal grit',
      technicalDirective: "Incorporate microscopic bubbling of fats on the surface."
    }
  ]
};
