import { Link } from 'react-router-dom';
import '../styles/not-found-page.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary btn-large">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
