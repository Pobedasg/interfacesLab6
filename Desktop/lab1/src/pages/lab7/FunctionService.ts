import { LogService } from "./LogService";
export class FunctionService {
  static calculate(x: number, i: number) {
    return (
      (Math.PI ** 2 - 3 * x ** 2) / 12 -
      x ** 2 / 24 +
      (this.taylorSeries(x, i) * x ** 2) / 12
    );
  }

  static taylorSeries(x: number, n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      const sign = Math.pow(-1, i + 1);
      const term = Math.cos(i * x) / Math.pow(i, 2);
      sum += sign * term;
    }

    return sum;
  }

  static tabulate(startX: number, endX: number, step: number, i: number): void {
    LogService.log("x\tf(x)");
    LogService.log("--------------------");
    for (let x = startX; x <= endX; x += step) {
      const result = FunctionService.calculate(x, i);
      LogService.log(`${x.toFixed(2)}\t${result.toFixed(5)}`);
    }
  }
}
