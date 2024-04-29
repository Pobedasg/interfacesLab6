export abstract class Dog {


  length: number;
  weight: number;
  constructor(length: number, weigth:number) {

    this.length = length;
    this.weight = weigth;
    
  }

  abstract mealCalculation(): number;
}

