
import { StyleManifesto } from '../types';

export const fineArtManifesto: StyleManifesto = {
  id: 'fineart',
  name: 'Fine Art',
  icon: '🎨',
  philosophy: "The human hand in the digital space. Focuses on the physical properties of paint, canvas, and the historical techniques of masters like Caravaggio or Rembrandt.",
  technicalRules: [
    "Visible brush strokes (Impasto) must have height and shadow.",
    "Canvas texture (linen/cotton weave) should be subtle but present.",
    "Use 'Chiaroscuro' for dramatic tonal contrast.",
    "Simulate paint 'craquelure' (micro-cracks) in older masterpieces."
  ],
  options: [
    { 
      id: 'fa1', 
      label: 'Impasto Oil', 
      description: 'Thick, textured paint with visible peaks.', 
      value: 'heavy impasto oil painting, thick brushwork, physical paint depth, (texture:1.4)',
      technicalDirective: "Apply directional lighting to create shadows under paint strokes."
    },
    { 
      id: 'fa2', 
      label: 'Sfumato Glaze', 
      description: 'Soft, smoky transitions between tones.', 
      value: 'da Vinci sfumato technique, smoky transitions, masterfully blended oil glazes',
      technicalDirective: "Blur the edges of forms into the background using transparent layers."
    }
  ]
};
