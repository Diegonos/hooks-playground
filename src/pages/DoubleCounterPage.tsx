import useCounter from '../hooks/useCounter';
import { useI18n } from '../i18n/useI18n';
import './CounterPage.css';

function DoubleCounterPage() {
  const { t } = useI18n();
  const {
    count: count1,
    increment: increment1,
    decrement: decrement1,
    reset: reset1,
  } = useCounter(0);
  const {
    count: count2,
    increment: increment2,
    decrement: decrement2,
    reset: reset2,
  } = useCounter(0);

  return (
    <div className="docPage">
      <header className="hero">
        <h1>{t('doubleCounterPage.title')}</h1>
        <p className="subtitle">{t('doubleCounterPage.subtitle')}</p>
      </header>

      <section className="counterCard">
        <div className="counterDisplay">{count1}</div>
        <div className="counterButtons">
          <button type="button" onClick={decrement1} className="primaryButton">
            -
          </button>
          <button type="button" onClick={reset1} className="secondaryButton">
            {t('doubleCounterPage.reset')}
          </button>
          <button type="button" onClick={increment1} className="primaryButton">
            +
          </button>
        </div>
      </section>

      <section className="counterCard">
        <div className="counterDisplay">{count2}</div>
        <div className="counterButtons">
          <button type="button" onClick={decrement2} className="primaryButton">
            -
          </button>
          <button type="button" onClick={reset2} className="secondaryButton">
            {t('doubleCounterPage.reset')}
          </button>
          <button type="button" onClick={increment2} className="primaryButton">
            +
          </button>
        </div>
      </section>

      <section className="codeBlock">
        <div className="codeHeader">{t('doubleCounterPage.hookUsage')}</div>
        <pre>{`const {
    count: count1,
    increment: increment1,
    decrement: decrement1,
    reset: reset1,
} = useCounter(0);

const {
    count: count2,
    increment: increment2,
    decrement: decrement2,
    reset: reset2,
} = useCounter(0);`}</pre>
      </section>
    </div>
  );
}

export default DoubleCounterPage;
