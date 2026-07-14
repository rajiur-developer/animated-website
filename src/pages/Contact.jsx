import { useEffect } from 'react';
import { CLINIC_INFO } from '../data/constants';
import { updateMetaTags } from '../utils/seo';
import '../styles/contact-page.css';

export default function Contact() {
  useEffect(() => {
    updateMetaTags(
      "Contact Doctor's Dental Care - Savar",
      "Contact Doctor's Dental Care for dental appointments and inquiries. Location: Savar Stand, Savar, Dhaka. Phone: +8801973703423",
      "contact dental clinic, dental clinic phone, dental clinic address"
    );
  }, []);

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Doctor's Dental Care</p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p><a href={`tel:${CLINIC_INFO.phone}`}>{CLINIC_INFO.phone}</a></p>
                  <p className="text-small">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p><a href={`mailto:${CLINIC_INFO.email}`}>{CLINIC_INFO.email}</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h3>Hours</h3>
                  <p><strong>Monday - Saturday</strong><br/>9:00 AM - 11:00 PM</p>
                  <p><strong>Sunday</strong><br/>Closed (Emergency Available)</p>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href={CLINIC_INFO.social.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a href={CLINIC_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  <a href={CLINIC_INFO.social.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Map & Booking */}
            <div className="contact-right">
              <div className="map-container">
                <div className="map-placeholder">
                  <p>📍 Savar Stand, Savar, Dhaka</p>
                  <p>Click to view on Google Maps</p>
                  <a href={CLINIC_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                    View Map
                  </a>
                </div>
              </div>

              <div className="booking-card">
                <h3>Book Appointment</h3>
                <p>Ready to visit us? Schedule your appointment now.</p>
                <button 
                  className="btn btn-primary btn-large"
                  onClick={() => {
                    const appointmentForm = document.querySelector('[data-section="appointment"]');
                    appointmentForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
