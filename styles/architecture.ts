
import { StyleManifesto } from '../types';

export const architectureManifesto: StyleManifesto = {
  id: 'arch',
  name: 'Architecture',
  icon: '🏛️',
  philosophy: "Brutalist scale meets Zen minimalism. Space is defined by the absence of clutter and the presence of monumental materiality.",
  technicalRules: [
    "Enforce verticality and dramatic scale.",
    "Material-first design: concrete, glass, or obsidian.",
    "Light as a structural element (shadow gaps, light wells).",
    "Negative space must be 60% of the composition."
  ],
  options: [
    { 
      id: 'a1', 
      label: 'Brutalist Concrete', 
      description: 'Raw, heavy, and monumental.', 
      value: 'brutalist concrete architecture, board-formed texture, monolithic scale',
      technicalDirective: "Emphasize weight and gravitational pressure."
    },
    { 
      id: 'a2', 
      label: 'Ethereal Glass', 
      description: 'Floating structures of light.', 
      value: 'ethereal glass pavilion, floating slabs, structural transparency',
      technicalDirective: "Use internal caustics to light the interior."
    }
  ]
};
