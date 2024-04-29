import React, { useEffect, useRef, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonItem,
  IonToolbar,
  IonInput,
  InputCustomEvent,
  InputChangeEventDetail,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import MyMenu from "../../components/menu/Menu";
import { Dog } from "./models/Dog";
import { Taksa } from "./models/Taksa";
import { Alabai } from "./models/Alabai";
import { Husky } from "./models/Husky";
import "./Lab4.css";

function Lab4() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    let temp = [];
    temp.push(new Taksa(50, 21));
    temp.push(new Alabai(60, 40));
    temp.push(new Taksa(55, 25));
    temp.push(new Taksa(63, 29));
    temp.push(new Taksa(48, 23));
    temp.push(new Alabai(80, 70));
    temp.push(new Alabai(86, 74));
    temp.push(new Taksa(102, 54));
    temp.push(new Taksa(86, 45));

    let min = temp[0].mealCalculation();
    let minIndex = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].mealCalculation() < min) {
        min = temp[i].mealCalculation();
        minIndex = i;
      }
    }

    setDogs(temp);
    setIndex(minIndex);
  }, []);

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
            <IonTitle>Лабораторна робота № 4</IonTitle>
            <IonTitle>
              Виконала студентка групи КН-32 Кодовбецька В. І.
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem className="titlete">Завдання №2</IonItem>
          <IonItem>Знайти тварину, яка їсть менше за всіх</IonItem>
          {dogs.map((dogs, indexDogs) => {
            return (
              <IonList className={indexDogs == index ? "change" : ""}>
                <IonItem className={indexDogs == index ? "change" : ""}>
                  {dogs instanceof Taksa ? " Taksa" : " Alabai"}
                </IonItem>
                <IonItem> Length = {dogs.length} </IonItem>
                <IonItem>Weight = {dogs.weight}</IonItem>
                <IonItem>
                  Food = {Math.round(dogs.mealCalculation() * 100) / 100}
                </IonItem>
              </IonList>
            );
          })}
        </IonContent>
      </IonPage>
    </>
  );
}
export default Lab4;
