
import { StyleManifesto } from '../types';

export const characterDesignManifesto: StyleManifesto = {
  id: 'character',
  name: 'Character Design',
  icon: '👤',
  philosophy: "Consistency and Archetype. This module provides a framework for building characters that maintain their DNA across different prompt iterations.",
  technicalRules: [
    "Define a 'Signature Feature' (e.g., specific nose shape, scar, or clothing item).",
    "Specify 'Anatomical Rigidity' (is the character human or rubber-hose?).",
    "Uniformity of costume materials is mandatory.",
    "Use 'Character Sheet' logic: front, side, and profile views."
  ],
  options: [
    { 
      id: 'char1', 
      label: 'The Protagonist', 
      description: 'Idealized features with a cinematic heroic silhouette.', 
      value: 'archetypal protagonist, sharp heroic jawline, signature weathered cloak, (consistency:1.8)',
      technicalDirective: "Maintain the 8-head-high heroic proportion."
    },
    { 
      id: 'char2', 
      label: 'The Grotesque', 
      description: 'A recurring distorted figure with a unique deformity.', 
      value: 'recurring grotesque character, hunched silhouette, asymmetrical features, (Spumco-DNA:1.5)',
      technicalDirective: "Exaggerate the hands and feet by 25%."
    }
  ]
};
