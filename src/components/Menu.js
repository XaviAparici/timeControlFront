import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { settingsOutline, calendarNumberOutline, fileTrayOutline, homeOutline, logOutOutline} from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { datosUsuario } from './services/services';

const appPages = [
  {
    title: 'Inicio',
    url: '/page/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Ausencias',
    url: '/page/Ausencias',
    iosIcon: calendarNumberOutline,
    mdIcon: calendarNumberOutline
  },
  {
    title: 'Justificantes',
    url: '/page/Justificantes',
    iosIcon: fileTrayOutline,
    mdIcon: fileTrayOutline
  },
  {
    title: 'Configuracion',
    url: '/page/Configuracion',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  },
  {
    title: 'Cerrar sesión',
    url: '/page/CerrarSesion',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  }
];

const Menu = () => {
  const location = useLocation();

  const [datos, setDatos] = useState() 

  useEffect( () => {
    datosUsuario().then(res => {
      setDatos(res[0])
    })
  },[]);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {datos!=undefined &&
          <IonNote>{datos.nombre+' '+datos.apellidos}</IonNote>
          }
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
