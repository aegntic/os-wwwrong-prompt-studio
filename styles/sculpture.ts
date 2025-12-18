
import { StyleManifesto } from '../types';

export const sculptureManifesto: StyleManifesto = {
  id: 'sculpture',
  name: 'Sculpture',
  icon: '🗿',
  philosophy: "The human form carved from time. This module explores the contrast between the rough-hewn stone and the polished mirror finish.",
  technicalRules: [
    "Anatomy should follow Greek or Renaissance proportions (unless distorted).",
    "Material must feel cold and heavy (Carrara marble, Bronze, Graphite).",
    "Surface detail should include 'chisel marks' or 'casting seams'.",
    "Lighting should be theatrical (side-lit) to emphasize volume."
  ],
  options: [
    { 
      id: 'sc1', 
      label: 'Carrara Marble', 
      description: 'Soft-white, slightly translucent Italian stone.', 
      value: 'polished Carrara marble sculpture, soft subsurface scattering, subtle blue veins',
      technicalDirective: "Set the subsurface scattering to 'milk' density."
    },
    { 
      id: 'sc2', 
      label: 'Modern Bronze', 
      description: 'Dark, hand-rubbed metal with greenish patina.', 
      value: 'oxidized bronze sculpture, hand-rubbed patina, cast metal texture, (weight:1.5)',
      technicalDirective: "Add greenish highlights to the recessed areas (patina)."
    }
  ]
};
