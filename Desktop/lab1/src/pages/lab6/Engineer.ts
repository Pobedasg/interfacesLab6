import { Laborer } from "./Laborer";
import { dayOfWeek } from "./Laborer";
import { sex } from "./Laborer";
export class Engineer extends Laborer {
  countOfOrders: number;
  level: number;

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
    workingHours: number,
    countOfOrders: number,
    level: number
  ) {
    super(
      lastName,
      firstName,
      gender,
      dateOfBirth,
      position,
      experience,
      specialty,
      salary,
      workingDays,
      workingHours
    );

    this.countOfOrders = countOfOrders;
    this.level = level;
    if (level < 1 || level > 5) {
      throw new Error("Недопустиме значення для рівня кваліфікації");
    }
  }

  setCountOfOrders(count: number): void {
    if (count > 0) {
      this.countOfOrders = count;
    }
    else {
    throw Error("Кількість виконаних замовлень не може бути менше 0");
      
    }
  }
  getCountOfOrders(): number {
    return this.countOfOrders;
  }

  setLevel(level: number): void {
    if (level > 0 && level < 6) {
      this.level = level;
    }
    else {
   throw Error("Недопустиме значення для рівня кваліфікації");
    
    }
  }
  getLevel(): number {
    return this.level;
  }
}