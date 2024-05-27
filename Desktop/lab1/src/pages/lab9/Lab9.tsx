// src/pages/Lab8/Lab8.tsx
import React, { useState, ChangeEvent, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonItem,
  IonInput,
  IonButton,
  IonCardContent,
  InputChangeEventDetail,
  InputCustomEvent,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import MenuComp from "../../components/menu/MenuComp";
import Header from "../../components/Header";
import * as Yup from "yup";
import { validationSchema } from "../lab8/validators/validationSchema";
import { validateField } from "../lab8/validators/validationService";
import MyMenu from "../../components/menu/Menu";

const defaultProduct = {
  name: "",
  unit: "",
  quantity: "",
  price: "",
  manufacturers: [""],
};

type Product = typeof defaultProduct;

const Lab9: React.FC = ({ product, setProduct }: any) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // const validateField = async (name: string, value: number) => {
  //   try {
  //     console.log(value);

  //     await validationSchema.validateAt(name, { [name]: value });
  //   } catch (err: any) {
  //     console.log(1);

  //     setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
  //   }
  // };

  const handleInputChange = (e: InputCustomEvent<InputChangeEventDetail>) => {
    const { name, value } = e.target;
    console.log(name, value, e.target);

    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };
  const handleInputNumberChange = async (
    e: InputCustomEvent<InputChangeEventDetail>
  ) => {
    const { name, value } = e.target;
    console.log(name, value, e.target);

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: parseInt(value as string),
    }));
    let text: string = await validateField(name, parseInt(value as string));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: text }));
  };

  const handleManufacturerChange = (index: number, value: string) => {
    const updatedManufacturers = [...product.manufacturers];
    updatedManufacturers[index] = value;
    setProduct({ ...product, manufacturers: updatedManufacturers });
  };

  const handleAddManufacturer = () => {
    setProduct({ ...product, manufacturers: [...product.manufacturers, ""] });
  };

  const handleRemoveManufacturer = (index: number) => {
    const updatedManufacturers = [...product.manufacturers];
    updatedManufacturers.splice(index, 1);
    setProduct({ ...product, manufacturers: updatedManufacturers });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(product, { abortEarly: false });
      console.log("Product submitted:", product);
      setProduct(defaultProduct);
    } catch (err: any) {
      const validationErrors: { [key: string]: string } = {};
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <MyMenu title=" Lab9" />
      <IonPage id="main-content">
        <Header title="Лабораторна робота № 9" />
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <IonItem className="titlete">Завдання</IonItem>
            <IonCardContent>
              Необхідно додати до застосунку, що був розроблений у попередній
              лабораторній роботі ще однин компонент призначений для перегляду
              та редагування усіх даних, що були введені під час роботи
              застосунку. Дані додаються у компонент для перегляду одразу після
              натискання кнопки Submit на головній сторінці. Компонент для
              виведення необхідно під’єднати до головної сторінки.
            </IonCardContent>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "20px",
              }}
            >
              <IonItem>
                <IonInput
                  name="name"
                  placeholder="Назва товару"
                  value={product.name}
                  onIonChange={handleInputChange}
                  required
                />
              </IonItem>
              {errors.name && <p className="error">{errors.name}</p>}

              <IonItem>
                <IonInput
                  name="unit"
                  placeholder="Одиниця виміру"
                  value={product.unit}
                  onIonChange={handleInputChange}
                  required
                />
              </IonItem>

              <IonItem>
                <IonInput
                  name="quantity"
                  type="number"
                  placeholder="Кількість на складі"
                  value={product.quantity}
                  onIonChange={handleInputNumberChange}
                  required
                />
              </IonItem>
              {errors.quantity && <p className="error">{errors.quantity}</p>}

              <IonItem>
                <IonInput
                  name="price"
                  type="number"
                  placeholder="Ціна за одиницю"
                  value={product.price}
                  onIonChange={handleInputNumberChange}
                  required
                />
              </IonItem>
              {errors.price && <p className="error">{errors.price}</p>}

              <h3>Виробники:</h3>
              {product.manufacturers.map((manufacturer, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <IonInput
                    placeholder={`Виробник ${index + 1}`}
                    value={manufacturer}
                    onIonChange={(e) =>
                      handleManufacturerChange(index, e.detail.value!)
                    }
                  />
                  <IonButton onClick={() => handleRemoveManufacturer(index)}>
                    Remove
                  </IonButton>
                </div>
              ))}
              <IonButton onClick={handleAddManufacturer}>
                Add Manufacturer
              </IonButton>

              <IonButton type="submit">Submit</IonButton>
            </form>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Lab9;
