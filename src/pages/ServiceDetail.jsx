import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import { getFaqsByService } from '../data/faqs';
import { updateMetaTags, getServiceSchema, getFaqSchema, addStructuredData } from '../utils/seo';
import '../styles/service-detail-page.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const faqs = getFaqsByService(slug);

  useEffect(() => {
    if (!service) return;

    const title = `${service.name} at Doctor's Dental Care - Expert Treatment in Savar`;
    const description = `${service.name} services at Doctor's Dental Care. Expert BMDC-registered dentists in Savar. ${service.description}`;

    updateMetaTags(title, description, `${service.name}, ${service.category}, dental treatment`);
    addStructuredData(getServiceSchema(service, service.category));
    addStructuredData(getFaqSchema(faqs));

    window.scrollTo(0, 0);
  }, [service, slug]);

  if (!service) {
    return (
      <main className="service-detail-page">
        <section className="page-hero">
          <div className="container">
            <h1>Service Not Found</h1>
            <p>Sorry, the service you're looking for doesn't exist.</p>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <Link to="/services" className="breadcrumb">
            ← Services
          </Link>
          <h1>{service.name}</h1>
          <p className="service-category">{service.category}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section service-content">
        <div className="container">
          <div className="content-layout">
            {/* Main Article */}
            <article className="main-article">
              <section className="article-section">
                <h2>About This Service</h2>
                <p>{service.description}</p>
                <p>
                  At Doctor's Dental Care, we provide expert {service.name} services with state-of-the-art equipment and experienced BMDC-registered dentists. Our approach combines modern techniques with compassionate patient care to ensure the best possible outcomes.
                </p>
              </section>

              <section className="article-section">
                <h2>Benefits of {service.name}</h2>
                <ul className="benefits-list">
                  <li>Professional expertise and experience</li>
                  <li>Advanced dental technology and equipment</li>
                  <li>Customized treatment plans</li>
                  <li>Comfortable and sterile environment</li>
                  <li>Affordable and transparent pricing</li>
                  <li>Follow-up care and support</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>The Procedure</h2>
                <p>
                  {service.name} typically involves a comprehensive examination, personalized treatment planning, and precise execution using modern techniques. Our dentists will explain each step of the process and address any concerns you may have before proceeding.
                </p>
                <div className="procedure-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div>
                      <h4>Consultation</h4>
                      <p>Initial assessment and discussion of your needs</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div>
                      <h4>Treatment Planning</h4>
                      <p>Custom plan tailored to your specific situation</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div>
                      <h4>Treatment</h4>
                      <p>Professional execution of the planned treatment</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div>
                      <h4>Follow-up</h4>
                      <p>Ongoing care and maintenance recommendations</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="article-section">
                <h2>Recovery & Aftercare</h2>
                <p>
                  Most patients can resume normal activities immediately after {service.name}. We provide detailed post-treatment care instructions to ensure optimal healing and long-term success. Regular follow-up appointments help us monitor your progress and address any concerns.
                </p>
              </section>

              <section className="article-section">
                <h2>Cost & Pricing</h2>
                <p>
                  <strong>Starting from: {service.price}</strong>
                </p>
                <p>
                  The exact cost depends on various factors including complexity, materials used, and individual needs. We provide transparent pricing and discuss all costs during your consultation. We accept multiple payment methods and work with insurance providers when applicable.
                </p>
              </section>

              {/* FAQ Section */}
              <section className="article-section">
                <h2>Frequently Asked Questions</h2>
                <div className="service-faqs">
                  {faqs.map(faq => (
                    <div key={faq.id} className="service-faq-item">
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="article-section">
                <h2>Why Choose Doctor's Dental Care?</h2>
                <ul className="benefits-list">
                  <li>BMDC-registered and highly qualified dentists</li>
                  <li>15+ years of combined experience</li>
                  <li>Latest dental technology and equipment</li>
                  <li>Strict hygiene and sterilization protocols</li>
                  <li>Compassionate, patient-centered approach</li>
                  <li>Competitive and transparent pricing</li>
                  <li>Available 7 days a week</li>
                  <li>24/7 emergency services</li>
                </ul>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="service-sidebar">
              <div className="sidebar-card">
                <h3>Quick Info</h3>
                <div className="info-item">
                  <strong>Service:</strong>
                  <p>{service.name}</p>
                </div>
                <div className="info-item">
                  <strong>Category:</strong>
                  <p>{service.category}</p>
                </div>
                <div className="info-item">
                  <strong>Price Range:</strong>
                  <p>{service.price}</p>
                </div>
              </div>

              <div className="sidebar-card cta-card">
                <h3>Ready for Treatment?</h3>
                <p>Schedule your appointment with our expert dentists.</p>
                <button 
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    const appointmentForm = document.querySelector('[data-section="appointment"]');
                    appointmentForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Appointment
                </button>
                <a href="tel:+8801973703423" className="btn btn-outline btn-block">
                  Call Us
                </a>
              </div>

              <div className="sidebar-card">
                <h3>Related Services</h3>
                <ul className="related-services">
                  {/* You can add related services logic here */}
                  <li><Link to="/services">View All Services</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <div className="service-cta">
            <h2>Still Have Questions?</h2>
            <p>Contact us for a free consultation and learn how {service.name} can benefit you.</p>
            <a href="tel:+8801973703423" className="btn btn-primary btn-large">
              Call Us Now: +8801973703423
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
