import { testimonials, testimonialStats } from '../data/testimonials';
import '../styles/testimonials-section.css';

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Patient Testimonials</h2>
          <p>What our happy patients say about Doctor's Dental Care</p>
        </div>

        {/* Stats */}
        <div className="testimonial-stats">
          <div className="stat-item">
            <div className="stat-number">⭐ {testimonialStats.averageRating}</div>
            <p>Average Rating</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">{testimonialStats.totalReviews}+</div>
            <p>Patient Reviews</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <p>Satisfaction Rate</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-stars">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <div className="testimonial-service">
                  {testimonial.service}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span className="testimonial-date">
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <p>Join thousands of satisfied patients who trust Doctor's Dental Care</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const appointmentForm = document.querySelector('[data-section="appointment"]');
              appointmentForm?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Your Visit Today
          </button>
        </div>
      </div>
    </section>
  );
}
