import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Navigation = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={getNavLinkClassNames} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/movies" end>
          Movies
        </NavLink>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Navigation;
