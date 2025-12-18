
import { StyleManifesto } from '../types';

export const renStimpyManifesto: StyleManifesto = {
  id: 'renstimpy',
  name: 'Ren & Stimpy',
  icon: 'RS',
  philosophy: "The Spumco aesthetic is defined by extreme anatomical deformation, manic psychological states, and 'gross-out' detail.",
  technicalRules: [
    "Anatomy must be fluid; bone structure is secondary to expression.",
    "Use 'gross-out' close-ups: veins, wetness, bloodshot eyes, and skin textures."
  ],
  options: [
    { 
      id: 'rs1', 
      label: 'Spumco Core', 
      description: 'Grotesque exaggeration and thick black outlines.', 
      value: 'Ren & Stimpy style, grotesque exaggerated cartoon, thick black outlines',
      technicalDirective: "Force extreme facial squash and stretch; use varying line weights."
    },
    { 
      id: 'rs3', 
      label: 'Gross-Out Zoom', 
      description: 'Veins, textures, and bloodshot eyes.', 
      value: 'grotesque close-up, veins popping, bloodshot eyes, wet textures',
      technicalDirective: "Add micro-details: sweat beads, hair follicles, and iris striations."
    }
  ]
};
