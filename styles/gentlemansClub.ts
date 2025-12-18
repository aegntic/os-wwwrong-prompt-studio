
import { StyleManifesto } from '../types';

export const gentlemansClubManifesto: StyleManifesto = {
  id: 'gentlemansclub',
  name: "Gentleman's Club",
  icon: 'GC',
  philosophy: "Clandestine Opulence. This module architects the 'Secret Luxury' aesthetic—hidden grandeur, mahogany-dense sanctuaries, and neo-classical facades that whisper rather than shout. It values privacy, symmetry, and the material weight of history.",
  technicalRules: [
    "Enforce high-density wood grain for mahogany and walnut surfaces.",
    "Lighting must be low-key (Chiaroscuro) with a warm 2700K golden ambient glow.",
    "Architectural symmetry: Neo-classical or Victorian foundations.",
    "Atmosphere: Incorporate subtle volumetric dust motes and high-viscosity velvet textures.",
    "Exterior must be 'discreetly imposing'—ivy-shrouded limestone or fortified wrought iron."
  ],
  options: [
    { 
      id: 'gc1', 
      label: 'Clandestine Sanctum', 
      description: 'Hidden interior grandeur with velvet and mahogany.', 
      value: 'clandestine opulent interior, hand-carved mahogany paneling, velvet-draped sanctum, (secrecy:1.5)',
      technicalDirective: "Force a low-angle perspective to emphasize vaulted gold-leaf ceilings."
    },
    { 
      id: 'gc2', 
      label: 'Facade of Secrecy', 
      description: 'Discreet yet imposing limestone exterior.', 
      value: 'neo-classical discreet exterior, ivy-shrouded limestone facade, fortified wrought iron gates, nocturnal allure',
      technicalDirective: "Apply a cinematic twilight glow to the limestone textures; hide the entrance in deep shadows."
    },
    { 
      id: 'gc3', 
      label: 'Regal Atmosphere', 
      description: 'Golden ambient glow and crystal refraction.', 
      value: 'warm golden ambient glow, crystal chandelier refraction, smoke-filled air motes, timeless regal elegance',
      technicalDirective: "Simulate internal light scattering through crystal glass with high refractive indices."
    }
  ]
};
