
import { StyleManifesto } from '../types';

export const darkFantasyManifesto: StyleManifesto = {
  id: 'darkfantasy',
  name: 'Dark Fantasy',
  icon: '💀',
  philosophy: "The intersection of Giger and Beksinski. It explores organic decay, bio-mechanical synthesis, and the beauty of the grotesque.",
  technicalRules: [
    "Anatomy should be fused with industrial or crystalline elements.",
    "Palette should be monochromatic but deep (bone, ash, oil).",
    "Surfaces should appear 'wet' or 'calcified'.",
    "High-contrast, theatrical 'chiaroscuro' lighting."
  ],
  options: [
    { 
      id: 'df1', 
      label: 'Biomechanical', 
      description: 'Organic forms fused with machinery.', 
      value: 'Giger-esque biomechanical fusion, internal ribbing, oily sheen, bone-like pipes',
      technicalDirective: "Describe the 'pulsing' or 'slimy' nature of the mechanical parts."
    },
    { 
      id: 'df2', 
      label: 'Dystopian Ash', 
      description: 'Silent, calcified landscapes.', 
      value: 'Beksinski-style dystopian landscape, calcified figures, atmospheric ash fall',
      technicalDirective: "Focus on vast, silent architectural decay."
    }
  ]
};
