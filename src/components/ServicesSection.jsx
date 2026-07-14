import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import '../styles/services-section.css';

export default function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Dental Services</h2>
          <p>Comprehensive range of dental treatments for all your oral health needs</p>
        </div>

        <div className="services-grid">
          {serviceCategories.map(category => (
            <Link 
              key={category.id} 
              to={`/services?category=${category.id}`}
              className="service-card"
            >
              <div className="service-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <div className="service-count">
                {category.subServices.length} treatments
              </div>
              <div className="service-arrow">→</div>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <p>Need a specific treatment? </p>
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
