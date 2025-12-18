
import { StyleManifesto } from '../types';

export const porcelainManifesto: StyleManifesto = {
  id: 'porcelain',
  name: 'Porcelain',
  icon: '🍶',
  philosophy: "Fragile perfection and translucent strength. This module prioritizes 'Bone China' translucency and the 'Wabi-sabi' beauty of repaired imperfections.",
  technicalRules: [
    "High subsurface scattering (SSS) to simulate thin ceramic light-bleed.",
    "High-gloss glaze with sharp, clean environment reflections.",
    "Incorporate gold lacquer for Kintsugi repairs.",
    "Zero visible surface noise or grain; absolute smoothness."
  ],
  options: [
    { 
      id: 'p1', 
      label: 'Bone China', 
      description: 'Ultra-thin, translucent ceramic.', 
      value: 'bone china translucency, light-bleeding through ceramic, ethereal glow',
      technicalDirective: "The object must appear 30% translucent when backlit."
    },
    { 
      id: 'p2', 
      label: 'Kintsugi Gold', 
      description: 'Repaired cracks filled with gold lacquer.', 
      value: 'Kintsugi technique, gold-filled cracks, repaired ceramic beauty, (imperfection:1.3)',
      technicalDirective: "Trace random structural cracks and fill them with molten 24k gold."
    }
  ]
};
