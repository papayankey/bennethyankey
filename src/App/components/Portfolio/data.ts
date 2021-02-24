// detect safari browser
import { isSafari } from 'react-device-detect';

let restCountries = isSafari
  ? '/images/rest-countries.jpg'
  : '/images/rest-countries.webp';
let bookmark = isSafari ? '/images/bookmark.jpg' : '/images/bookmark.webp';
let socialDashboard = isSafari
  ? '/images/social-dashboard.jpg'
  : '/images/social-dashboard.webp';
let managed = isSafari ? '/images/managed.jpg' : '/images/managed.webp';
let easyBank = isSafari ? '/images/easy-bank.jpg' : '/images/easy-bank.webp';

export interface ImageInterface {
  src: string;
  title: string;
  alt: string;
  summary: string;
  stack: string;
  demo: string;
  code: string;
}

const images: ImageInterface[] = [
  {
    src: bookmark,
    title: 'bookmark',
    alt: 'bookmark',
    summary: 'Bookmark helps manage your favourite sites',
    stack: 'React, Typescript & Material-UI',
    demo: 'https://bookmark-landing-page-six-lake.vercel.app/',
    code: 'https://github.com/papayankey/bookmark',
  },
  {
    src: managed,
    title: 'managed',
    alt: 'managed',
    summary: 'Managed makes it simple for teams to plan day-to-day tasks',
    stack: 'React & Material-UI',
    demo: 'https://managed-landing.vercel.app/',
    code: 'https://github.com/papayankey/managed',
  },
  {
    src: restCountries,
    title: 'rest-countries',
    alt: 'rest-countries',
    summary:
      'Get information about countries including population, currency etc',
    stack: 'React & Styled-Component',
    demo: 'https://countries-of-the-world.vercel.app/',
    code: 'https://github.com/papayankey/where-in-the-world',
  },
  {
    src: easyBank,
    title: 'easy-bank',
    alt: 'easy-bank',
    summary:
      'EasyBank account is one-stop-shop for spending, saving etc online',
    stack: 'HTML5, CSS3 & JavaScript',
    demo:
      'https://papayankey.github.io/frontend-mentor-projects/easy-bank-landing-page/',
    code:
      'https://github.com/papayankey/frontend-mentor-projects/tree/master/easy-bank-landing-page',
  },
  {
    src: socialDashboard,
    title: 'social-dashboard',
    alt: 'social-dashboard',
    summary: 'Manage your social life with all-in-one social media dashboard.',
    stack: 'HTML5, CSS3 & JavaScript',
    demo:
      'https://papayankey.github.io/frontend-mentor-projects/social-media-dashboard/',
    code:
      'https://github.com/papayankey/frontend-mentor-projects/tree/master/social-media-dashboard',
  },
];

export { images };
