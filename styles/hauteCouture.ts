
import { StyleManifesto } from '../types';

export const hauteCoutureManifesto: StyleManifesto = {
  id: 'fashion',
  name: 'Haute Couture',
  icon: '💃',
  philosophy: "Architectural fashion. This module treats fabric as a structural material, focusing on draping, weave density, and avant-garde silhouettes.",
  technicalRules: [
    "Draping must respect the weight and stiffness of the specific fabric.",
    "Emphasize seams, hand-stitching, and structural boning.",
    "Use complex textures like Tulle, Organza, or Sculptural Latex.",
    "The environment should be high-end minimalist (Atelier or Runway)."
  ],
  options: [
    { 
      id: 'hc1', 
      label: 'Structural Tulle', 
      description: 'Layers of stiff, transparent netting.', 
      value: 'voluminous structural tulle, layered transparency, architectural fabric folds',
      technicalDirective: "Render individual fibers in the netting to create moiré patterns."
    },
    { 
      id: 'hc2', 
      label: 'Liquid Satin', 
      description: 'High-gloss fabric that flows like water.', 
      value: 'liquid heavy satin, fluid fabric movement, high-specular sheen, (luxury-drape:1.5)',
      technicalDirective: "Simulate zero-friction movement in the fabric folds."
    }
  ]
};
