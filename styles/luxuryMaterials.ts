
import { StyleManifesto } from '../types';

export const luxuryMaterialsManifesto: StyleManifesto = {
  id: 'materials',
  name: 'Luxury Materials',
  icon: '💎',
  philosophy: "A focus on hyper-tactile realism. Every surface must have a physically accurate micro-texture and reflective index. This is the material world of 'Unachievable Beauty'.",
  technicalRules: [
    "Describe the 'feel' of the surface (brushed, velvet, crystalline).",
    "Micro-scratches and dust particles add realism to high-end renders.",
    "Use complex refraction (Caustics) for glass and liquid simulations.",
    "Anisotropy for metals like titanium or brushed aluminum."
  ],
  options: [
    { 
      id: 'm1', 
      label: 'Obsidian Matte', 
      description: 'Light-absorbing, velvet-dark stone.', 
      value: 'obsidian matte finish, zero-specular absorption, velvet-like darkness',
      technicalDirective: "Set light absorption to 99% for deep recesses."
    },
    { 
      id: 'm2', 
      label: 'Liquid Chrome', 
      description: 'Fluid metal with perfect mirror reflections.', 
      value: 'mercury-like liquid chrome, flawless mirror finish, distorted reflections',
      technicalDirective: "Simulate high-tension fluid dynamics on metallic surfaces."
    },
    { 
      id: 'm3', 
      label: 'Iridescent Silk', 
      description: 'Thin-film interference on fabric.', 
      value: 'iridescent liquid silk, moiré interference patterns, pearlescent highlights',
      technicalDirective: "Apply color-shifting gradients based on viewing angle."
    }
  ]
};
