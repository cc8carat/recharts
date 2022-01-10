import React from 'react';
import { Line, LineChart, XAxis, ReferenceLine, CartesianGrid, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';
import { calculateBiorhythmsSeries } from '../calculations';
const BiorthythmChart = ({ dateOfBirth, targetDate }) => {
  const startDate = dayjs(targetDate).subtract(15, 'day');
  const formatDate = (targetDate) => dayjs(targetDate).format('DD MMM');
  const data = calculateBiorhythmsSeries(dateOfBirth, startDate, 31).map((element) => ({ ...element, date: formatDate(element.date) }));

  return (
    <ResponsiveContainer width='100%' height={200}>
      <LineChart width={260} height={200} data={data}>
        <XAxis dataKey='date' ticks={[data[3].date, data[15].date, data[27].date]} />
        <ReferenceLine x={data[15].date} />
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <Line dot={false} type='natural' dataKey='physical' stroke='green' />
        <Line dot={false} type='natural' dataKey='emotional' stroke='blue' />
        <Line dot={false} type='natural' dataKey='intellectual' stroke='red' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorthythmChart;
