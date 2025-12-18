
import { StyleManifesto } from '../types';

export const distortionManifesto: StyleManifesto = {
  id: 'distortion',
  name: 'Geometric Distortion',
  icon: 'GD',
  philosophy: "The image is a coordinate system. This module uses mathematical algorithms (Poincaré Disk, Riemannian Manifolds) to warp the latent space. It explores the violation of the Parallel Postulate and the defiance of Euclidean physics.",
  technicalRules: [
    "Parallel Violation: Converge parallel lines at impossible angles (Elliptic) or diverge them (Hyperbolic).",
    "Triangle Deficit: Interior angles must sum to < 180 (Hyperbolic) or > 180 (Elliptic) visually.",
    "Recursion: Objects must contain Menger Sponge or Mandelbrot-level structural complexity.",
    "Anisotropic stretching of light along non-linear vector fields.",
    "Enforce Voronoi tesselation on fractured or mosaic surfaces."
  ],
  options: [
    { 
      id: 'gd1', 
      label: 'Hyperbolic Deficit', 
      description: 'Warped space where parallel lines diverge.', 
      value: 'Poincaré disk geometry, hyperbolic spatial warping, diverging parallel lines, (non-euclidean:1.8)',
      technicalDirective: "Apply a negative curvature to all structural geodesics; warp focal points toward the center."
    },
    { 
      id: 'gd2', 
      label: 'Riemannian Manifold', 
      description: 'Curved space-time architectural distortion.', 
      value: 'Riemannian manifold curvature, elliptic geometry, no parallel lines, spherical distortion',
      technicalDirective: "Warp the Z-axis by 45 degrees while maintaining vertical parallel lines; simulate positive curvature."
    },
    { 
      id: 'gd4', 
      label: 'Voronoi Fracture', 
      description: 'Cell-based mathematical spatial subdivision.', 
      value: 'Voronoi tesselation, shard-like spatial division, mathematical cell structure, crystalline fracturing',
      technicalDirective: "Fragment the background into 50 distinct Voronoi cells with high-specular boundaries."
    },
    { 
      id: 'gd5', 
      label: 'Triangle Excess', 
      description: 'Warping where angles exceed 180 degrees.', 
      value: 'spherical geometry, triangle angle excess, great circle geodesics, (curvature:1.5)',
      technicalDirective: "Curve all straight edges into great-circle arcs; inflate volumes outward."
    }
  ]
};
