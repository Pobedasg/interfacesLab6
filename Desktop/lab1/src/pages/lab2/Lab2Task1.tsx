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
  IonButton,
  IonLabel,
} from "@ionic/react";
import MyMenu from "../../components/menu/Menu";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Item = {
  varX: number;
  varY: number;
};
function Lab2Task1() {
  const [count, setCount] = useState<Item[]>([]);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  });
  const ref1 = useRef<HTMLIonInputElement>(null);
  const ref2 = useRef<HTMLIonInputElement>(null);
  const ref3 = useRef<HTMLIonInputElement>(null);
  const ref4 = useRef<HTMLIonInputElement>(null);
  const chart = useRef<HTMLCanvasElement>(null);

  const functionLab2 = () => {
    let Xn = parseFloat(ref1.current?.value as string);
    let Xk = parseFloat(ref2.current?.value as string);
    let h = parseFloat(ref3.current?.value as string);
    let a = parseFloat(ref4.current?.value as string);

    console.log(Xn, Xk, h, a);

    let arr: Item[] = [];
    for (let x = Xn; x < Xk; x += h) {
      let y;
      if (x <= 0) {
        y = Math.abs(x) * Math.sin(3 * x);
      } else if (x <= a) {
        y = Math.pow(x, 3) * Math.cos(x + 2);
      } else {
        y = Math.sin(Math.pow(x, 2)) + Math.pow(x, 0.25);
      }

      console.log(x, y);

      arr = [
        ...arr,
        { varX: Math.round(x * 100) / 100, varY: Math.round(y * 100) / 100 },
      ];
    }
    setCount(arr);
  };

  useEffect(() => {
    setData({
      labels: count.map((row) => row.varX) as never[],
      datasets: [
        {
          label: "func",
          data: count.map((row) => row.varY) as never[],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  }, [count]);

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
            <IonTitle>Лабораторна робота № 2</IonTitle>
            <IonTitle>
              Виконала студентка групи КН-32 Кодовбецька В. І.
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem className="titlete">Завдання №1</IonItem>
          <IonItem>
            Створити додаток для табулювання і виведення на екран значення
            функції, а також побудувати графік функції
          </IonItem>
          <IonItem>
            <IonInput ref={ref1} placeholder="Xn" type="number"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput ref={ref2} placeholder="Xk" type="number"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput ref={ref3} placeholder="h" type="number"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput ref={ref4} placeholder="a" type="number"></IonInput>
          </IonItem>
          <IonButton onClick={functionLab2} className="search-button">
            Знайти
          </IonButton>
          <Line options={options} data={data} />;
          {count.map((item, index) => {
            return (
              <IonItem key={index}>
                X = {item.varX} Y={item.varY}
              </IonItem>
            );
          })}
        </IonContent>
      </IonPage>
    </>
  );
}
export default Lab2Task1;
