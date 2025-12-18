
import { StyleManifesto } from '../types';

export const vaultManifesto: StyleManifesto = {
  id: 'vault',
  name: 'The Vault',
  icon: '🗝️',
  isSecret: true,
  philosophy: "The Archive of the Unseen. Transcendental spatial purity and non-euclidean material physics. This is where the 'wwwrong' engine goes beyond human aesthetics.",
  technicalRules: [
    "Absolute spatial minimalism.",
    "Impossible light stretching (anisotropic auras).",
    "Transcendental material behavior: solids behaving like light.",
    "Geometry based on higher dimensions."
  ],
  options: [
    { 
      id: 'v1', 
      label: 'Crystalline Void', 
      description: 'Absolute spatial purity.', 
      value: 'transcendental spatial minimalism, crystalline void background, infinite depth',
      technicalDirective: "Remove all environmental context except the subject."
    },
    { 
      id: 'v2', 
      label: 'Anisotropic Aura', 
      description: 'Non-euclidean light stretching.', 
      value: 'non-euclidean light stretching, anisotropic aura, impossible material reflections',
      technicalDirective: "Stretch the specular highlights into a 'Y' shape."
    }
  ]
};
