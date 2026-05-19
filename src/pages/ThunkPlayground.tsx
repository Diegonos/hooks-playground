import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../store';

import { fetchUsers } from '../store/rtk/users/usersThunks';

import { useI18n } from '../i18n/useI18n';

import './CounterPage.css';

export default function ThunkPlaygroundPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users,
  );

  const { t } = useI18n();

  return (
    <div className="docPage">
      <header className="hero">
        <h1>{t('thunkPlayground.title')}</h1>

        <p className="subtitle">{t('thunkPlayground.subtitle')}</p>
      </header>

      <section className="counterCard">
        <button
          className="primaryButton"
          onClick={() => dispatch(fetchUsers())}
          disabled={loading}
        >
          {t('thunkPlayground.fetch')}
        </button>

        <button
          className="primaryButton"
          onClick={() => dispatch(fetchUsers({ forceFail: true }))}
          disabled={loading}
          style={{ marginLeft: 12 }}
        >
          {t('thunkPlayground.fetchForce')}
        </button>
      </section>

      {loading && (
        <section className="counterCard">
          <p>{t('thunkPlayground.loading')}</p>
        </section>
      )}

      {error && (
        <section className="counterCard">
          <p>
            {t('thunkPlayground.error')} {error}
          </p>
        </section>
      )}

      {!loading && users.length > 0 && (
        <section className="descriptionSection">
          <h2>{t('thunkPlayground.users')}</h2>

          {users.map((user) => (
            <div key={user.id} className="counterCard">
              <h3>{user.name}</h3>

              <p>{user.email}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
