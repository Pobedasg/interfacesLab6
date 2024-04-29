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
import "./Lab3.css";

type Item = {
  nameOfTheDepartment: string;
  nameOfTeacher: string;
  numberOfTeachers: number;
  address: string;
};

function Lab3() {
  const [number, setNumber] = useState<number>(0);
  const [listOfDepartment, setListOfDepartment] = useState<Item[]>([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/65f1e7291f5677401f3cfd0e")
      .then((res) => res.json())
      .then((json) => {
        setListOfDepartment(json.record);
      });
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
            <IonTitle>Лабораторна робота № 3</IonTitle>
            <IonTitle>
              Виконала студентка групи КН-32 Кодовбецька В. І.
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem className="titlete">Завдання №1</IonItem>
          <IonItem>
            Позначити кольором кафедри, де кількість викладачів перевищує
            введене у форму значення.
          </IonItem>
          <IonItem>
            <IonInput
              onIonChange={(e: InputCustomEvent<InputChangeEventDetail>) => {
                setNumber(e.target.value as number);
              }}
              placeholder="Number of teachers"
              type="number"
            ></IonInput>
          </IonItem>
          <IonList>
            {listOfDepartment.map((item, index) => {
              return (
                <IonItem key={index}>
                  <IonCard className={item.numberOfTeachers>number? "change":""}>
                    <IonCardHeader>
                      <IonCardTitle> {item.nameOfTheDepartment}</IonCardTitle>

                      <IonCardSubtitle> {item.nameOfTeacher}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Number Of Teachers:{item.numberOfTeachers}
                      <br />
                      Address: {item.address}
                    </IonCardContent>
                  </IonCard>
                </IonItem>
              );
            })}
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Lab3;
