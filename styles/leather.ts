
import { StyleManifesto } from '../types';

export const leatherManifesto: StyleManifesto = {
  id: 'leather',
  name: 'Leather Goods',
  icon: '👜',
  philosophy: "The language of luxury craft. This module focuses on the grain of exotic skins, the precision of edge-painting, and the tension of hand-stitching in high-end leatherwork.",
  technicalRules: [
    "Differentiate between 'Togo', 'Epsom', and 'Exotic Crocodile' textures.",
    "Edge-painting (lustre) must be smooth and slightly reflective.",
    "Hand-stitching (Saddle Stitch) must show a slight 15-degree angle.",
    "The material must show 'Patina' or 'Suppleness' based on age."
  ],
  options: [
    { 
      id: 'lea1', 
      label: 'Saddle Stitch', 
      description: 'Traditional 15-degree hand-stitching.', 
      value: 'Hermès-style saddle stitching, waxed linen thread, 15-degree slant, high-tension',
      technicalDirective: "Force visible individual thread-twists and stitch-holes."
    },
    { 
      id: 'lea2', 
      label: 'Porosus Crocodile', 
      description: 'Symmetrical, high-gloss exotic scale pattern.', 
      value: 'Porosus crocodile skin, symmetrical scale pattern, high-gloss glaze finish',
      technicalDirective: "Render the 'pores' in the center of each scale for authenticity."
    }
  ]
};
