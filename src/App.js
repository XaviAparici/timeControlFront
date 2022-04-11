import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import Ausencias from './pages/Ausencias';
import Justificantes from './pages/Justificantes';
import Configuracion from './pages/Configuracion';
import Login from './components/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css';

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inicio" />
            </Route>
            <Route path="/page/Inicio" component={Inicio} exact={true}> 
            </Route>
            <Route path="/page/Ausencias" component={Ausencias} exact={true}> 
            </Route>
            <Route path="/page/Justificantes" component={Justificantes} exact={true}> 
            </Route>
            <Route path="/page/Configuracion" component={Configuracion} exact={true}> 
            </Route>
            <Route path="/page/Login" component={Login} exact={true}> 
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
