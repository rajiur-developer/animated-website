import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import { updateMetaTags, getServiceSchema, addStructuredData } from '../utils/seo';
import '../styles/services-page.css';

export default function Services() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryId = searchParams.get('category');

  useEffect(() => {
    updateMetaTags(
      "Dental Services - Doctor's Dental Care",
      "Complete range of dental services including root canal, teeth whitening, implants, dentures, braces and more at our Savar clinic.",
      "dental services, root canal, teeth whitening, dental implants, dentures, braces, cosmetic dentistry"
    );
  }, []);

  useEffect(() => {
    if (categoryId) {
      const category = serviceCategories.find(cat => cat.id === parseInt(categoryId));
      setSelectedCategory(category || null);
    }
  }, [categoryId]);

  return (
    <main className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Dental Services</h1>
          <p>Comprehensive dental treatments for all your oral health needs</p>
        </div>
      </section>

      <section className="section services-listing">
        <div className="container">
          <div className="services-layout">
            {/* Categories Sidebar */}
            <aside className="services-sidebar">
              <h3>Service Categories</h3>
              <div className="categories-list">
                <button
                  className={`category-btn ${!selectedCategory ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Services
                </button>
                {serviceCategories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory?.id === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </aside>

            {/* Services Grid */}
            <div className="services-main">
              {(!selectedCategory ? serviceCategories : [selectedCategory]).map(category => (
                <div key={category.id} className="category-section">
                  <h2>{category.name}</h2>
                  <p className="category-description">{category.description}</p>

                  <div className="services-sub-grid">
                    {category.subServices.map(service => (
                      <Link
                        key={service.id}
                        to={`/service/${service.slug}`}
                        className="service-item"
                      >
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                        <div className="service-price">
                          <span>Starting from</span>
                          <strong>{service.price}</strong>
                        </div>
                        <div className="service-link">Learn more →</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta">
            <h2>Need a Consultation?</h2>
            <p>Book an appointment with our expert dentists to discuss your specific dental needs.</p>
            <button 
              className="btn btn-primary btn-large"
              onClick={() => {
                const appointmentForm = document.querySelector('[data-section="appointment"]');
                appointmentForm?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
