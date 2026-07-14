import { CLINIC_INFO } from '../data/constants';
import '../styles/hero-section.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{CLINIC_INFO.tagline}</h1>
          <p>Experience compassionate dental care from BMDC-registered experts. Available 7 days a week for your dental health needs.</p>
          <div className="hero-cta">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => {
                const appointmentForm = document.querySelector('[data-section="appointment"]');
                appointmentForm?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Appointment
            </button>
            <a href={`tel:${CLINIC_INFO.phone}`} className="btn btn-outline btn-large">
              Call Now: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-placeholder">
            🦷
          </div>
        </div>
      </div>
    </section>
  );
}
