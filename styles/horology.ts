
import { StyleManifesto } from '../types';

export const horologyManifesto: StyleManifesto = {
  id: 'horology',
  name: 'Horology',
  icon: '⌚',
  philosophy: "Mechanical precision. This module explores the microscopic world of gear trains, hand-polished bridges, and the refractive properties of sapphire glass.",
  technicalRules: [
    "Metallic surfaces must show hand-applied 'Côtes de Genève' or 'Anglage' finishing.",
    "Small parts must have sharp, beveled edges that catch the light.",
    "Sapphire glass should have subtle blue anti-reflective coating artifacts.",
    "Focus on depth: layer the gears and escapements."
  ],
  options: [
    { 
      id: 'hor1', 
      label: 'Tourbillon Depth', 
      description: 'The complex, rotating mechanical heart of a watch.', 
      value: 'open-worked tourbillon movement, hand-polished bridges, deep mechanical layering',
      technicalDirective: "Ensure every visible gear has a distinct specular response."
    },
    { 
      id: 'hor2', 
      label: 'Sapphire Refraction', 
      description: 'The blue tint and clarity of luxury watch glass.', 
      value: 'double-domed sapphire crystal, blue AR-coating, distorted dial edge refraction',
      technicalDirective: "Warp the dial features slightly at the extreme edges of the glass."
    }
  ]
};
