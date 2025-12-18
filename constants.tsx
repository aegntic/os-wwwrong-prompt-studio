
import { StyleManifesto, PromptTemplate } from './types';
import { renStimpyManifesto } from './styles/renStimpy';
import { studioLightingManifesto } from './styles/studioLighting';
import { madMagManifesto } from './styles/madMag';
import { luxuryMaterialsManifesto } from './styles/luxuryMaterials';
import { masterShadingManifesto } from './styles/masterShading';
import { opticalLensManifesto } from './styles/opticalLens';
import { architectureManifesto } from './styles/architecture';
import { darkFantasyManifesto } from './styles/darkFantasy';
import { vhsManifesto } from './styles/vhs';
import { vaultManifesto } from './styles/vault';
import { jewelryManifesto } from './styles/jewelry';
import { fineArtManifesto } from './styles/fineArt';
import { porcelainManifesto } from './styles/porcelain';
import { hauteCoutureManifesto } from './styles/hauteCouture';
import { botanicalManifesto } from './styles/botanical';
import { automotiveManifesto } from './styles/automotive';
import { cosmeticManifesto } from './styles/cosmetic';
import { horologyManifesto } from './styles/horology';
import { gastronomyManifesto } from './styles/gastronomy';
import { interiorsManifesto } from './styles/interiors';
import { typographyManifesto } from './styles/typography';
import { sculptureManifesto } from './styles/sculpture';
import { fragranceManifesto } from './styles/fragrance';
import { textilesManifesto } from './styles/textiles';
import { characterDesignManifesto } from './styles/characterDesign';
import { yachtingManifesto } from './styles/yachting';
import { leatherManifesto } from './styles/leather';
import { colorTheoryManifesto } from './styles/colorTheory';
import { compositionManifesto } from './styles/composition';
import { animation3dManifesto } from './styles/animation3d';
import { horrorManifesto } from './styles/horror';
import { distortionManifesto } from './styles/distortion';
import { hyperAestheticsManifesto } from './styles/hyperAesthetics';
import { gentlemansClubManifesto } from './styles/gentlemansClub';
import { opticalDreadManifesto } from './styles/opticalDread';

export const STYLE_MANIFESTOS: StyleManifesto[] = [
  hyperAestheticsManifesto,
  opticalDreadManifesto,
  horrorManifesto,
  distortionManifesto,
  gentlemansClubManifesto,
  studioLightingManifesto,
  luxuryMaterialsManifesto,
  animation3dManifesto,
  jewelryManifesto,
  hauteCoutureManifesto,
  porcelainManifesto,
  botanicalManifesto,
  automotiveManifesto,
  cosmeticManifesto,
  horologyManifesto,
  gastronomyManifesto,
  interiorsManifesto,
  textilesManifesto,
  fineArtManifesto,
  sculptureManifesto,
  leatherManifesto,
  colorTheoryManifesto,
  compositionManifesto,
  typographyManifesto,
  fragranceManifesto,
  yachtingManifesto,
  characterDesignManifesto,
  renStimpyManifesto,
  madMagManifesto,
  architectureManifesto,
  darkFantasyManifesto,
  masterShadingManifesto,
  opticalLensManifesto,
  vhsManifesto,
  vaultManifesto
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    title: "Abyssal Banquet",
    prompt: "Cinematic horror still: opulent dining room in flickering light, ethereal woman in antique gown at table's end, distorted reflections, oppressive dread, chiaroscuro desaturated tones",
    enhancements: ['hr1', 'hr3', 'l2'],
    manifestoId: 'horror',
    type: 'image'
  },
  {
    title: "The Non-Euclidean Hall",
    prompt: "Video: Slow tracking down decaying hallway with converging walls creating optical illusion, flickering lights distorting perspective, mounting perceptual unease, vintage grain",
    enhancements: ['gd1', 'od3', 'vhs1'],
    manifestoId: 'distortion',
    type: 'video'
  },
  {
    title: "Psychological Study",
    prompt: "Photorealistic horror: Dark study with towering shelves, mirror showing distorted face, single lamp casting shadows, malevolent whispers implied, shadowy figure in armchair",
    enhancements: ['hr1', 'od1', 'ct1'],
    manifestoId: 'horror',
    type: 'image'
  },
  {
    title: "Moonlit Estate",
    prompt: "Hyper-realistic moonlit estate in fog, glowing windows flickering unnaturally, pale figure behind curtain, overwhelming dread, chiaroscuro moonlight, dolly zoom to entrance",
    enhancements: ['gc2', 'hr3', 'c1'],
    manifestoId: 'gentlemansclub',
    type: 'image'
  },
  {
    title: "Mirror Dissonance",
    prompt: "Cinematic still: Dim Victorian bathroom, ornate mirror showing distorted elongated reflection of woman in gown, asynchronous reflection movement, chiaroscuro shadows",
    enhancements: ['od1', 'c2', 'ct1'],
    manifestoId: 'opticaldread',
    type: 'image'
  },
  {
    title: "Winning Barbie",
    prompt: "Supernatural flawless beauty, petite frame, extreme impossible hourglass, porcelain skin, high-fashion fully-clothed gown, studio lighting",
    enhancements: ['hp1', 'hp2', 'l2'],
    manifestoId: 'hyperaesthetics',
    type: 'image'
  }
];

export const LOADING_MESSAGES = [
  "Diverging Mirror Reflections...",
  "Violating Parallel Postulates...",
  "Calculating Riemannian Curvature...",
  "Applying Subsurface Fluorescence...",
  "Calculating Perceptual Dissonance...",
  "Architecting Clandestine Opulence...",
  "Enforcing Technical Rulesets...",
  "Reading Style Manifestos...",
  "Simulating Refractive Dispersion..."
];
