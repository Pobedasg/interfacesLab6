import { IPerson } from "./IPerson";
import { IEmployee } from "./IEmployee";

export type dayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";
export type sex = "male" | "female";
export class Laborer implements IPerson, IEmployee {
  lastName!: string;
  firstName!: string;
  gender!: sex;
  dateOfBirth!: Date;
  position!: string;
  experience!: number;
  specialty!: string;
  salary!: number;
  workingDays!: dayOfWeek;
  workingHours!: number;

  constructor(
    lastName: string,
    firstName: string,
    gender: sex,
    dateOfBirth: Date,
    position: string,
    experience: number,
    specialty: string,
    salary: number,
    workingDays: dayOfWeek,
    workingHours: number
  ) {
    this.setLastName(lastName);
    this.setFirstName(firstName);
    this.setGender(gender);
    this.setDateOfBirth(dateOfBirth);
    this.setPosition(position);
    this.setExperience(experience);
    this.setSpecialty(specialty);
    this.setSalary(salary);
    this.setWorkingDays(workingDays);
    this.setWorkingHours(workingHours);

  }

  setLastName(last: string): void {
    this.lastName = last;
  }
  getLastName(): string {
    return this.lastName;
  }
  setFirstName(first: string): void {
    this.firstName = first;
  }
  getFirstName(): string {
    return this.firstName;
  }
  setGender(gen: sex): void {
    this.gender = gen;
  }
  getGender(): sex {
    return this.gender;
  }
  setDateOfBirth(date: Date): void {
    let temp = new Date().getTime() - date.getTime();
    temp = temp / 1000 / 60 / 60 / 24 / 365;
    if (temp < 18) {
      throw Error ("Вік не може бути менше за 18")
    }
    this.dateOfBirth = date;
    //console.log(temp);
    
  // if (date < new Date().getFullYear) this.dateOfBirth = date;
  }
  getDateOfBirth(): Date {
    return this.dateOfBirth;
  }
  setPosition(pos: string): void {
    this.position = pos;
  }
  getPosition(): string {
    return this.position;
  }
  setExperience(exp: number): void {
    if (exp > 0) {
      this.experience = exp;
    }
    else {
      throw Error("Досвід не може бути менше 0");
    }
  }
  getExperience(): number {
    return this.experience;
  }
  setSpecialty(spec: string): void {
    this.specialty = spec;
  }
  getSpecialty(): string {
    return this.specialty;
  }
  setSalary(sal: number): void {
   
    if (sal > 0) {
      this.salary = sal;
    } else {
      throw Error("Зарплата не може бути менше 0");
    }
  }
  getSalary(): number {
    return this.salary;
  }
  setWorkingDays(worDays: dayOfWeek): void {
    this.workingDays = worDays;
  }
  getWorkingDays(): dayOfWeek {
    return this.workingDays;
  }
  setWorkingHours(worHours: number): void {
    this.workingHours = worHours;
  }
  getWorkingHours(): number {
    return this.workingHours;
  }
}
