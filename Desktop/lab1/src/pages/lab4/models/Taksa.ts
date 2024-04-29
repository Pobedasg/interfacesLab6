import { Dog } from "./Dog";

 export class Taksa extends Dog  {
   mealCalculation(): number {
     return this.length * (1 / this.weight);
    
   }

   constructor(length: number, weigth: number) {
     super(length, weigth)
      if (this.length <= 0) {
        throw Error("L<=0");
      }
      if (this.weight <= 0) {
        throw Error("M<=0");
      }
   }

}
