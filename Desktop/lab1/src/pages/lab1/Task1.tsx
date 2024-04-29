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
import "./Task1.css";
import { useRef, useState } from "react";
import MyMenu from "../../components/menu/Menu";

const Task1: React.FC = () => {
  const [count, setCount] = useState(0);
  const ref1 = useRef<HTMLIonInputElement>(null);
  const ref2 = useRef<HTMLIonInputElement>(null);
  const ref3 = useRef<HTMLIonInputElement>(null);

  const findMultiplesOf44 = () => {
  //  [
  //    {
  //      nameOfTheDepartment:
  //        "The Departrment of intelligent and information systems ",
  //      nameOfTeacher: "Illarionov Oleh Yevhenovych ",
  //      numberOfTeachers: 8,
  //      address: "Nezalezhnosti, 78 ",
  //    },
  //    {
  //      nameOfTheDepartment: "The Departrment of intellectual technologies ",
  //      nameOfTeacher: "Krasovska Hanna Valeriivna ",
  //      numberOfTeachers: 10,
  //      address: "Volkovycha, 17 ",
  //    },
  //    {
  //      nameOfTheDepartment:
  //        "The Departrment of cybersecurity and information protection ",
  //      nameOfTeacher: "Snytiuk Vitalii Yevhenovych ",
  //      numberOfTeachers: 9,
  //      address: "Bohomoltsia, 26 ",
  //    },
  //    {
  //      nameOfTheDepartment:
  //        "The Departrment of software systems and technologies ",
  //      nameOfTeacher: "Domanetska Iryna Mykolaivna ",
  //      numberOfTeachers: 8,
  //      address: "Myshuhy, 115 ",
  //    },
  //    {
  //      nameOfTheDepartment:
  //        "The Departrment of network and internet technologies ",
  //      nameOfTeacher: "Minayeva Juliia Ivanivna ",
  //      numberOfTeachers: 11,
  //      address: "Slobidska, 24 ",
  //    },
  //  ];
    let countTemp = 0;
    if (
      !isNaN(parseInt(ref1.current?.value! as string)) &&
      parseInt(ref1.current?.value! as string) % 44 === 0
    ) {
      countTemp++;
    }
    if (
      !isNaN(parseInt(ref2.current?.value! as string)) &&
      parseInt(ref2.current?.value! as string) % 44 === 0
    ) {
      countTemp++;
    }
    if (
      !isNaN(parseInt(ref3.current?.value! as string)) &&
      parseInt(ref3.current?.value! as string) % 44 === 0
    ) {
      countTemp++;
    }
    setCount(countTemp);
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
          <IonItem className="titlete">Завдання №1</IonItem>
          <IonItem>
            Задано три числа. Знайти кількість тих з них, які кратні 44.
          </IonItem>

          <IonItem>
            <IonInput ref={ref1} placeholder="Число 1" type="number"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput ref={ref2} placeholder="Число 2" type="number"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput ref={ref3} placeholder="Число 3" type="number"></IonInput>
          </IonItem>

          <IonButton onClick={findMultiplesOf44} className="search-button">
            Знайти
          </IonButton>
          <IonLabel>{count} разів</IonLabel>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Task1;
