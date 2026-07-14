import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data/constants';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Clinic Info */}
            <div className="footer-section">
              <h4>Doctor's Dental Care</h4>
              <p className="clinic-tagline">{CLINIC_INFO.tagline}</p>
              <div className="social-links">
                <a href={CLINIC_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  f
                </a>
                <a href={CLINIC_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  💬
                </a>
                <a href={CLINIC_INFO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  📷
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h5>Quick Links</h5>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h5>Popular Services</h5>
              <ul>
                <li><a href="/service/root-canal-treatment">Root Canal</a></li>
                <li><a href="/service/teeth-whitening">Teeth Whitening</a></li>
                <li><a href="/service/dental-implants">Dental Implants</a></li>
                <li><a href="/service/complete-dentures">Dentures</a></li>
                <li><a href="/service/braces-treatment">Braces</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h5>Contact Us</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <a href={`tel:${CLINIC_INFO.phone}`}>{CLINIC_INFO.phone}</a>
                </div>
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href={`mailto:${CLINIC_INFO.email}`}>{CLINIC_INFO.email}</a>
                </div>
                <div className="contact-item">
                  <strong>Address:</strong>
                  <p>{CLINIC_INFO.address}</p>
                </div>
                <div className="contact-item">
                  <strong>Hours:</strong>
                  <p>Mon-Sat: 9 AM - 11 PM<br/>Sun: Closed (Emergency: Available)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <p>&copy; 2024 {CLINIC_INFO.name}. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="divider">|</span>
              <a href="#terms">Terms of Service</a>
              <span className="divider">|</span>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
