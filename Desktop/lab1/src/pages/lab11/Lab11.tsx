import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../../components/Header";
import { useEffect, useMemo, useState } from "react";
import MyMenu from "../../components/menu/Menu";
import dbApi  from "./services/db";
import Student from "./classes/Student";
import SpecialityList from "./classes/Speciality/List";
import Controller from "./classes/Controller";
import StudentList from "./classes/Student/List";
import Speciality from "./classes/Speciality";


const Lab11: React.FC = () => {
const api = dbApi;
  const [listSpecialities, setListSpecialities] = useState<Speciality[]>([]);
  const [listStudents, setListStudents] = useState<Student[]>([]);
  const specialityList = useMemo(() => new SpecialityList(api, listSpecialities), [listSpecialities]);
  const controller = useMemo(() => new Controller(specialityList.first), [specialityList]);
  const studentsList = useMemo(
    () => new StudentList(controller, api, listStudents),
    [controller, listStudents]
  );
  const [spec, setSpec] = useState(specialityList.first);
  useEffect(() => {
    const sub = controller.spec$.subscribe(setSpec);
    return () => sub.unsubscribe();
  }, [listSpecialities, listStudents]);
  const addSpecialty = async (name: string) => {
    const special = new Speciality(specialityList.list.length+"", name);
    await specialityList.add(special);
  };
  const [data, setData] = useState(studentsList.dataList);
  useEffect(() => {
    const fetchSp = async () => {
      const sp = await api.listSpecialties();
      setListSpecialities(sp as Speciality[]);
    };
    const fetchSt = async () => {
      const st = await api.listStudents();
      setListStudents(st as Student[]);
    };
    fetchSp();
    fetchSt();
  }, []);

  useEffect(() => {
    setData(studentsList.dataList);
  }, [listStudents, listSpecialities]);
  const addStudent = async (
   name: string,
    age: number,
    grade: number,
  ) => {
    await studentsList.add(
      new Student(name, age, grade, spec.code)
    );
  };
  const nextSpecialty = () => {
    const indx = specialityList.list.findIndex((s) => s.code === spec.code);
    const nextSp = specialityList.list[(indx + 1) % specialityList.list.length];
    controller.select(nextSp);
    setData(studentsList.dataList);
  };

  


  
  return (
    <>
      <MyMenu title="Lab11" />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Header title="Лабораторна робота № 11" />
        <IonContent fullscreen>
          <IonItem className="titlete">Завдання</IonItem>
          <IonCard>
            <IonCardContent>
              Необхідно змінити лабораторну роботу № 10 додавши наступні
              функціональні можливості; <br />
              1. Збереження даних у БД FireBase <br />
              2. Зчитування даних з БД у застосунку <br />
              3. Відображення даних <br />
              4. Додавання даних <br /> На додаткові бали можна реалізувати:{" "}
              <br />
              5. Видалення даних у дочірній таблиці– 1 бал <br /> 6. Редагування
              даних у дочірній таблиці – 1 бал <br />
              7. Видалення даних у довіднику (необхідно врахувати, що при
              видаленні даних у довіднику повинні видатися усі пов’язані з ним
              дані у дочірній таблиці. Наприклад, при видалені певної мови
              видаляються усі книги з цією мовою) – 2 бали <br />
              8. Редагування даних у довіднику – 1 бал
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardTitle>
              <p>
                Довідник спеціальностей та список студентів різних
                спеціальностей
              </p>
            </IonCardTitle>
            <IonCardContent>
              <hr />
              <p>Спеціальність: {spec?.name ?? ""}</p>
              <div>
                <p>Студенти</p>
        {data.map((st, indx) => (
            <IonCard key={indx}>
              {st.map((line, indx) => (
                <p key={indx}>{line}</p>
              ))}
            </IonCard>
          ))}
                <IonButton expand="full" onClick={nextSpecialty}>
                  Наступна спеціальність
                </IonButton>
              </div>
            </IonCardContent>
            <IonCardContent>
                    <div>
          <h3>Додати нову спеціальність</h3>
          <form
            onSubmit={async (e: any) => {
              e.preventDefault();
              const name = e.target.elements.name.value;
              await addSpecialty(name);
              console.log("Suceess add speciality");
            }}
          >
            <label>
              Назва спеціальності:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Додати спеціальність" />
          </form>
        </div>
            </IonCardContent>
            <IonCardContent>
                <div>
          <h3>Додати нового студента</h3>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            onSubmit={async (e: any) => {
              e.preventDefault();
              const name = e.target.elements.name.value;
              const age = e.target.elements.age.value;
              const grade = e.target.elements.grade.value;
              await addStudent(
                name,
                parseInt(age),
                parseInt(grade),
              );
              setData(studentsList.dataList);
              console.log("Suceess add student");
            }}
          >
            <label>
              Ім'я студента:
              <input type="text" name="name" required />
            </label>
            <label>
              Вік:
              <input type="number" name="age" required />
            </label>
            <label>
              Оцінка:
              <input type="number" name="grade" required />
            </label>
            <input type="submit" value="Додати Студента" />
          </form>
        </div>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Lab11;
