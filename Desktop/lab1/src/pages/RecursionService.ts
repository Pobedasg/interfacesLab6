import { LogService } from "./LogService";
export class RecursionService {
  static calculateSeriesSum(
    x: number,
    j: number = 1,
    precision: number = 10e-6,
    sum: number = 0
  ): any {
    // Базовий випадок: якщо досягнуто точності
    if (
      Math.abs((Math.pow(-1, j + 1) * Math.cos(j * x)) / Math.pow(j, 2)) <
      precision
    )
      return sum;

    // Рекурсивний випадок: додати поточний член і викликати функцію з наступним членом
    return this.calculateSeriesSum(
      x,
      j + 1,
      precision,
      sum + (Math.pow(-1, j + 1) * Math.cos(j * x)) / Math.pow(j, 2)
    );
  }

  static tabulateSeries(xStart: number, xEnd: number, stepSize: number)
  {
    let arr = [];
    LogService.log(`Табулювання від ${xStart} до ${xEnd} з кроком ${stepSize}:`);
    for (let x = xStart; x <= xEnd; x += stepSize) {
      let sum = this.calculateSeriesSum(x);
        arr.push({ x: x, y: sum });
      LogService.log(`x: ${x}, Сума: ${sum}`);
    }
    return arr;
  }
 
   
}

// console.log(
//   new RecursionService().tabulateSeries(0, Math.PI / 2, Math.PI / 10)
// );

// Приклад використання:
// this.tabulateSeries(0, Math.PI / 2, Math.PI / 10); // Табулює ряд від 0 до π/2 з кроком π/10
