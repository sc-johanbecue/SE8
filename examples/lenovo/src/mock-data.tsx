/**
 * Mock Data for MediClinic Sitecore Components
 * Centralized mock data for all components following Sitecore field structure
 */

export const mockHeaderFields = {
  Logo: {
    value: {
      src: '/hirslanden-logo-pink.jpg',
      alt: 'Hirslanden',
      width: 150,
      height: 32,
    },
  },
  PhoneNumber: { value: 'Healthline' },
  PhoneLink: { value: { href: 'tel:+41', text: 'Healthline' } },
  HospitalLink: { value: { href: '/hospitals', text: 'Hospitals' } },
  DoctorsLink: { value: { href: '/doctors', text: 'Doctors' } },
  MediaLink: { value: { href: '/media', text: 'Media/News' } },
  LanguageSelector: { value: 'EN' },
  NavigationItems: [],
};

export const mockHeroFields = {
  heading: { value: 'EXPERTISE YOU CAN TRUST' },
  subheading: { value: '' },
};

export const mockSearchBarFields = {
  placeholder: { value: 'Keyword...' },
  searchButtonText: { value: 'Search' },
  tabs: [
    { label: { value: 'Jobs' }, value: { value: 'jobs' } },
    { label: { value: 'Doctors search' }, value: { value: 'doctors' } },
    { label: { value: 'Baby Gallery' }, value: { value: 'baby' } },
  ],
};

export const mockFeaturedCardFields = {
  items: [
    {
      tag: { value: 'Awareness' },
      heading: { value: "October – Women's Health Month" },
      description: {
        value:
          'During Breast Cancer Awareness Month, Hirslanden provides information about prevention, early detection and treatment. The focus is on comprehensive, personalized support.',
      },
      image: {
        value: {
          src: '/woman-health-awareness-medical.jpg',
          alt: "Women's Health",
          width: 600,
          height: 400,
        },
      },
      ctaLink: { value: { href: '/womens-health', text: 'Further information' } },
    },
  ],
};

export const mockQuickLinksFields = {
  items: [
    {
      icon: { value: 'search' },
      label: { value: 'Clinic Search' },
      link: { value: { href: '/clinic-search', text: 'Clinic Search' } },
    },
    {
      icon: { value: 'users' },
      label: { value: 'Doctor Search' },
      link: { value: { href: '/doctor-search', text: 'Doctor Search' } },
    },
    {
      icon: { value: 'message' },
      label: { value: 'Feedback to Your Stay' },
      link: { value: { href: '/feedback', text: 'Feedback to Your Stay' } },
    },
    {
      icon: { value: 'book' },
      label: { value: 'Jobs and Careers' },
      link: { value: { href: '/careers', text: 'Jobs and Careers' } },
    },
    {
      icon: { value: 'book' },
      label: { value: 'Medical Knowledge' },
      link: { value: { href: '/knowledge', text: 'Medical Knowledge' } },
    },
    {
      icon: { value: 'users' },
      label: { value: 'International Patients' },
      link: { value: { href: '/international', text: 'International Patients' } },
    },
    {
      icon: { value: 'activity' },
      label: { value: 'Treatments' },
      link: { value: { href: '/treatments', text: 'Treatments' } },
    },
    {
      icon: { value: 'calculator' },
      label: { value: 'BMI calculator' },
      link: { value: { href: '/bmi', text: 'BMI calculator' } },
    },
  ],
};

export const mockImageCardsFields = {
  sectionHeading: { value: 'Hirslanden Group' },
  cards: [
    {
      tag: { value: 'Baby Gallery' },
      heading: { value: 'Welcome to the world' },
      description: {
        value: 'Welcome the newborns from our maternity hospitals in Switzerland.',
      },
      image: {
        value: {
          src: '/newborn-baby-hospital.jpg',
          alt: 'Baby Gallery',
          width: 400,
          height: 600,
        },
      },
      link: { value: { href: '/baby-gallery', text: 'Baby Gallery' } },
    },
    {
      tag: { value: 'Our Specialties' },
      heading: { value: 'Expert care' },
      description: {
        value:
          'Learn more about all of our specialties, our experts and what we can do for you. Learn More.',
      },
      image: {
        value: {
          src: '/doctor-patient-consultation.png',
          alt: 'Our Specialties',
          width: 400,
          height: 600,
        },
      },
      link: { value: { href: '/specialties', text: 'Our Specialties' } },
    },
    {
      tag: { value: 'Hirslanden Healthline' },
      heading: { value: '24/7 Support' },
      description: {
        value:
          'Hirslanden on its hottest Pressing on all health-visit situations – whenever and wherever you are.',
      },
      image: {
        value: {
          src: '/woman-phone-outdoor-health.jpg',
          alt: 'Healthline',
          width: 400,
          height: 600,
        },
      },
      link: { value: { href: '/healthline', text: 'Hirslanden Healthline' } },
    },
  ],
};

