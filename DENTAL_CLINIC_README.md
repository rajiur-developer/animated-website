# Doctor's Dental Care - Website

A professional, modern dental clinic website built with React 19, Vite, and React Router. Fully responsive, SEO-optimized, and designed for conversion.

## Project Overview

Doctor's Dental Care is a comprehensive dental clinic website for Savar, Bangladesh, featuring:

- **7 Main Pages**: Home, Services, Service Details, Team, About, Contact, and 404 Page
- **28 Service Listings**: Organized into 9 categories with detailed descriptions
- **Appointment Booking**: Integrated appointment form on home page
- **Expert Team**: Profiles of 3 BMDC-registered dentists
- **Patient Testimonials**: Real patient reviews and ratings
- **SEO Optimization**: Schema markup, meta tags, and semantic HTML
- **Mobile-Responsive**: Works perfectly on all devices
- **Professional Design**: Modern UI with professional blue color scheme

## Tech Stack

- **React 19.2.4** - UI framework
- **React Router DOM** - Multi-page navigation
- **Vite 8.0.1** - Build tool
- **Vanilla CSS** - Custom styling with CSS variables for theming
- **Node.js** - Runtime environment

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── FloatingCTAs.jsx
│   ├── HeroSection.jsx
│   ├── WhyChooseUs.jsx
│   ├── ServicesSection.jsx
│   ├── DoctorCards.jsx
│   ├── TestimonialsSection.jsx
│   ├── AppointmentForm.jsx
│   └── FAQSection.jsx
├── pages/               # Page components for routing
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Team.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── data/                # Static data files
│   ├── doctors.js
│   ├── services.js
│   ├── testimonials.js
│   ├── faqs.js
│   └── constants.js
├── styles/              # CSS stylesheets
│   ├── global.css
│   ├── header.css
│   ├── footer.css
│   ├── floating-ctas.css
│   ├── hero-section.css
│   ├── services-section.css
│   ├── doctor-cards.css
│   ├── testimonials-section.css
│   ├── appointment-form.css
│   ├── faq-section.css
│   ├── services-page.css
│   ├── team-page.css
│   ├── about-page.css
│   ├── contact-page.css
│   ├── service-detail-page.css
│   └── not-found-page.css
├── utils/               # Utility functions
│   └── seo.js          # SEO and schema markup utilities
├── App.jsx             # Main app component with routing
└── main.jsx            # Entry point

public/                 # Static assets
index.html             # HTML template
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Key Features

### Home Page
- Hero banner with call-to-action buttons
- "Why Choose Us" section with 8 key benefits
- Comprehensive services grid (9 categories)
- Expert dentist profiles
- Patient testimonials with ratings
- Appointment booking form
- FAQ accordion
- Contact information

### Services Pages
- **Services Listing**: Filterable by category with sidebar navigation
- **Service Detail**: Individual pages for each of 28 services with:
  - Service description and benefits
  - Procedure steps
  - Recovery information
  - Pricing details
  - Related FAQs
  - Booking sidebar

### Team Page
- Detailed profiles of 3 dentists
- Qualifications and BMDC registration
- Availability information
- Specializations and experience
- Team statistics

### About Page
- Clinic mission and values
- Why Choose Us features
- Contact information
- Hours of operation

### Contact Page
- Full contact details
- Operating hours
- Social media links
- Map location
- Appointment booking CTA

### Floating CTAs
- Fixed position WhatsApp button (green)
- Fixed position Call button (blue)
- Mobile-optimized sizing

## Data Management

### Services
All services are defined in `src/data/services.js`:
- 9 main categories
- 28 sub-services with descriptions and prices
- Slug-based URLs for dynamic routing

### Doctors
Doctor profiles in `src/data/doctors.js`:
- Name, qualifications, BMDC registration
- Availability schedule
- Services and experience
- Bio information

### Testimonials
Patient reviews in `src/data/testimonials.js`:
- Name and rating
- Service received
- Review text
- Date

### FAQs
FAQ content organized by service in `src/data/faqs.js`:
- General clinic FAQs
- Service-specific FAQs
- Categorized for easy lookup

## Customization

### Colors
All colors are defined as CSS variables in `src/styles/global.css`:
- `--primary-blue`: Main brand color (#0f4c81)
- `--secondary-blue`: Secondary color (#2E7DAE)
- `--accent-blue`: Accent color (#4A9FD8)
- `--white`, `--off-white`, `--light-gray`: Neutral colors

To change colors globally, modify the `:root` CSS variables.

### Contact Information
Update `src/data/constants.js` to change:
- Clinic name, phone, email
- Address and location
- Operating hours
- Social media links
- Tagline and mission

### Services
To add or modify services, edit `src/data/services.js` and update the data structures.

### Team Members
Update `src/data/doctors.js` with new doctor information.

## SEO Features

The website includes comprehensive SEO optimization:
- Semantic HTML structure
- Schema.org markup (LocalBusiness, Organization, HealthcareProfessional, FAQ)
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Mobile viewport configuration
- Structured data for rich snippets

All SEO utilities are in `src/utils/seo.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight CSS-only styling
- No unnecessary dependencies
- Optimized component rendering
- Mobile-first responsive design
- Smooth animations and transitions

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Touch-friendly mobile interface

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to Traditional Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder to your web hosting

3. Configure your server to route all requests to `index.html` for SPA routing

## Maintenance

### Adding a New Service

1. Add service to `src/data/services.js` in the appropriate category
2. Add FAQs in `src/data/faqs.js`
3. Service detail page will be automatically available at `/service/:slug`

### Updating Clinic Info

Update `src/data/constants.js` with new information like:
- Phone number
- Email
- Address
- Hours
- Social media links

### Updating Team

Modify `src/data/doctors.js` with:
- New doctor information
- Updated schedules
- New specializations

## License

All rights reserved. Doctor's Dental Care © 2024

## Support

For questions or issues, contact the development team.

## Future Enhancements

Potential features for future versions:
- Online appointment confirmation system
- Patient portal with appointment history
- Blog section for dental tips
- Patient before/after gallery
- Insurance information and verification
- Online consultation booking
- Patient testimonial submission form
- Multi-language support (Bangla, English)
- Online payment integration
- Patient review system with moderation
