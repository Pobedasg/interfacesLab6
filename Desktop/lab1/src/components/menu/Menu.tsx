import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonToolbar,
} from "@ionic/react";
function MyMenu(props: { title: string }) {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem routerLink="task1">
            <IonLabel>Лабораторна робота №1</IonLabel>
          </IonItem>
          <IonItem routerLink="lab2">
            <IonLabel>Лабораторна робота №2</IonLabel>
          </IonItem>
          <IonItem routerLink="lab3">
            <IonLabel>Лабораторна робота №3</IonLabel>
          </IonItem>
          <IonItem routerLink="lab4">
            <IonLabel>Лабораторна робота №4</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Лабораторна робота №5</IonLabel>
          </IonItem>
          <IonItem routerLink="lab6">
            <IonLabel>Лабораторна робота №6</IonLabel>
          </IonItem>
          <IonItem routerLink="lab7">
            <IonLabel>Лабораторна робота №7</IonLabel>
          </IonItem>
          <IonItem routerLink="lab8">
            <IonLabel>Лабораторна робота №8</IonLabel>
          </IonItem>
          <IonItem routerLink="lab9">
            <IonLabel>Лабораторна робота №9</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}
export default MyMenu;