export const mockMediaNewsFields = {
  sectionHeading: { value: 'Media and News' },
  articles: [
    {
      category: { value: 'Press release' },
      date: { value: '18.04.2025' },
      title: { value: 'Michel Berenholz manager of hospitals in Lausanne' },
      source: { value: 'Hirslanden Group' },
      link: { value: { href: '/news/1', text: 'Read more' } },
    },
    {
      category: { value: 'News' },
      date: { value: '18.04.2025' },
      title: { value: 'Swiss LGBTQ-Label' },
      source: { value: 'Hirslanden Group' },
      link: { value: { href: '/news/2', text: 'Read more' } },
    },
    {
      category: { value: 'News' },
      date: { value: '09.04.2025' },
      title: { value: 'Gilles Rufenacht appointed new CEO of Hirslanden Group' },
      source: { value: 'Hirslanden Group' },
      link: { value: { href: '/news/3', text: 'Read more' } },
    },
    {
      category: { value: 'Press release' },
      date: { value: '08.04.2025' },
      title: { value: 'Personnel change within the Hirslanden Executive Committee' },
      source: { value: 'Hirslanden Group' },
      link: { value: { href: '/news/4', text: 'Read more' } },
    },
  ],
  viewAllLink: { value: { href: '/media', text: 'All media and news' } },
};

export const mockEventsFields = {
  sectionHeading: { value: 'Events' },
  events: [
    {
      day: { value: '15' },
      month: { value: 'Oct' },
      location: { value: 'Geneva, further dates available' },
      availability: { value: 'Birth preparation course for dads' },
      title: { value: 'Birth preparation course for dads' },
      link: { value: { href: '/events/1', text: 'Learn more' } },
    },
    {
      day: { value: '16' },
      month: { value: 'Oct' },
      location: { value: 'Lausanne, further dates available' },
      availability: { value: 'Birth preparation classes' },
      title: { value: 'Birth preparation classes' },
      link: { value: { href: '/events/2', text: 'Learn more' } },
    },
    {
      day: { value: '30' },
      month: { value: 'Oct' },
      location: { value: 'Geneva, further dates available' },
      availability: { value: 'Birth Preparation Course - Weekdays' },
      title: { value: 'Birth Preparation Course - Weekdays' },
      link: { value: { href: '/events/3', text: 'Learn more' } },
    },
    {
      day: { value: '01' },
      month: { value: 'Nov' },
      location: { value: 'Zurich, further dates available' },
      availability: { value: 'Intensive antenatal course for couples' },
      title: { value: 'Intensive antenatal course for couples' },
      link: { value: { href: '/events/4', text: 'Learn more' } },
    },
  ],
  viewAllLink: { value: { href: '/events', text: 'All events' } },
};

export const mockBreadcrumbFields = {
  items: [
    {
      text: { value: 'Home' },
      link: { value: { href: '/', text: 'Home' } },
    },
    {
      text: { value: 'Doctors and nurses' },
      link: { value: { href: '/doctors-and-nurses', text: 'Doctors and nurses' } },
    },
    {
      text: { value: 'Doctors search' },
      link: { value: { href: '/doctors-search', text: 'Doctors search' } },
    },
  ],
};

export const mockPageHeaderFields = {
  title: { value: 'Finding a doctor' },
  description: {
    value:
      'Are you looking for a particular doctor? Here you can find all the specialists working at our Hirslanden Hospitals.',
  },
};

export const mockHelpBoxFields = {
  title: { value: 'Need help finding a doctor?' },
  description: {
    value:
      'Need help finding a doctor? Call the <a href="/healthline" class="text-[#00A0C6] hover:underline">Hirslanden Healthline</a> on <a href="tel:0848333999" class="text-[#00A0C6] hover:underline">Tel. 0848 333 999</a> and we will gladly help you find a suitable doctor.',
  },
  phoneLabel: { value: 'Tel.' },
  phoneNumber: { value: '0848 333 999' },
  phoneLink: { value: { href: 'tel:0848333999', text: '0848 333 999' } },
  additionalText: { value: '' },
};

