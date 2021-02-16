// react
import { Fragment } from 'react';

// components
import { Link } from 'react-scroll';

// constants
const navLinks = ['home', 'about', 'skills', 'portfolio'];

interface NavLinksProps {
  setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen?: boolean;
  active: string;
  className: string;
}

function NavLinks(props: NavLinksProps) {
  const { active, className, menuOpen, setMenuOpen } = props;

  return (
    <Fragment>
      {navLinks.map((link, idx) => {
        return (
          <Link
            key={idx}
            activeClass={active}
            to={link}
            smooth={true}
            spy={true}
            offset={-150}
            className={className}
            onClick={() => menuOpen && setMenuOpen?.(prev => !prev)}
          >
            {link}
          </Link>
        );
      })}
    </Fragment>
  );
}

export { NavLinks };
