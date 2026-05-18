import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store';

import {
  increment,
  decrement,
  reset,
} from '../store/legacy/counter/counter.actions';

import { useI18n } from '../i18n/useI18n';

import './CounterPage.css';

export default function LegacyCounter() {
  const dispatch = useDispatch();
  const { t } = useI18n();

  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="docPage">
      <header className="hero">
        <h1>{t('legacyCounter.title')}</h1>

        <p className="subtitle">{t('legacyCounter.subtitle')}</p>
      </header>

      <section className="counterCard">
        <div className="counterDisplay">{count}</div>

        <div className="counterButtons">
          <button
            type="button"
            onClick={() => dispatch(decrement())}
            className="primaryButton"
          >
            -
          </button>

          <button
            type="button"
            onClick={() => dispatch(reset())}
            className="secondaryButton"
          >
            {t('legacyCounter.reset')}
          </button>

          <button
            type="button"
            onClick={() => dispatch(increment())}
            className="primaryButton"
          >
            +
          </button>
        </div>
      </section>

      <section className="descriptionSection">
        <h2>{t('legacyCounter.implementation')}</h2>

        <p>{t('legacyCounter.description.part1')}</p>

        <p>{t('legacyCounter.description.part2')}</p>

        <p>{t('legacyCounter.description.part3')}</p>

        <p>{t('legacyCounter.description.part4')}</p>
      </section>
    </div>
  );
}
