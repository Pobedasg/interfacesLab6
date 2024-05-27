import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Specialty from "./Specialty ";
import SpecialtyList from "./SpecialtyList";
import Student from "./Student";
import StudentList from "./StudentList ";
import Controller from "./Controller";
import Header from "../../components/Header";
import { useEffect, useMemo, useState } from "react";
import MenuComp from "../../components/menu/MenuComp";
import MyMenu from "../../components/menu/Menu";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Dropdown from "./components/Dropdown";

const Lab10: React.FC = () => {
  const specialtyList = useMemo(() => new SpecialtyList(), []);
  const controller = useMemo(
    () => new Controller(specialtyList.first),
    [specialtyList]
  );
  const studentList = useMemo(() => new StudentList(controller), [controller]);
  const [specialty, setSpecialty] = useState(specialtyList.first);
  const [data, setData] = useState(studentList.dataList);

  useEffect(() => {
    const sub = controller.specialty$.subscribe((newSpecialty) => {
      setSpecialty(newSpecialty);
      setData(studentList.dataList); // Update data when specialty changes
    });
    return () => sub.unsubscribe();
  }, [controller, studentList]);

  const addSpecialty = (name: string) => {
    specialtyList.add(new Specialty(specialtyList.list.length, name));
  };

  const addStudent = (name: string, age: number, grade: number) => {
    studentList.add(new Student(name, age, grade, specialty.code));
    setData(studentList.dataList); // Update data after adding a student
  };

  const nextSpecialty = () => {
    const indx = specialtyList.list.findIndex((c) => c.code === specialty.code);
    const nextSpecialty =
      specialtyList.list[(indx + 1) % specialtyList.list.length];
    controller.select(nextSpecialty);
  };

  return (
    <>
      <MyMenu title=" Lab10" />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Header title="Лабораторна робота № 10" />
        <IonContent fullscreen>
          <IonItem className="titlete">Завдання</IonItem>
          <IonCard>
            <IonCardContent>
              1. Розробити сервіс для спостерігання за значенням у довіднику, що
              змінюється відповідно до завдання. Довідник необхідно представити
              у вигляді класу.
              <br /> 2. Розробити клас для збереження списку значень,
              реалізувавши додавання нових значень до списку.
              <br /> 3. Розробити клас який пов’язаний з попереднім значенням
              відповідно до завдання. Даний клас повинен мати не менше, аніж 5
              полів.
              <br /> 4. Розробити клас для роботи зі списком об’єктів класу
              вказаного у попередньому пункті. <br /> 5. У основному застосунку
              реалізувати можливість додавання нових значень у довідник та нових
              значень для класу описаному у пункті 3.
            </IonCardContent>
          </IonCard>
          <p>
            Довідник спеціальностей та список студентів різних спеціальностей
          </p>
          <hr />
          <p>Спеціальність: {specialty.name}</p>
          <div>
            <p>Студенти</p>
            {data.map((student, indx) => (
              <IonCard key={indx}>
                {student.map((line, indx) => (
                  <p key={indx}>{line}</p>
                ))}
              </IonCard>
            ))}
          </div>
          <IonButton expand="full" onClick={nextSpecialty}>
            Наступна спеціальність
          </IonButton>
          <div>
            <h3>Додати нову спеціальність</h3>
            <form
              onSubmit={(e: any) => {
                e.preventDefault();
                const specialty = e.target.elements.name.value;
                addSpecialty(specialty);
              }}
            >
              <Input
                inputStyle="box"
                labelStyle="floating"
                startIcon="plus"
                placeholder="Назва спеціальності"
                label="Назва спеціальності"
                name="name"
              />
              <input type="submit" value="Додати спеціальність" />
            </form>
          </div>
          <div>
            <h3>Додати нового студента</h3>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              onSubmit={(e: any) => {
                e.preventDefault();
                const name = e.target.elements.name.value;
                const age = e.target.elements.age.value;
                const grade = e.target.elements.grade.value;
                addStudent(name, parseInt(age), parseInt(grade));
              }}
            >
              <Input
                inputStyle="box"
                labelStyle="floating"
                startIcon="user4"
                placeholder="Ім'я студента"
                label="Ім'я студента"
                name="name"
              />
              <Input
                inputStyle="box"
                labelStyle="floating"
                startIcon="calendar"
                placeholder="Вік"
                type="number"
                label="Вік"
                name="age"
              />
              <Input
                inputStyle="box"
                labelStyle="floating"
                startIcon="grade"
                placeholder="Оцінка"
                type="number"
                label="Оцінка"
                name="grade"
              />
              <input type="submit" value="Додати Студента" />
            </form>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Lab10;
