// portfolio images
import restCountries from '../../assets/images/rest-countries.webp';
import bookmark from '../../assets/images/bookmark.webp';
import easyBank from '../../assets/images/easy-bank.webp';
import managed from '../../assets/images/managed.webp';
import socialDashboard from '../../assets/images/social-dashboard.webp';

export interface ImageInterface {
  src: string;
  title: string;
  alt: string;
  summary: string;
  stack: string;
  demo: string;
  code: string;
}

// images
const images: ImageInterface[] = [
  {
    src: bookmark,
    title: 'bookmark',
    alt: 'bookmark',
    summary: 'Bookmark helps manage your favourite sites',
    stack: 'React, Typescript & Material-UI',
    demo: 'https://bookmark-landing-page-six-lake.vercel.app/',
    code: 'https://github.com/iambenbright/bookmark',
  },
  {
    src: managed,
    title: 'managed',
    alt: 'managed',
    summary: 'Managed makes it simple for teams to plan day-to-day tasks',
    stack: 'React & Material-UI',
    demo: 'https://managed-landing.vercel.app/',
    code: 'https://github.com/iambenbright/managed',
  },
  {
    src: restCountries,
    title: 'rest-countries',
    alt: 'rest-countries',
    summary:
      'Get information about countries including population, currency etc',
    stack: 'React & Styled-Component',
    demo: 'https://countries-of-the-world.vercel.app/',
    code: 'https://github.com/iambenbright/where-in-the-world',
  },
  {
    src: easyBank,
    title: 'easy-bank',
    alt: 'easy-bank',
    summary:
      'EasyBank account is one-stop-shop for spending, saving etc online',
    stack: 'HTML5, CSS3 & JavaScript',
    demo:
      'https://iambenbright.github.io/frontend-mentor-projects/easy-bank-landing-page/',
    code:
      'https://github.com/iambenbright/frontend-mentor-projects/tree/master/easy-bank-landing-page',
  },
  {
    src: socialDashboard,
    title: 'social-dashboard',
    alt: 'social-dashboard',
    summary: 'Manage your social life with all-in-one social media dashboard.',
    stack: 'HTML5, CSS3 & JavaScript',
    demo:
      'https://iambenbright.github.io/frontend-mentor-projects/social-media-dashboard/',
    code:
      'https://github.com/iambenbright/frontend-mentor-projects/tree/master/social-media-dashboard',
  },
];

export { images };
