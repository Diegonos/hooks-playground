import Card from '../components/Card';
import './Homepage.css';

function Homepage() {
  return (
    <div className="docPage">
      <header className="hero">
        <h1>Home Page</h1>
        <p className="subtitle">
          Welcome to the playground 🚀 — a space for experimenting with React,
          hooks, routing and UI patterns.
        </p>
      </header>

      <section className="grid">
        <Card>
          <h2>⚛️ React Playground</h2>
          <p>Test hooks, components and patterns without constraints.</p>
        </Card>

        <Card>
          <h2>🧭 Routing</h2>
          <p>Navigate between pages using React Router v6.</p>
        </Card>

        <Card>
          <h2>🎨 UI Experiments</h2>
          <p>Light/Dark theme toggle and layout experiments.</p>
        </Card>
      </section>

      <section className="codeBlock">
        <div className="codeHeader">Quick snippet</div>
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
