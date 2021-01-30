// portfolio images
import restCountries from '../../assets/images/rest-countries.png';
import bookmark from '../../assets/images/bookmark.png';
import easyBank from '../../assets/images/easy-bank.png';
import managed from '../../assets/images/managed.png';
import socialDashboard from '../../assets/images/social-dashboard.png';

export interface ImageInterface {
  src: string;
  title: string;
  alt: string;
  summary: string;
}

// images
const images: ImageInterface[] = [
  {
    src: bookmark,
    title: 'bookmark',
    alt: 'bookmark',
    summary:
      'Bookmark helps manage your favourite sites. A landing page created with React, Typescript & Material-UI',
  },
  {
    src: managed,
    title: 'managed',
    alt: 'managed',
    summary:
      'Managed makes it simple for teams to plan day-to-day tasks. A landing page created with React & Material-UI',
  },
  {
    src: restCountries,
    title: 'rest-countries',
    alt: 'rest-countries',
    summary: '',
  },
  {
    src: easyBank,
    title: 'easy-bank',
    alt: 'easy-bank',
    summary:
      'EasyBank account is one-stop-shop for spending, saving etc online. A landing page created with HTML5, CSS3 & JavaScript ',
  },
  {
    src: socialDashboard,
    title: 'social-dashboard',
    alt: 'social-dashboard',
    summary:
      'Manage your social life with all-in-one social media dashboard. A web app created with HTML5, CSS3 & JavaScript',
  },
];

export { images };
