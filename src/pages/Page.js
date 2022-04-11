import { IonButtons, IonFooter, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Page = (props) => {

  return (
    <IonPage className='home'>
      <IonHeader>
        <IonToolbar color='medium'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <div className='p-6'>{props.children}</div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
