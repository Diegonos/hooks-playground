import { useTheme } from '../theme/useTheme';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggle" aria-label="Toggle theme">
      <div className="track">
        <div className="thumb" />
      </div>
    </button>
  );
}
