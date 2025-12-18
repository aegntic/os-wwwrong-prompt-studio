
import { StyleManifesto } from '../types';

export const masterShadingManifesto: StyleManifesto = {
  id: 'shading',
  name: 'Master Shading',
  icon: '🧊',
  philosophy: "Deep dive into the physics of light-surface interaction. It is the bridge between art and math.",
  technicalRules: [
    "Prioritize Subsurface Scattering (SSS) for any organic or translucent skin.",
    "Ambient Occlusion must define the contact points of every object.",
    "Fresnel effects on all curved surfaces.",
    "Clear-coat layering for automotive or polished wood looks."
  ],
  options: [
    { 
      id: 'sh1', 
      label: 'Subsurface SSS', 
      description: 'Light bleeding through flesh/stone.', 
      value: 'realistic subsurface scattering, light bleeding through organic materials',
      technicalDirective: "Simulate light passing through the ears or fingertips (red-shift)."
    },
    { 
      id: 'sh2', 
      label: 'Cel Shading', 
      description: 'Hand-painted 2D anime look.', 
      value: 'professional cel shaded, sharp shadow boundaries, ink-paint look',
      technicalDirective: "Restrict the color palette to 4-5 steps per surface."
    }
  ]
};
