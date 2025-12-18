
import { StyleManifesto } from '../types';

export const studioLightingManifesto: StyleManifesto = {
  id: 'prestige',
  name: 'Studio Lighting',
  icon: 'SL',
  philosophy: "This module enforces the 'Unachievable Beauty Standard'. It prioritizes prestige, material perfection, and high-contrast editorial lighting.",
  technicalRules: [
    "Light must have intent: use Rim, Key, and Fill to sculpt form.",
    "Highlight roll-off should be smooth and physically accurate."
  ],
  options: [
    { 
      id: 'l1', 
      label: 'Hard-Edge Rim', 
      description: 'Aggressive backlighting for sharp silhouettes.', 
      value: 'high-contrast rim lighting, sharp edge definition, professional studio setup',
      technicalDirective: "Place a light source directly behind the subject to create a halo effect."
    },
    { 
      id: 'l2', 
      label: 'Butterfly Beauty', 
      description: 'Soft, symmetrical lighting for flawless skin.', 
      value: 'butterfly lighting pattern, softbox diffusion, (unachievable-beauty:1.5)',
      technicalDirective: "Minimize facial shadows; prioritize skin luminescence and soft speculars."
    }
  ]
};
