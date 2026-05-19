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
        <NavLink
          to="/legacy-counter"
          className={({ isActive }) =>
            isActive ? 'navLink active' : 'navLink'
          }
        >
          {t('navbar.legacyCounter')}
        </NavLink>
        <NavLink
          to="/rtk-counter"
          className={({ isActive }) =>
            isActive ? 'navLink active' : 'navLink'
          }
        >
          {t('navbar.rtkCounter')}
        </NavLink>
        <NavLink
          to="/thunk-playground"
          className={({ isActive }) =>
            isActive ? 'navLink active' : 'navLink'
          }
        >
          {t('navbar.thunkPlayground')}
        </NavLink>
      </div>

      <div className="navRight">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
