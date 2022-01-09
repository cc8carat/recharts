import dayjs from 'dayjs';

const calculateBiorhythm = (dateOfBirth, targetDate, cycle) => {
  const birthDay = dayjs(dateOfBirth).startOf('day');
  const targetDay = dayjs(targetDate).startOf('day');
  const diff = targetDay.diff(birthDay, 'days');
  return Math.sin((2 * Math.PI * diff) / cycle);
};

export const calculateBiorhythms = (dateOfBirth, targetDate) => {
  return {
    date: targetDate,
    physical: calculateBiorhythm(dateOfBirth, targetDate, 23),
    emotional: calculateBiorhythm(dateOfBirth, targetDate, 28),
    intellectual: calculateBiorhythm(dateOfBirth, targetDate, 33),
  };
};

export const calculateBiorhythmsSeries = (dateOfBirth, startDate, size) => {
  const series = [];
  const startDay = dayjs(startDate).startOf('day');
  for (let i = 0; i < size; i++) {
    const targetDay = startDay.add(i, 'days');
    series.push(calculateBiorhythms(dateOfBirth, targetDay));
  }
  return series;
};
