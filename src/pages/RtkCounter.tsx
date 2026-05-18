import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store';

import { useI18n } from '../i18n/useI18n';

import './CounterPage.css';
import {
  decrement,
  increment,
  reset,
} from '../store/rtk/counter/rtkCounterSlice';

export default function RtkCounter() {
  const dispatch = useDispatch();
  const { t } = useI18n();

  const count = useSelector((state: RootState) => state.rtkCounter.rtkCounter);

  return (
    <div className="docPage">
      <header className="hero">
        <h1>{t('rtkCounter.title')}</h1>
        <p className="subtitle">{t('rtkCounter.subtitle')}</p>
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
            {t('rtkCounter.reset')}
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
        <h2>{t('rtkCounter.implementation')}</h2>

        <p>{t('rtkCounter.description.part1')}</p>

        <p>{t('rtkCounter.description.part2')}</p>

        <p>{t('rtkCounter.description.part3')}</p>

        <p>{t('rtkCounter.description.part4')}</p>
      </section>
    </div>
  );
}
