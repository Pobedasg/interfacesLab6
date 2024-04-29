import { sex } from "./Laborer";
export interface IPerson {
  lastName: string;
  firstName: string;
  gender: sex;
  dateOfBirth: Date;

  setLastName(last: string): void;
  getLastName(): string;

  setFirstName(first: string): void;
  getFirstName(): string;

  setGender(gen: sex): void;
  getGender(): sex;

  setDateOfBirth(date: Date): void;
  getDateOfBirth(): Date;
}