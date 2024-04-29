import { Redirect, Route } from "react-router-dom";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,

} from "@ionic/react";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Task1 from "./pages/lab1/Task1";
import Task2 from "./pages/lab1/Task2";
import Task3 from "./pages/lab1/Task3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { playCircle, radio, library, search } from "ionicons/icons";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Lab2Task1 from "./pages/lab2/Lab2Task1";
import Lab1 from "./pages/lab1/Lab1";
import Lab3 from "./pages/lab3/Lab3";
import Lab4 from "./pages/lab4/Lab4";
import Lab6 from "./pages/lab6/Lab6";


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Redirect exact path="/" to="/task1" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/task1" render={() => <Task1 />} exact={true} />
          <Route path="/task2" render={() => <Task2 />} exact={true} />
          <Route path="/task3" render={() => <Task3 />} exact={true} />
          <Route path="/lab1" render={() => <Lab1 />} exact={true} />
          <Route path="/lab2" render={() => <Lab2Task1 />} exact={true} />
          <Route path="/lab3" render={() => <Lab3 />} exact={true} />
          <Route path="/lab4" render={() => <Lab4 />} exact={true} />
          <Route path="/lab6" render={() => <Lab6 />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/task1">
            <IonIcon icon={playCircle} />
            <IonLabel>Task1</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/task2">
            <IonIcon icon={radio} />
            <IonLabel>Task2</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/task3">
            <IonIcon icon={library} />
            <IonLabel>Task3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
