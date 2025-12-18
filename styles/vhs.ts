
import { StyleManifesto } from '../types';

export const vhsManifesto: StyleManifesto = {
  id: 'lofi',
  name: 'VHS / Lo-Fi',
  icon: '📼',
  philosophy: "The aesthetics of error. It values tracking lines, color bleed, and the nostalgia of 1980s magnetic tape storage.",
  technicalRules: [
    "Introduce chromatic aberration and color fringing.",
    "Simulate 'tracking' errors and magnetic dropout lines.",
    "The resolution should feel intentionally low-pass filtered.",
    "High-contrast bloom on bright areas."
  ],
  options: [
    { 
      id: 'vhs1', 
      label: 'Tape Degradation', 
      description: 'Heavy tracking lines and static noise.', 
      value: 'heavy VHS tracking lines, tape noise, magnetic dropouts, 4:3 aspect ratio artifacts',
      technicalDirective: "Apply horizontal jitter to high-contrast edges."
    },
    { 
      id: 'vhs2', 
      label: 'Glow-Fi Bloom', 
      description: 'Dreamy, soft, over-exposed neon.', 
      value: 'dreamy retro-lofi bloom, soft focus, chromatic bleeding, warm analog glow',
      technicalDirective: "Bleed the reds and cyans by 15 pixels."
    }
  ]
};
