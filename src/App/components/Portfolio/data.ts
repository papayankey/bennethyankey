// components
import { isSafari } from 'react-device-detect';

export interface ImageInterface {
  src: string;
  title: string;
  alt: string;
  summary: string;
  stack: string;
  demo: string;
  code: string;
}

let images: ImageInterface[];

(async function data() {
  let restCountries: string;
  let bookmark: string;
  let easyBank: string;
  let managed: string;
  let socialDashboard: string;

  if (isSafari) {
    // Safari browsers
    restCountries = (await import('../../assets/images/rest-countries.jpg'))
      .default;
    bookmark = (await import('../../assets/images/bookmark.jpg')).default;
    easyBank = (await import('../../assets/images/easy-bank.jpg')).default;
    managed = (await import('../../assets/images/managed.jpg')).default;
    socialDashboard = (await import('../../assets/images/social-dashboard.jpg'))
      .default;
  } else {
    // Edge, Chrome, Firefox and rest
    restCountries = (await import('../../assets/images/rest-countries.webp'))
      .default;
    bookmark = (await import('../../assets/images/bookmark.webp')).default;
    easyBank = (await import('../../assets/images/easy-bank.webp')).default;
    managed = (await import('../../assets/images/managed.webp')).default;
    socialDashboard = (
      await import('../../assets/images/social-dashboard.webp')
    ).default;
  }

  images = [
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
      summary:
        'Manage your social life with all-in-one social media dashboard.',
      stack: 'HTML5, CSS3 & JavaScript',
      demo:
        'https://papayankey.github.io/frontend-mentor-projects/social-media-dashboard/',
      code:
        'https://github.com/papayankey/frontend-mentor-projects/tree/master/social-media-dashboard',
    },
  ];
})();

export { images };
