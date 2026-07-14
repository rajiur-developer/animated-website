import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import '../styles/doctor-cards.css';

export default function DoctorCards() {
  return (
    <section className="section doctor-cards-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Expert Dentists</h2>
          <p>BMDC registered professionals with extensive experience in dental care</p>
        </div>

        <div className="doctors-grid">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-avatar">{doctor.id === 1 ? '👩‍⚕️' : doctor.id === 2 ? '👩‍⚕️' : '👨‍⚕️'}</div>
              <h3>{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <div className="doctor-info">
                <div className="info-item">
                  <strong>Qualifications:</strong>
                  <span>{doctor.qualifications}</span>
                </div>
                <div className="info-item">
                  <strong>BMDC License:</strong>
                  <span>{doctor.bmdc}</span>
                </div>
                <div className="info-item">
                  <strong>Experience:</strong>
                  <span>{doctor.experience}</span>
                </div>
                <div className="info-item">
                  <strong>Available:</strong>
                  <span>{doctor.availability}</span>
                </div>
              </div>
              <p className="doctor-bio">{doctor.bio}</p>
              <div className="doctor-services">
                {doctor.services.slice(0, 3).map((service, idx) => (
                  <span key={idx} className="service-tag">{service}</span>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary btn-small">
                Book with {doctor.name.split(' ')[1]}
              </Link>
            </div>
          ))}
        </div>

        <div className="doctors-cta">
          <p>Ready to meet your dentist?</p>
          <Link to="/team" className="btn btn-primary">
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
