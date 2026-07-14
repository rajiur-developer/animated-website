import { useEffect } from 'react';
import { doctors } from '../data/doctors';
import { updateMetaTags } from '../utils/seo';
import '../styles/team-page.css';

export default function Team() {
  useEffect(() => {
    updateMetaTags(
      "Meet Our Expert Dentists - Doctor's Dental Care",
      "Meet our BMDC-registered dentists with 30+ years of combined experience. Dr. Monjuma Akter, Dr. Sifat Jannati, Dr. A.M. Malik Asrar Ankur.",
      "dentists, dental doctors, BMDC registered, experienced dentists Savar"
    );
  }, []);

  return (
    <main className="team-page">
      <section className="page-hero">
        <div className="container">
          <h1>Meet Our Expert Team</h1>
          <p>BMDC-registered professionals with extensive experience in dental care</p>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {doctors.map(doctor => (
              <div key={doctor.id} className="team-member-card">
                <div className="member-avatar">{doctor.id === 1 ? '👩‍⚕️' : doctor.id === 2 ? '👩‍⚕️' : '👨‍⚕️'}</div>
                
                <h2>{doctor.name}</h2>
                <p className="member-specialty">{doctor.specialty}</p>

                <div className="member-credentials">
                  <div className="credential">
                    <strong>Qualifications</strong>
                    <p>{doctor.qualifications}</p>
                  </div>
                  <div className="credential">
                    <strong>BMDC License</strong>
                    <p>{doctor.bmdc}</p>
                  </div>
                  <div className="credential">
                    <strong>Experience</strong>
                    <p>{doctor.experience}</p>
                  </div>
                  <div className="credential">
                    <strong>Available</strong>
                    <p>{doctor.availability}</p>
                  </div>
                </div>

                <p className="member-bio">{doctor.bio}</p>

                <div className="member-services">
                  <h4>Specializations</h4>
                  <ul>
                    {doctor.services.map((service, idx) => (
                      <li key={idx}>✓ {service}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    const appointmentForm = document.querySelector('[data-section="appointment"]');
                    appointmentForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book with {doctor.name.split(' ')[1]}
                </button>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="team-stats">
            <div className="stat">
              <div className="stat-value">3</div>
              <p>Expert Dentists</p>
            </div>
            <div className="stat">
              <div className="stat-value">30+</div>
              <p>Years Combined Experience</p>
            </div>
            <div className="stat">
              <div className="stat-value">5000+</div>
              <p>Happy Patients</p>
            </div>
            <div className="stat">
              <div className="stat-value">99%</div>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-cta-section">
        <div className="container">
          <div className="team-cta">
            <h2>Ready to Experience Expert Dental Care?</h2>
            <p>Schedule your consultation with our experienced dentists today.</p>
            <button 
              className="btn btn-primary btn-large"
              onClick={() => {
                const appointmentForm = document.querySelector('[data-section="appointment"]');
                appointmentForm?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
