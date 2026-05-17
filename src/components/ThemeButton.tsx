import { useTheme } from '../theme/useTheme';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
      Theme: {theme}
    </button>
  );
}
