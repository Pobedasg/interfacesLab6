import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonCard,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";
import MenuComp from "../../components/menu/MenuComp";
import Header from "../../components/Header";
import { Laborer } from "./Laborer";

function Lab6() {
  const [laborer, setLaborer] = useState<Laborer>();
  const [vision, setVision] = useState<boolean>(false);

  useEffect(() => {
    let temp_laborer = new Laborer(
      "Blue",
      "Mike",
      "male",
      new Date(1987, 4, 10, 0, 0, 0, 0),
      "high",
      10,
      "engineer",
      600,
      "Monday",
      2
    );
    setLaborer(temp_laborer);

    temp_laborer.setSalary(900);
  }, []);

  return (
    <>
      <MenuComp />
      <IonPage id="main-content">
        <Header title="Лабораторна робота № 6" />
        <IonContent fullscreen>
          <IonCard>
            <IonItem className="titlete">Завдання</IonItem>
            <IonItem>Дана наступна ієрархія класів:</IonItem>
            <IonItem> Службовець, персона, робочий, інженер</IonItem>
          </IonCard>
          <IonButton
            onClick={() => {
              setVision(true);
            }}
          >
            Calc{" "}
          </IonButton>
          {vision ? (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  {`${(laborer as Laborer).firstName} `}
                  {(laborer as Laborer).lastName}
                </IonCardTitle>
                <IonCardSubtitle>
                  {`${(laborer as Laborer).gender}, `}
                  {(laborer as Laborer).dateOfBirth.toLocaleDateString()}
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                {`${(laborer as Laborer).specialty}, `}
                {`${(laborer as Laborer).position}, `}
                Experience {`${(laborer as Laborer).experience}, `}
                Salary {`${(laborer as Laborer).salary}, `}
                <br></br>
               Working Days: {`${(laborer as Laborer).workingDays}, `}
               Working Hours: {`${(laborer as Laborer).workingHours}, `}
              </IonCardContent>
            </IonCard>
          ) : (
            <></>
          )}
        </IonContent>
      </IonPage>
    </>
  );
}

export default Lab6;
