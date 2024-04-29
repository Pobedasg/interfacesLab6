import { Dog } from "./Dog";

 export class Alabai extends Dog  {
   mealCalculation(): number {
     return 0.8 * this.weight * this.length;
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
