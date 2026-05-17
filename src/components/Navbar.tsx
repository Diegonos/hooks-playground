import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useI18n } from '../i18n/useI18n';

export default function Navbar() {
  const { t } = useI18n();

  return (
    <nav className="navbar">
      <div className="navLeft">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navLink active' : 'navLink'
          }
        >
          {t('navbar.home')}
        </NavLink>

        <NavLink
          to="/counter"
          className={({ isActive }) =>
            isActive ? 'navLink active' : 'navLink'
          }
        >
          {t('navbar.counter')}
        </NavLink>
        <NavLink
          to="/double-counter"
          className={({ isActive }) =>
            isActive ? 'navLink active' : 'navLink'
          }
        >
          {t('navbar.doubleCounter')}
        </NavLink>
      </div>

      <div className="navRight">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
