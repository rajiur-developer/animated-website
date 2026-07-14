import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data/constants';
import '../styles/header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Team', path: '/team' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🦷</span>
          <span className="logo-text">{CLINIC_INFO.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {menuItems.map(item => (
            <Link key={item.path} to={item.path} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="header-cta">
          <a href={`tel:${CLINIC_INFO.phone}`} className="btn btn-outline btn-small">
            Call Now
          </a>
          <button className="btn btn-primary btn-small" onClick={() => {
            const appointmentForm = document.querySelector('[data-section="appointment"]');
            appointmentForm?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          {menuItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="nav-link-mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-cta">
            <a href={`tel:${CLINIC_INFO.phone}`} className="btn btn-outline">
              Call Now
            </a>
            <button className="btn btn-primary" onClick={() => {
              setMobileMenuOpen(false);
              const appointmentForm = document.querySelector('[data-section="appointment"]');
              appointmentForm?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Book Appointment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
