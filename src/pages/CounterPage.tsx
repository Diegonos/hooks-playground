import { Link } from 'react-router-dom';
import useCounter from '../hooks/useCounter';
import { useI18n } from '../i18n/useI18n';
import './CounterPage.css';

function CounterPage() {
  const { count, increment, decrement, reset } = useCounter(0);
  const { t } = useI18n();

  return (
    <div className="docPage">
      <header className="hero">
        <h1>{t('counterPage.title')}</h1>
        <p className="subtitle">{t('counterPage.subtitle')}</p>
      </header>

      <section className="counterCard">
        <div className="counterDisplay">{count}</div>
        <div className="counterButtons">
          <button type="button" onClick={decrement} className="primaryButton">
            -
          </button>
          <button type="button" onClick={reset} className="secondaryButton">
            {t('counterPage.reset')}
          </button>
          <button type="button" onClick={increment} className="primaryButton">
            +
          </button>
        </div>
      </section>

      <section className="codeBlock">
        <div className="codeHeader">{t('counterPage.hookSupport')}</div>
        <pre>{`function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}`}</pre>
      </section>

      <footer className="footerLink">
        <Link to="/">{t('counterPage.backHome')}</Link>
      </footer>
    </div>
  );
}

export default CounterPage;