export const mockDoctorSearchFields = {
  title: { value: 'Doctors' },
  resultCount: { value: '3073' },
  keywordPlaceholder: { value: 'Key word/name' },
  hospitalLabel: { value: 'Hospital' },
  hospitalOptions: [
    { label: { value: 'AndreasKlinik Cham Zug' }, value: { value: 'andreas-cham' } },
    { label: { value: 'Clinique Bois-Cerf' }, value: { value: 'bois-cerf' } },
    { label: { value: 'Clinique Cecil' }, value: { value: 'cecil' } },
    { label: { value: 'Clinique des Grangettes' }, value: { value: 'grangettes' } },
    { label: { value: 'Clinique La Colline' }, value: { value: 'colline' } },
    { label: { value: 'Hirslanden Klinik Aarau' }, value: { value: 'aarau' } },
    { label: { value: 'Hirslanden Klinik Birshof' }, value: { value: 'birshof' } },
    { label: { value: 'Klinik Hirslanden' }, value: { value: 'hirslanden' } },
  ],
  placeLabel: { value: 'Place' },
  placeOptions: [
    { label: { value: 'Aarau' }, value: { value: 'aarau' } },
    { label: { value: 'Basle' }, value: { value: 'basle' } },
    { label: { value: 'Bern' }, value: { value: 'bern' } },
    { label: { value: 'Geneva' }, value: { value: 'geneva' } },
    { label: { value: 'Lausanne' }, value: { value: 'lausanne' } },
    { label: { value: 'Lucerne' }, value: { value: 'lucerne' } },
    { label: { value: 'Zurich' }, value: { value: 'zurich' } },
  ],
  specialtyLabel: { value: 'Speciality' },
  specialtyOptions: [
    { label: { value: 'Allergology and Immunology' }, value: { value: 'allergology' } },
    { label: { value: 'Anaesthesiology' }, value: { value: 'anaesthesiology' } },
    { label: { value: 'Cardiology' }, value: { value: 'cardiology' } },
    { label: { value: 'Dermatology and Venereology' }, value: { value: 'dermatology' } },
    { label: { value: 'Endocrinology / Diabetology' }, value: { value: 'endocrinology' } },
    { label: { value: 'Gastroenterology' }, value: { value: 'gastroenterology' } },
    { label: { value: 'General Internal Medicine' }, value: { value: 'internal-medicine' } },
    { label: { value: 'Gynaecology and Obstetrics' }, value: { value: 'gynaecology' } },
    { label: { value: 'Neurology' }, value: { value: 'neurology' } },
    { label: { value: 'Ophthalmology' }, value: { value: 'ophthalmology' } },
    {
      label: { value: 'Orthopaedic surgery and traumatology' },
      value: { value: 'orthopaedic-surgery' },
    },
    { label: { value: 'Pediatrics' }, value: { value: 'pediatrics' } },
    { label: { value: 'Psychiatry and Psychotherapy' }, value: { value: 'psychiatry' } },
    { label: { value: 'Radiology' }, value: { value: 'radiology' } },
    { label: { value: 'Surgery' }, value: { value: 'surgery' } },
    { label: { value: 'Urology' }, value: { value: 'urology' } },
  ],
  appointmentOnlineLabel: { value: 'Show appointment online' },
  applyButtonText: { value: 'Apply' },
};

