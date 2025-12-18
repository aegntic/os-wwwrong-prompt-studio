
import { StyleManifesto } from '../types';

export const jewelryManifesto: StyleManifesto = {
  id: 'jewelry',
  name: 'High Jewelry',
  icon: 'JW',
  philosophy: "The science of brilliance. This module focuses on the refractive indices of precious stones and spectral fire.",
  technicalRules: [
    "Gemstones must exhibit internal light dispersion (spectral fire).",
    "Ray-traced caustics are mandatory."
  ],
  options: [
    { 
      id: 'j1', 
      label: 'Spectral Fire', 
      description: 'Rainbow-colored light dispersion inside stones.', 
      value: 'high internal dispersion, spectral fire, diamond light splitting, (brilliance:1.6)',
      technicalDirective: "Simulate internal light bouncing off pavilion facets."
    }
  ]
};
