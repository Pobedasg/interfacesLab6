import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonButtons,
} from "@ionic/react";
import './Task3.css';
import MyMenu from '../../components/menu/Menu';


const generateMatrix = (N: number): number[][] => {
  const matrix: number[][] = []; 
  for (let i = 0; i < N; i++) {
    matrix[i] = [];
    for (let j = 0; j < N; j++) {
      matrix[i][j] = Math.floor(Math.random() * 10); 
    }
  }
  return matrix;
};

const getProductOfOddColumns = (matrix: number[][]): number[] => {
  const N = matrix.length;
  const product = [];
  for (let j = 0; j < N; j++) {
    if (j % 2 !== 0) { 
      let columnProduct = 1;
      for (let i = 0; i < N; i++) {
        columnProduct *= matrix[i][j];
      }
      product.push(columnProduct);
    }
  }
  return product;
};

const Task3: React.FC = () => {
  const [N, setN] = useState(8); 
  const [matrix, setMatrix] = useState<number[][]>(generateMatrix(N)); 
  const [product, setProduct] = useState<number[]>(getProductOfOddColumns(matrix)); 


  const regenerateMatrix = () => {
    setMatrix(generateMatrix(N));
    setProduct(getProductOfOddColumns(matrix));
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
          <IonItem className="titlete">Завдання №3</IonItem>
          <IonItem>
            Згенерувати матрицю розміром NxN. Знайти добуток кожного непарного
            стовпчику матриці. Виокремити ці стовпчики за допомогою кольору
          </IonItem>
          <IonItem>
            <IonLabel>
              Розмір матриці: {N}x{N}
            </IonLabel>
            <IonButton onClick={() => regenerateMatrix()}>
              Згенерувати нову матрицю
            </IonButton>
          </IonItem>
          <table>
            <tbody>
              {matrix.map((row, i) => (
                <tr key={i}>
                  {row.map((value, j) => (
                    <td key={j} className={j % 2 !== 0 ? "highlight" : ""}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <IonItem>
            <IonLabel>
              Добуток непарних стовпчиків: {product.join(", ")}
            </IonLabel>
          </IonItem>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Task3;
