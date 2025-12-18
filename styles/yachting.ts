
import { StyleManifesto } from '../types';

export const yachtingManifesto: StyleManifesto = {
  id: 'yachting',
  name: 'Yacht & Aviation',
  icon: '🛳️',
  philosophy: "The mobility of the elite. Aerodynamic curves meet nautical materiality (Teak, Chrome, Carbon Fiber). It represents freedom and scale.",
  technicalRules: [
    "Horizontal lines must be emphasized to create a sense of speed/peace.",
    "Incorporate 'Infinity Horizons' into the glass reflections.",
    "Materials: high-gloss teak wood, brushed aluminum, and white leather.",
    "Scale should be monumental (super-yacht or private jet)."
  ],
  options: [
    { 
      id: 'ya1', 
      label: 'Nautical Teak', 
      description: 'Golden-brown wood with black caulking lines.', 
      value: 'luxury yacht teak deck, high-gloss finish, marine chrome accents, infinity horizon',
      technicalDirective: "The wood grain must be visible under a 3mm layer of clear lacquer."
    },
    { 
      id: 'ya2', 
      label: 'Private Jet Loft', 
      // Fixed: Wrapped the string in double quotes to allow single quotes inside 'Cloud-level' without breaking syntax
      description: "The 'Cloud-level' interior aesthetic.", 
      value: 'private jet interior, cream leather, panoramic window view of clouds, golden hour',
      technicalDirective: "Light the cabin exclusively using the 'window' light sources."
    }
  ]
};