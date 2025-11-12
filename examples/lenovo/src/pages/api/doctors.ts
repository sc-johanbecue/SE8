import type { NextApiHandler } from 'next';
import { generateMockDoctors, type Doctor } from './generate-mock-data';

const mockDoctors: Doctor[] = generateMockDoctors(3073);

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { keyword, hospital, place, specialty, onlineAppointment } = req.query;

  let filteredDoctors = [...mockDoctors];

  // Filter by keyword (name or specialty)
  if (keyword && typeof keyword === 'string') {
    const keywordLower = keyword.toLowerCase();
    filteredDoctors = filteredDoctors.filter(
      (doc) =>
        doc.name.toLowerCase().includes(keywordLower) ||
        doc.specialty.toLowerCase().includes(keywordLower)
    );
  }

  // Filter by hospital
  if (hospital && typeof hospital === 'string') {
    filteredDoctors = filteredDoctors.filter((doc) =>
      doc.hospitals.some((h) => h.toLowerCase().includes(hospital.toLowerCase()))
    );
  }

  // Filter by place
  if (place && typeof place === 'string') {
    filteredDoctors = filteredDoctors.filter((doc) =>
      doc.locations.some((loc) => loc.toLowerCase().includes(place.toLowerCase()))
    );
  }

  // Filter by specialty
  if (specialty && typeof specialty === 'string') {
    filteredDoctors = filteredDoctors.filter((doc) =>
      doc.specialty.toLowerCase().includes(specialty.toLowerCase())
    );
  }

  // Filter by online appointment availability
  if (onlineAppointment === 'true') {
    filteredDoctors = filteredDoctors.filter((doc) => doc.hasOnlineBooking);
  }

  return res.status(200).json({
    doctors: filteredDoctors,
    total: filteredDoctors.length,
  });
};

export default handler;
