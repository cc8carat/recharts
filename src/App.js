import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  setupIonicReact,
  IonButton,
  useIonToast,
  IonIcon,
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonPopover,
} from '@ionic/react';
import { createOutline as createIcon } from 'ionicons/icons';

import BiorhythmsCard from './components/BiorhythmsCard.js';
import useLocalStorage from '../src/hooks';

setupIonicReact();

const App = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useLocalStorage('dateOfBirth', '');
  const [targetDate, setTargetDate] = useState(dayjs(new Date()).format('D MMM YYYY'));
  const [showToast, hideToast] = useIonToast();

  const formatDate = (date) => {
    return dayjs(date).format('D MMM YYYY');
  };

  const handleNameChange = (e) => {
    setName(e.detail.value);
  };
  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(formatDate(e.detail.value));
  };
  const handleTargetDateChange = (e) => {
    setTargetDate(formatDate(e.detail.value));
  };
  const handleClick = () => {
    showToast({
      buttons: [{ text: 'Ok', handler: () => hideToast() }],
      message: 'Hello, there',
    });
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>

      {dateOfBirth && targetDate && <BiorhythmsCard targetDate={targetDate} formatDate={formatDate} dateOfBirth={dateOfBirth} />}

      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position='floating'>Name:</IonLabel>
          <IonInput onIonChange={handleNameChange} value={name} />
        </IonItem>

        <IonItem button={true} id='open-birth-date-input'>
          <IonLabel>Date of Birth:</IonLabel>
          <IonInput value={dateOfBirth} />
          <IonPopover trigger='open-birth-date-input' size='cover'>
            <IonDatetime presentation='date' onIonChange={handleDateOfBirthChange}></IonDatetime>
          </IonPopover>
        </IonItem>

        <IonItem button={true} id='open-target-date-input'>
          <IonLabel position='fixed'>Target Date:</IonLabel>
          <IonInput value={targetDate} />
          <IonPopover trigger='open-target-date-input' size='cover'>
            <IonDatetime presentation='date' onIonChange={handleTargetDateChange}></IonDatetime>
          </IonPopover>
        </IonItem>

        <IonButton onClick={handleClick} className='ion-margin'>
          <IonIcon icon={createIcon} slot='start' />
          Click Me!
        </IonButton>
      </IonContent>
    </IonApp>
  );
};

export default App;
