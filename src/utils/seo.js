import { CLINIC_INFO } from '../data/constants.js';

export const updateMetaTags = (title, description, keywords = '', canonical = '') => {
  // Update document title
  document.title = title;

  // Update or create meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.name = 'description';
    document.head.appendChild(descMeta);
  }
  descMeta.content = description;

  // Update or create meta keywords
  if (keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.content = keywords;
  }

  // Update canonical URL
  if (canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }

  // Update Open Graph tags
  updateOGTag('og:title', title);
  updateOGTag('og:description', description);
  updateOGTag('og:type', 'website');
  updateOGTag('og:site_name', CLINIC_INFO.name);
};

const updateOGTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

export const addStructuredData = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

export const getLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: CLINIC_INFO.name,
    image: '/logo.png',
    description: 'Professional dental clinic in Savar providing general, cosmetic, and advanced dental care',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Savar Stand',
      addressLocality: 'Savar',
      addressRegion: 'Dhaka',
      addressCountry: 'BD'
    },
    telephone: CLINIC_INFO.phone,
    email: CLINIC_INFO.email,
    url: 'https://doctorsdentalcare.com',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '500+'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '23:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '24:00',
        description: 'Closed for regular appointments, emergency services available'
      }
    ]
  };
};

export const getHealthcareProfessionalSchema = (doctor) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: doctor.name,
    description: doctor.bio,
    worksFor: {
      '@type': 'Organization',
      name: CLINIC_INFO.name,
      url: 'https://doctorsdentalcare.com'
    },
    knowsAbout: doctor.services || [],
    medicalSpecialty: doctor.specialty
  };
};

export const getFaqSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const getServiceSchema = (service, category) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'MedicalBusiness',
      name: CLINIC_INFO.name,
      url: 'https://doctorsdentalcare.com'
    },
    medicalSpecialty: 'Dentistry',
    serviceCategory: category
  };
};

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: CLINIC_INFO.name,
    url: 'https://doctorsdentalcare.com',
    logo: '/logo.png',
    description: 'Professional dental clinic in Savar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Savar Stand',
      addressLocality: 'Savar',
      addressRegion: 'Dhaka',
      addressCountry: 'BD'
    },
    telephone: CLINIC_INFO.phone,
    email: CLINIC_INFO.email,
    sameAs: [
      CLINIC_INFO.social.facebook,
      CLINIC_INFO.social.instagram,
      CLINIC_INFO.social.youtube
    ]
  };
};
