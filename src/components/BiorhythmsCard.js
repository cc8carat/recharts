import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { calculateBiorhythms } from '../calculations';
import BiorthythmChart from './BiorthythmChart';

import './BiorhythmsCard.css';

const BiorhythmsCard = ({ targetDate, formatDate, dateOfBirth }) => {
  const { physical, emotional, intellectual } = calculateBiorhythms(dateOfBirth, targetDate);

  return (
    <IonCard className='biorhythms-card ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorthythmChart dateOfBirth={dateOfBirth} targetDate={targetDate} />
        <p className='physical'>Physical: {physical.toFixed(4)}</p>
        <p>Emotional: {emotional.toFixed(4)}</p>
        <p>Intellectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmsCard;
