export type Doctor = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  subspecialty: string;
  languages: string[];
  hospital: string;
  city: string;
  image: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  postalCode: string;
  country: string;
  practices: Array<{
    name: string;
    url: string;
  }>;
  // Legacy fields for backward compatibility
  hospitals: string[];
  locations: string[];
  hasOnlineBooking: boolean;
  specialtyDetail: string;
  profileImage: string;
  doctorId: number;
  practiceName: string;
  practiceAddress: string;
};

const firstNames = [
  'Paolo',
  'Christof',
  'Nadji',
  'Sarah',
  'Omar',
  'Andrew',
  'Marc',
  'Francis',
  'Magali',
  'Hans',
  'Maria',
  'Thomas',
  'Anna',
  'Peter',
  'Sophie',
  'Michael',
  'Julia',
  'David',
  'Emma',
  'Daniel',
  'Laura',
  'Stefan',
  'Nina',
  'Martin',
  'Lisa',
  'Christian',
  'Sandra',
  'Andreas',
  'Katharina',
  'Markus',
];

const lastNames = [
  'Abitabile',
  'Abächerli',
  'Abbas-Terki',
  'Abbeel',
  'Abdol Aziz',
  'Abdel Sayed',
  'Abecassis',
  'Abihanna',
  'Fernandez',
  'Zeid',
  'Müller',
  'Schmidt',
  'Schneider',
  'Fischer',
  'Weber',
  'Meyer',
  'Wagner',
  'Becker',
  'Schulz',
  'Hoffmann',
  'Koch',
  'Bauer',
  'Richter',
  'Klein',
  'Wolf',
  'Schröder',
  'Neumann',
  'Schwarz',
  'Zimmermann',
  'Braun',
  'Hofmann',
  'Hartmann',
  'Lange',
  'Werner',
  'Krause',
  'Meier',
  'Schmitt',
  'Lehmann',
  'Huber',
  'Mayer',
  'Herrmann',
  'Walter',
  'König',
  'Baumann',
  'Schreiber',
  'Keller',
  'Gross',
  'Roth',
  'Berger',
  'Winkler',
  'Lorenz',
  'Albrecht',
  'Hermann',
  'Frey',
  'Sommer',
  'Vogt',
  'Stein',
  'Jäger',
  'Otto',
  'Sauer',
  'Krüger',
  'Brandt',
  'Schubert',
  'Franke',
  'Vogel',
  'Ritter',
  'Kaiser',
  'Böhm',
  'Fuchs',
  'Möller',
  'Graf',
  'Kuhn',
  'Scholz',
  'Engel',
  'Weiß',
  'Schuster',
  'Haas',
  'Bergmann',
  'Seidel',
  'Schäfer',
  'Busch',
  'Horn',
  'Arnold',
  'Kühn',
  'Wolff',
  'Pfeiffer',
  'Voigt',
  'Hahn',
  'Dietrich',
  'Günther',
  'Kraft',
  'Kraus',
  'Petersen',
  'Ziegler',
  'Schumann',
  'Bock',
  'Lindner',
  'Ludwig',
  'Mohr',
  'Martens',
  'Groß',
];

const specialties = [
  'Allergology and Immunology',
  'Anaesthesiology',
  'Cardiology',
  'Dermatology and Venereology',
  'Endocrinology / Diabetology',
  'Gastroenterology',
  'General Internal Medicine',
  'Gynaecology and Obstetrics',
  'Neurology',
  'Ophthalmology',
  'Orthopaedic surgery and traumatology',
  'Pediatrics',
  'Psychiatry and Psychotherapy',
  'Radiology',
  'Surgery',
  'Urology',
];

const specialtyDetails = [
  'Clinical Immunology',
  'Pain Management',
  'Interventional Cardiology',
  'Cosmetic Dermatology',
  'Diabetes Management',
  'Hepatology',
  'Preventive Medicine',
  'Surgical Gynaecology and Obstetrics',
  'Pediatric Neurology',
  'Retinal Surgery',
  'Joint Replacement',
  'General Pediatrics',
  'Child Psychiatry',
  'Interventional Radiology',
  'Visceral Surgery',
  'Reconstructive Urology',
];

const cities = ['Aarau', 'Basle', 'Bern', 'Geneva', 'Lausanne', 'Lucerne', 'Zurich'];

const hospitals = [
  'AndreasKlinik Cham Zug',
  'Clinique Bois-Cerf',
  'Clinique Cecil',
  'Clinique des Grangettes',
  'Clinique La Colline',
  'Hirslanden Klinik Aarau',
  'Hirslanden Klinik Birshof',
  'Klinik Hirslanden',
];

const languages = [
  'German',
  'English',
  'French',
  'Italian',
  'Spanish',
  'Portuguese',
  'Arabic',
  'Turkish',
  'Finnish',
  'Dutch',
];

export function generateMockDoctors(count = 3073): Doctor[] {
  const doctors: Doctor[] = [];

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[i % lastNames.length];

    const specialtyIndex = (i - 1) % specialties.length;
    const specialty = specialties[specialtyIndex];
    const subspecialty = specialtyDetails[specialtyIndex % specialtyDetails.length];

    const cityIndex = (i - 1) % cities.length;
    const city = cities[cityIndex];

    const hospitalIndex = (i - 1) % hospitals.length;
    const hospital = hospitals[hospitalIndex];

    const numLanguages = 2 + Math.floor(Math.random() * 3);
    const doctorLanguages = [...languages].sort(() => 0.5 - Math.random()).slice(0, numLanguages);

    const numAdditionalHospitals = Math.floor(Math.random() * 3);
    const additionalHospitals = [...hospitals]
      .filter((h) => h !== hospital)
      .sort(() => 0.5 - Math.random())
      .slice(0, numAdditionalHospitals);
    const doctorHospitals = [hospital, ...additionalHospitals];

    const image =
      i <= 10 ? `/doctor-${i}.webp` : `/placeholder.svg?height=200&width=200&query=doctor portrait`;

    doctors.push({
      id: i,
      doctorId: i,
      name: `Dr. med. ${firstName} ${lastName}`,
      title: 'Dr. med.',
      specialty,
      subspecialty,
      specialtyDetail: subspecialty,
      languages: doctorLanguages,
      hospital,
      hospitals: doctorHospitals,
      city,
      locations: [city],
      image,
      profileImage: image,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@hin.ch`,
      phone: `+41 ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 90 + 10)}`,
      website: `https://${lastName.toLowerCase()}-practice.ch`,
      address: `${['Bahnhofstrasse', 'Kaiserstrasse', 'Hauptstrasse', 'Parkstrasse', 'Bergstrasse'][Math.floor(Math.random() * 5)]} ${Math.floor(Math.random() * 100 + 1)}`,
      postalCode: `${Math.floor(Math.random() * 9000 + 1000)}`,
      country: 'Switzerland',
      practiceName: hospital,
      practiceAddress: `${['Bahnhofstrasse', 'Kaiserstrasse', 'Hauptstrasse', 'Parkstrasse', 'Bergstrasse'][Math.floor(Math.random() * 5)]} ${Math.floor(Math.random() * 100 + 1)}, ${city}`,
      hasOnlineBooking: Math.random() > 0.3,
      practices: doctorHospitals.map((h) => ({
        name: h,
        url: `https://${h.toLowerCase().replace(/\s+/g, '-')}.ch`,
      })),
    });
  }

  console.log(`[v0] Generated mock doctors:`, JSON.stringify(doctors));
  return doctors;
}
