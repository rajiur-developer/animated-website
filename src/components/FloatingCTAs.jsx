import { CLINIC_INFO } from '../data/constants';
import '../styles/floating-ctas.css';

export default function FloatingCTAs() {
  return (
    <div className="floating-ctas">
      <a 
        href={`tel:${CLINIC_INFO.phone}`}
        className="floating-cta-btn call-btn"
        title="Call us"
        aria-label="Call clinic"
      >
        ☎️
      </a>
      <a 
        href={CLINIC_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta-btn whatsapp-btn"
        title="Message on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
