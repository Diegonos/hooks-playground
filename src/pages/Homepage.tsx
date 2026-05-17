import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { useI18n } from '../i18n/useI18n';
import './Homepage.css';

function Homepage() {
  const { t } = useI18n();

  return (
    <div className="docPage">
      <header className="hero">
        <h1>{t('homepage.title')}</h1>
        <p className="subtitle">{t('homepage.subtitle')}</p>
      </header>

      <section className="grid">
        <Card>
          <h2>{t('homepage.reactPlayground')}</h2>
          <p>{t('homepage.reactPlaygroundDesc')}</p>
        </Card>

        <Card>
          <h2>{t('homepage.routing')}</h2>
          <p>{t('homepage.routingDesc')}</p>
        </Card>

        <Card>
          <h2>{t('homepage.counterHook')}</h2>
          <p>{t('homepage.counterHookDesc')}</p>
          <Link to="/counter">{t('homepage.goToCounter')}</Link>
        </Card>
      </section>

      <section className="codeBlock">
        <div className="codeHeader">{t('homepage.quickSnippet')}</div>
        <pre>
          {`function hello() {
  console.log("Hello playground 🚀");
}`}
        </pre>
      </section>
    </div>
  );
}

export default Homepage;
