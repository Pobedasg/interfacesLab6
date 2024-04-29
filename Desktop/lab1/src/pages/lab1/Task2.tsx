import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonButtons,
} from "@ionic/react";
import "./Task2.css";
import MyMenu from "../../components/menu/Menu";

const Task2: React.FC = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const countNumbers = () => {
    const start = parseInt(a);
    const end = parseInt(b);
    let count = 0;

    for (let i = start; i <= end; i++) {
      if (i % 55 === 0 && i % 2 !== 0 && i % 7 === 3) {
        count++;
      }
    }

    setResult(count);
  };
  return (
    <>
      <MyMenu title="" />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Лабораторна робота № 1</IonTitle>
            <IonTitle>
              Виконала студентка групи КН-32 Кодовбецька В. І.
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem className="titlete">Завдання №2</IonItem>
          <IonItem>
            На заданому проміжку чисел [a,b] знайдіть кількість чисел, які
            кратні 55, непарні і при діленні на 7 дають в остачі 3.
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="Початок проміжку"
              type="number"
              onIonChange={(e) => setA(e.detail.value!)}
            ></IonInput>
            <IonInput
              placeholder="Кінець проміжку"
              type="number"
              onIonChange={(e) => setB(e.detail.value!)}
            ></IonInput>
            <IonButton onClick={countNumbers}>Обчислити</IonButton>
          </IonItem>
          {result !== null && (
            <IonLabel>
              Кількість чисел, які задовольняють умову: {result}
            </IonLabel>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Task2;
