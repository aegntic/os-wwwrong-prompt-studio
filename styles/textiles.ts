
import { StyleManifesto } from '../types';

export const textilesManifesto: StyleManifesto = {
  id: 'textiles',
  name: 'Textile Soul',
  icon: '🧶',
  philosophy: "The physics of the fold. This module focuses on the micro-textures of high-end animal fibers and the way they drape across form.",
  technicalRules: [
    "Vary the stiffness based on material (Cashmere = soft, Vicuña = ultra-soft, Linen = stiff).",
    "Micro-hairs must be visible when backlit.",
    "Include individual thread weaves for macro shots.",
    "Colors should feel 'dyed' and organic, not digital."
  ],
  options: [
    { 
      id: 'tex1', 
      label: 'Cashmere Ripple', 
      description: 'The softest, most expensive wool in the world.', 
      value: 'unachievable cashmere texture, microscopic soft fibers, heavy fluid drape',
      technicalDirective: "The fabric must appear to absorb 40% of all incident light."
    },
    { 
      id: 'tex2', 
      label: 'Gilded Weave', 
      description: 'Fabric interwoven with physical gold wire.', 
      value: 'hand-woven textile with 24k gold thread, intricate embroidery, metallic sheen',
      technicalDirective: "Trace every 4th thread with a metallic specular map."
    }
  ]
};
