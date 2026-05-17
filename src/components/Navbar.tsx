import { NavLink } from 'react-router-dom';
// import ThemeButton from './ThemeButton';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 12, padding: 12 }}>
      <NavLink to="/">Home</NavLink>

      {/* <ThemeButton /> */}
      <ThemeToggle />
    </nav>
  );
}
