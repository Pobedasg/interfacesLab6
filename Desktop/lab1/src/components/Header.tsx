import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonTitle>Виконала студентка групи КН-32 Кодовбецька В. І.</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
