import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={getNavLinkClassNames}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getNavLinkClassNames}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
