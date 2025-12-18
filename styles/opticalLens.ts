
import { StyleManifesto } from '../types';

export const opticalLensManifesto: StyleManifesto = {
  id: 'cinema',
  name: 'Optical / Lens',
  icon: '🎥',
  philosophy: "The lens is the eye. Lens distortion, focal length, and optical 'mistakes' create character.",
  technicalRules: [
    "Specify focal length (e.g., 14mm for wide, 135mm for compressed).",
    "Incorporate bokeh shapes (cat-eye, hexagonal).",
    "Anamorphic blue streaks and horizontal flares.",
    "Grain should be film-stock specific (e.g., Kodak 500T)."
  ],
  options: [
    { 
      id: 'c1', 
      label: 'Anamorphic Streak', 
      description: 'Horizontal cinematic flares.', 
      value: 'anamorphic lens flares, horizontal blue streaks, oval bokeh',
      technicalDirective: "Force a 2.39:1 cinematic widescreen perspective."
    },
    { 
      id: 'c2', 
      label: 'Macro 100mm', 
      description: 'Microscopic texture focus.', 
      value: '100mm macro lens, razor-thin depth of field, microscopic textures',
      technicalDirective: "The subject must be within 5cm of the lens."
    }
  ]
};