export const mockDoctorListingFields = {
  doctors: [
    {
      fields: {
        name: { value: 'Dr. med. Christof Abächerli' },
        title: { value: 'Dr. med.' },
        specialty: { value: 'Orthopaedic surgery and traumatology' },
        languages: { value: 'German, French, English' },
        locations: { value: 'Aarau' },
        profileImage: {
          value: {
            src: '/doctor-portrait.png',
            alt: 'Dr. Christof Abächerli',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abaecherli', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Docteur Nadji Abbas-Terki' },
        title: { value: 'Docteur' },
        specialty: { value: 'General Internal Medicine' },
        languages: { value: 'French' },
        locations: { value: 'Genève' },
        profileImage: {
          value: {
            src: '/doctor-portrait-placeholder.jpg',
            alt: 'Docteur Nadji Abbas-Terki',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abbas-terki', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Dr. med. Sarah Abbeel' },
        title: { value: 'Dr. med.' },
        specialty: { value: 'Endocrinology / Diabetology' },
        languages: { value: 'German, French, English, Czech' },
        locations: { value: 'Aarau' },
        profileImage: {
          value: {
            src: '/female-doctor-portrait.png',
            alt: 'Dr. Sarah Abbeel',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abbeel', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Dr. med. Omar Abdol Aziz' },
        title: { value: 'Dr. med.' },
        specialty: { value: 'Anaesthesiology' },
        languages: { value: 'German, English, French' },
        locations: { value: 'Bern' },
        profileImage: {
          value: {
            src: '/male-doctor-portrait.png',
            alt: 'Dr. Omar Abdol Aziz',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abdol-aziz', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Docteur Andrew Abdel Sayed' },
        title: { value: 'Docteur' },
        specialty: { value: 'General Internal Medicine' },
        languages: { value: 'French, English, German, Arabic' },
        locations: { value: 'Genève' },
        profileImage: {
          value: {
            src: '/doctor-professional-photo.jpg',
            alt: 'Docteur Andrew Abdel Sayed',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abdel-sayed', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Docteur Marc Abecassis' },
        title: { value: 'Docteur' },
        specialty: { value: 'Plastic, Reconstructive and Cosmetic Surgery' },
        languages: { value: 'French' },
        locations: { value: 'Bern' },
        profileImage: {
          value: {
            src: '/surgeon-portrait.jpg',
            alt: 'Docteur Marc Abecassis',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abecassis', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Docteur Francis Abehsera' },
        title: { value: 'Docteur' },
        specialty: { value: 'Radiology' },
        languages: { value: 'French, English, Arabic' },
        locations: { value: 'Genève' },
        profileImage: {
          value: {
            src: '/radiologist-portrait.jpg',
            alt: 'Docteur Francis Abehsera',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abehsera', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Dr. med. Paolo Abielaile' },
        title: { value: 'Dr. med.' },
        specialty: { value: 'Surgery, Visceral Surgery' },
        languages: { value: 'German, French, English' },
        locations: { value: 'Winterthur' },
        profileImage: {
          value: {
            src: '/surgeon-professional.jpg',
            alt: 'Dr. Paolo Abielaile',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abielaile', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Docteur Magali Abou Fernandez' },
        title: { value: 'Docteur' },
        specialty: {
          value:
            'Ophthalmology and Ophthalmic surgery, Specialty: Surgical Ophthalmology and Ophthalmic Aesthetics',
        },
        languages: { value: 'French' },
        locations: { value: 'Clinique Bois-Cerf' },
        profileImage: {
          value: {
            src: '/female-ophthalmologist.png',
            alt: 'Docteur Magali Abou Fernandez',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abou-fernandez', text: 'View Profile' } },
      },
    },
    {
      fields: {
        name: { value: 'Docteur Hans Abou Zeid' },
        title: { value: 'Docteur' },
        specialty: { value: 'Ophthalmology, Specialty: Ophthalmic surgery' },
        languages: { value: 'French, English, German, Italian, Arabic' },
        locations: { value: 'Clinique Bois-Cerf' },
        profileImage: {
          value: {
            src: '/ophthalmologist-portrait.jpg',
            alt: 'Docteur Hans Abou Zeid',
            width: 96,
            height: 96,
          },
        },
        profileLink: { value: { href: '/doctors/abou-zeid', text: 'View Profile' } },
      },
    },
  ],
  loadMoreText: { value: 'Display more' },
  initialDisplayCount: 10,
};

export const mockFooterFields = {
  logo: {
    value: {
      src: '/hirslanden-logo-pink.jpg',
      alt: 'Hirslanden',
      width: 150,
      height: 32,
    },
  },
  groupHeading: { value: 'HIRSLANDEN GROUP' },
  groupDescription: {
    value:
      '16 hospitals, more than 300 medical centres and institutes and over 3 000 doctors - your health is our focus!',
  },
  followUsText: { value: 'FOLLOW US' },
  socialLinks: [
    {
      platform: { value: 'facebook' },
      link: { value: { href: 'https://facebook.com/hirslanden', text: 'Facebook' } },
    },
    {
      platform: { value: 'instagram' },
      link: { value: { href: 'https://instagram.com/hirslanden', text: 'Instagram' } },
    },
    {
      platform: { value: 'tiktok' },
      link: { value: { href: 'https://tiktok.com/@hirslanden', text: 'TikTok' } },
    },
    {
      platform: { value: 'linkedin' },
      link: { value: { href: 'https://linkedin.com/company/hirslanden', text: 'LinkedIn' } },
    },
    {
      platform: { value: 'youtube' },
      link: { value: { href: 'https://youtube.com/hirslanden', text: 'YouTube' } },
    },
    { platform: { value: 'rss' }, link: { value: { href: '/rss', text: 'RSS Feed' } } },
  ],
  emergencyLabel: { value: 'Emergency number' },
  emergencyNumber: { value: '144' },
  columns: [
    {
      heading: { value: 'Quick Links' },
      links: [
        { link: { value: { href: '/stay', text: 'Stay' } } },
        { link: { value: { href: '/maternity', text: 'Maternity' } } },
        { link: { value: { href: '/assurance', text: 'Assurance' } } },
        { link: { value: { href: '/international-patients', text: 'International Patients' } } },
        { link: { value: { href: '/courses-events', text: 'Courses & Events' } } },
      ],
    },
    {
      heading: { value: 'Service Offerings' },
      links: [
        { link: { value: { href: '/hospitals-centres', text: 'Hospitals & Centres' } } },
        { link: { value: { href: '/cantonal-overview', text: 'Cantonal overview' } } },
        { link: { value: { href: '/find-doctor', text: 'Find a Doctor' } } },
        { link: { value: { href: '/hotels-services', text: 'Hotels & Services' } } },
      ],
    },
    {
      heading: { value: 'About us' },
      links: [
        { link: { value: { href: '/hirslanden-group', text: 'Hirslanden Group' } } },
        { link: { value: { href: '/quality', text: 'Quality' } } },
        { link: { value: { href: '/jobs-career', text: 'Jobs & Career' } } },
        { link: { value: { href: '/media-news', text: 'Media & News' } } },
        { link: { value: { href: '/dataprotection', text: 'Dataprotection' } } },
      ],
    },
  ],
  copyrightText: { value: '© Hirslanden Group 2025' },
  legalLinks: [
    { link: { value: { href: '/terms', text: 'Terms Of Use' } } },
    { link: { value: { href: '/privacy', text: 'Privacy Policy Website' } } },
    { link: { value: { href: '/cookies', text: 'Cookie Policy' } } },
    { link: { value: { href: '/legal', text: 'Legal Information' } } },
  ],
  contactLink: { value: { href: '/contact', text: 'Contact' } },
};

export const mockAppointmentBookingFields = {
  pageTitle: { value: 'Online Appointments' },
  doctorName: { value: 'Dr. med. Matti S. Kuronen' },
  doctorSpecialty: { value: 'Gynaecology and Surgical Gynaecology and Obstetrics' },
  doctorLocation: { value: 'Praxis Dr. med. Kuronen Matti S.' },
  doctorImage: {
    value: {
      src: '/doctor-kuronen.jpg',
      alt: 'Dr. med. Matti S. Kuronen',
      width: 96,
      height: 96,
    },
  },
  newPatientLabel: { value: 'New patient?' },
  establishedPatientLabel: { value: "I'm an established patient" },
  treatmentLabel: { value: 'Treatment' },
  treatmentOptions: [
    { label: { value: 'Jahreskontrolle' }, value: { value: 'jahreskontrolle' } },
    { label: { value: 'Schwangerschaftsvorsorge' }, value: { value: 'pregnancy-care' } },
    { label: { value: 'Gynäkologische Untersuchung' }, value: { value: 'gynecological-exam' } },
    { label: { value: 'Beratungsgespräch' }, value: { value: 'consultation' } },
  ],
  treatmentInfoText: { value: 'Please accept the following information' },
  dateTimeLabel: { value: 'Date and Time' },
  personalDetailsLabel: { value: 'Personal details' },
  firstNameLabel: { value: 'First name' },
  lastNameLabel: { value: 'Last name' },
  dobLabel: { value: 'Date of birth (dd.mm.yyyy)' },
  mobileLabel: { value: 'Mobile number (+41799000000)' },
  streetLabel: { value: 'Street' },
  numberLabel: { value: 'No.' },
  cityLabel: { value: 'City' },
  zipLabel: { value: 'ZIP' },
  emailLabel: { value: 'E-Mail' },
  repeatEmailLabel: { value: 'Repeat E-Mail address' },
  reasonLabel: { value: 'Reason for visit / comments' },
  submitButtonText: { value: 'Go' },
  cancelButtonText: { value: 'Cancel' },
  overviewButtonText: { value: 'Appointment overview' },
  cooperationText: { value: 'The booking is carried out in cooperation with OneDoc.' },
};

export const mockHeaderData = mockHeaderFields;
export const mockFooterData = mockFooterFields;
