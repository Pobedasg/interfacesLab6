import React from "react";
import { IonMenu, IonMenuButton } from "@ionic/react";

const MenuComp: React.FC = () => {
  return (
    <IonMenu side="start" menuId="menu1">
      <IonMenuButton />
    </IonMenu>
  );
};

export default MenuComp;
