import { useState } from 'react';
import { generalFaqs } from '../data/faqs';
import '../styles/faq-section.css';

export default function FAQSection() {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services and clinic</p>
        </div>

        <div className="faq-container">
          {generalFaqs.map(faq => (
            <div 
              key={faq.id} 
              className={`faq-item ${openFaqs[faq.id] ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaqs[faq.id]}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              
              {openFaqs[faq.id] && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="mailto:info@doctorsdentalcare.com" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
