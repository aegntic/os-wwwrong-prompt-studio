
import { StyleManifesto } from '../types';

export const hyperAestheticsManifesto: StyleManifesto = {
  id: 'hyperaesthetics',
  name: 'Hyper-Perfection',
  icon: 'HP',
  philosophy: "This is the architecture of 'Synthetic Winning.' It explores the pinnacle of hypothetical beauty—symmetry and proportions that exceed human biological limits. It is the real-life Barbie aesthetic: hyper-petite, hyper-curvaceous, and flawlessly radiant.",
  technicalRules: [
    "Enforce absolute bilateral facial symmetry (0.01mm tolerance).",
    "Skin must exhibit 'Subsurface Fluorescence'—a glow that feels internal and supernatural.",
    "Proportions: Extreme hourglass silhouette within a petite, delicate frame.",
    "Zero anatomical flaws; every surface must be '12/10' polished perfection.",
    "Eyes must have high-saturation 'Gemstone' irises with multi-layered reflections."
  ],
  options: [
    { 
      id: 'hp1', 
      label: 'Proportion Maxima', 
      description: 'The impossible hourglass: tiny waist, extreme curves.', 
      value: 'extreme hourglass silhouette, impossibly narrow waist, petite stature, doll-like proportions, (anatomical-maxima:1.8)',
      technicalDirective: "Warp the ribcage and hip-to-waist ratio by 40% beyond human limits while maintaining material realism."
    },
    { 
      id: 'hp2', 
      label: 'Subsurface Glow', 
      description: 'Luminous skin that looks Lit from within.', 
      value: 'luminous skin texture, internal light scattering, porcelain-grade radiance, (12/10-beauty:1.5)',
      technicalDirective: "Apply a 0.2 opacity 'Fluorescence' pass to all epidermal surfaces."
    },
    { 
      id: 'hp3', 
      label: 'Surgical Precision', 
      description: 'Eerily perfect, clinical aesthetic success.', 
      value: 'hyper-refined features, surgical perfection look, flawless symmetrical visage, high-fashion synthetic beauty',
      technicalDirective: "Force every facial feature into a mathematically ideal Phi-ratio alignment."
    }
  ]
};
