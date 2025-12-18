
import { StyleManifesto } from '../types';

export const madMagManifesto: StyleManifesto = {
  id: 'madmag',
  name: 'MAD Magazine',
  icon: 'MD',
  philosophy: "The MAD aesthetic is built on hand-drawn crosshatching and biting caricature. It is the style of EC Comics meets late-20th-century political satire. It values visual noise, density, and the 'Don Martin' school of sound effects as visual textures.",
  technicalRules: [
    "Crosshatching must be dense, varied, and clearly hand-inked.",
    "Exaggerate features to the point of satirical caricature.",
    "Use a vintage, slightly yellowed paper texture with visible ink bleed.",
    "Composition should feel chaotic, like a busy magazine cover or a fold-in.",
    "Incorporate 'lurkies' (tiny background gags) into the prompt descriptors."
  ],
  options: [
    { 
      id: 'mm1', 
      label: 'EC Satire', 
      description: 'Classic 1950s horror/satire crosshatching.', 
      value: 'MAD magazine style, satirical caricature, hand-drawn crosshatching, (EC-style-grit:1.4)',
      technicalDirective: "Prioritize pen-and-ink shading density over color gradients. Enforce 0.5pt line jitter."
    },
    { 
      id: 'mm2', 
      label: 'Neuman Grin', 
      description: 'Signature gap-toothed expression.', 
      value: 'Alfred E. Neuman grinning with gap tooth, whimsical satirical features',
      technicalDirective: "Force a specific 1960s satirical illustration palette with CMYK offset printing artifacts."
    },
    { 
      id: 'mm3', 
      label: 'Don Martin Fold', 
      description: 'Impossible anatomical joints and large feet.', 
      value: 'Don Martin style, impossible joint bending, giant shoes, cartoon sound effect lettering',
      technicalDirective: "Use 'FLAP' or 'SPLUT' as physical environmental elements with block-letter serifing."
    }
  ]
};
