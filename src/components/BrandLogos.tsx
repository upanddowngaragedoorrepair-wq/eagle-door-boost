import { BrandMarquee } from './BrandMarquee';

// Brand logo imports
import liftmasterLogo from '@/assets/brands/liftmaster.png';
import doorkingLogo from '@/assets/brands/doorking.png';
import vikingLogo from '@/assets/brands/viking.png';
import faacLogo from '@/assets/brands/faac.png';
import eliteLogo from '@/assets/brands/elite.png';
import niceapolloLogo from '@/assets/brands/niceapollo.png';
import cellgateLogo from '@/assets/brands/cellgate.png';
import doorbirdLogo from '@/assets/brands/doorbird.png';
import eagleLogo from '@/assets/brands/eagle.png';

// Brand logos data with images
const brands = [
  { name: 'LiftMaster', image: liftmasterLogo },
  { name: 'DoorKing', image: doorkingLogo },
  { name: 'Viking', image: vikingLogo },
  { name: 'FAAC', image: faacLogo },
  { name: 'Elite', image: eliteLogo },
  { name: 'Nice Apollo', image: niceapolloLogo },
  { name: 'CellGate', image: cellgateLogo },
  { name: 'DoorBird', image: doorbirdLogo },
  { name: 'Eagle', image: eagleLogo },
];

export function BrandLogos() {
  return <BrandMarquee logos={brands} speed={25} />;
}

export default BrandLogos;
