import { CLINIC_INFO } from '../data/constants';
import '../styles/why-choose-us.css';

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Doctor's Dental Care?</h2>
          <p>Your trusted partner for exceptional dental health and beautiful smiles</p>
        </div>

        <div className="features-grid">
          {CLINIC_INFO.whyChooseUs.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {getFeatureIcon(index)}
              </div>
              <h3>{feature}</h3>
              <p>{getFeatureDescription(index)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getFeatureIcon(index) {
  const icons = [
    '👨‍⚕️',
    '🔧',
    '🧼',
    '💰',
    '⏰',
    '😊',
    '🌟',
    '📍'
  ];
  return icons[index] || '✓';
}

function getFeatureDescription(index) {
  const descriptions = [
    'All our dentists are registered with BMDC with extensive experience',
    'Latest dental equipment and advanced treatment techniques',
    'Strict international hygiene and sterilization protocols',
    'Transparent pricing with competitive rates',
    'Open 7 days a week with 24/7 emergency services',
    'Compassionate team dedicated to patient comfort',
    'Comprehensive range of general and specialized services',
    'Located at convenient Savar Stand location'
  ];
  return descriptions[index] || '';
}
