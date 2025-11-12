import type { NextApiHandler } from 'next';

export type TimeSlot = {
  time: string;
  available: boolean;
  slotId: string;
};

export type DayAvailability = {
  date: string;
  dayName: string;
  slots: TimeSlot[];
};

// Generate mock availability data
function generateAvailability(doctorId: string, startDate: Date): DayAvailability[] {
  const days: DayAvailability[] = [];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const dayName = dayNames[date.getDay()];
    const dateString = date.toISOString().split('T')[0];

    // Skip weekends for most doctors
    if (date.getDay() === 0 || date.getDay() === 6) {
      continue;
    }

    const slots: TimeSlot[] = [];
    const timeSlots = [
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
    ];

    timeSlots.forEach((time) => {
      // Randomly make some slots unavailable
      const available = Math.random() > 0.3;
      slots.push({
        time,
        available,
        slotId: `${doctorId}-${dateString}-${time.replace(':', '')}`,
      });
    });

    days.push({
      date: dateString,
      dayName,
      slots,
    });
  }

  return days;
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { doctorId, startDate: startDateParam } = req.query;

  if (!doctorId || typeof doctorId !== 'string') {
    return res.status(400).json({ error: 'doctorId is required' });
  }

  const startDate =
    startDateParam && typeof startDateParam === 'string' ? new Date(startDateParam) : new Date();
  const availability = generateAvailability(doctorId, startDate);

  return res.status(200).json({
    doctorId,
    availability,
  });
};

export default handler;
