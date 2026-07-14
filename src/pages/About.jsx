import { useEffect } from 'react';
import { CLINIC_INFO } from '../data/constants';
import { updateMetaTags } from '../utils/seo';
import '../styles/about-page.css';

export default function About() {
  useEffect(() => {
    updateMetaTags(
      "About Doctor's Dental Care - Professional Dental Clinic in Savar",
      "Learn about Doctor's Dental Care in Savar. Established to provide comprehensive, affordable, and professional dental care to the community.",
      "about dental clinic, dental care Savar, professional dentists"
    );
  }, []);

  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Doctor's Dental Care</h1>
          <p>Your trusted partner for exceptional dental health</p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Welcome to Doctor's Dental Care</h2>
              <p>
                {CLINIC_INFO.mission}
              </p>
              <p>
                Located at Savar Stand, Doctor's Dental Care is your comprehensive dental solution for all oral health needs. Our state-of-the-art facility combined with experienced BMDC-registered dentists ensures the highest quality of care.
              </p>
              <h3>Our Values</h3>
              <ul className="values-list">
                <li>Excellence in Clinical Care</li>
                <li>Patient-Centered Approach</li>
                <li>Affordable & Transparent Pricing</li>
                <li>Continuous Professional Development</li>
                <li>Community Health Commitment</li>
              </ul>
            </div>

            <div className="about-features">
              <h3>Why We Stand Out</h3>
              <div className="features-list">
                {CLINIC_INFO.whyChooseUs.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-check">✓</div>
                    <div>
                      <h4>{feature}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section clinic-info-section">
        <div className="container">
          <div className="clinic-info-grid">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>{CLINIC_INFO.address}</p>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 11:00 PM</p>
              <p>Sunday: Closed (Emergency Available)</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Contact</h3>
              <p>Phone: {CLINIC_INFO.phone}</p>
              <p>Email: {CLINIC_INFO.email}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
