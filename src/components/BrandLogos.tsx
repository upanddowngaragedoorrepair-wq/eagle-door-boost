import { BrandMarquee } from './BrandMarquee';

// Brand logos data - add image paths when available
const brands = [
  { name: 'LiftMaster' },
  { name: 'DoorKing' },
  { name: 'Viking' },
  { name: 'Linear' },
  { name: 'FAAC' },
  { name: 'Elite' },
  { name: 'Nice Apollo' },
  { name: 'CellGate' },
  { name: 'DoorBird' },
  { name: 'Eagle' },
];

export function BrandLogos() {
  return <BrandMarquee logos={brands} speed={25} />;
}
