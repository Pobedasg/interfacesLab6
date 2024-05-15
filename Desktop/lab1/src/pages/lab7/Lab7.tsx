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
  IonInput,
} from "@ionic/react";
import MenuComp from "../../components/menu/MenuComp";
import Header from "../../components/Header";
import { FunctionService } from "./FunctionService";
import { LogService } from "./LogService";
import { RecursionService } from "./RecursionService";
import { TabService } from "./TabService";
import { map } from "ionicons/icons";
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

function Lab7() {
  const [x, setX] = useState<number>(0);
  const [i, setI] = useState<number>(0);
  const [resultCalculate, setResultCalculate] = useState<number>(0);
  const [resultTaylor, setResultTaylor] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [mapres, setMapres] = useState<Array<any>>([]);
  const [vision, setVision] = useState<boolean>(false);

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

  useEffect(() => {
    setData({
      labels: mapres.map((row) => Math.round(row.x * 100) / 100) as never[],
      datasets: [
        {
          label: "func",
          data: mapres.map((row) => row.y) as never[],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  }, [mapres]);

  return (
    <>
      <MenuComp />
      <IonPage id="main-content">
        <Header title="Лабораторна робота № 7" />
        <IonContent fullscreen>
          <IonCard>
            <IonItem className="titlete">Завдання</IonItem>
            <IonCardContent>
              1. Розробити сервіс для табулювання функції відповідно до варіанту
              <br />
              2. Розробити сервіс для розрахунку значень функції за допомогою
              ряду відповідно до варіанту
              <br /> 3. Розробити сервіс для розрахунку значень функції за
              допомогою рекурсії відповідно до варіанту
              <br /> 4. Розробити сервіс для логування обчислених значень у
              консоль та використати його у попередніх трьох сервісах
              <br /> 5. У основному застосунку підключити сервіси, вивести
              результати усіх розрахунків та побудувати графіки для усіх
              обрахунків.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>Enter the values "X" and "I"</IonCardHeader>
            <IonCardContent>
              <IonInput
                placeholder="Enter X"
                type="number"
                onIonChange={(e) => setX(parseFloat(e.detail.value as string))}
              ></IonInput>
              <IonInput
                placeholder="Enter I"
                type="number"
                onIonChange={(e) => setI(parseFloat(e.detail.value as string))}
              ></IonInput>
              <IonButton
                onClick={() => {
                  setVision(true);

                  let arr: Array<any> = [];
                  TabService.tabulation(1, 3, 0.1).forEach((value, key) => {
                    arr.push({ x: key, y: value });
                  });
                  setMapres(arr);

                  setResultCalculate(FunctionService.calculate(x, i));
                  setResultTaylor(FunctionService.taylorSeries(x, i));

                  setResult(RecursionService.calculateSeriesSum(x, i));
                }}
              >
                Calc{" "}
              </IonButton>
            </IonCardContent>
          </IonCard>
          {vision ? (
            <>
              <IonCard>
                <IonCardContent>
                  <IonCardHeader> Tabulation Service:</IonCardHeader>
                  {mapres?.map((item) => {
                    return (
                      <IonItem>
                        X = {Math.round(item.x * 1000) / 1000} | Y =
                        {Math.round(item.y * 1000) / 1000}
                      </IonItem>
                    );
                  })}
                  <Line options={options} data={data} />;
                </IonCardContent>
              </IonCard>
              {/* Math.round(14.00002*100)/100 */}
              <IonCard>
                <IonItem>
                  <IonCardHeader> Calculate with series:</IonCardHeader>
                  {Math.round(resultCalculate * 1000) / 1000}
                </IonItem>
                <Line options={options} data={data} />;
              </IonCard>

              <IonCard>
                <IonItem>
                  <IonCardHeader>Series: </IonCardHeader>
                  {Math.round(resultTaylor * 1000) / 1000}
                </IonItem>
              </IonCard>
              <IonCard>
                <IonItem>
                  <IonCardHeader>Recursive function:</IonCardHeader>
                  {Math.round(result * 1000) / 1000}
                </IonItem>
                <Line options={options} data={data} />;
              </IonCard>
            </>
          ) : (
            <></>
          )}
        </IonContent>
      </IonPage>
    </>
  );
}

export default Lab7;
