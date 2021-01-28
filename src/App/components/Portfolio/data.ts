// portfolio images
import restCountries from '../../assets/images/rest-countries.png';
import bookmark from '../../assets/images/bookmark.png';
import easyBank from '../../assets/images/easy-bank.png';
import managed from '../../assets/images/managed.png';
import socialDashboard from '../../assets/images/social-dashboard.png';

interface ImageData {
  src: string;
  title: string;
  alt: string;
}

// images
const images: ImageData[] = [
  {
    src: bookmark,
    title: 'bookmark',
    alt: 'bookmark',
  },
  {
    src: managed,
    title: 'managed',
    alt: 'managed',
  },
  {
    src: restCountries,
    title: 'rest-countries',
    alt: 'rest-countries',
  },
  {
    src: easyBank,
    title: 'easy-bank',
    alt: 'easy-bank',
  },
  {
    src: socialDashboard,
    title: 'social-dashboard',
    alt: 'social-dashboard',
  },
];

export { images };
