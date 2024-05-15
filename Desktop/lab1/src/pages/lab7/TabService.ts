import { LogService } from "./LogService";
export class TabService {
  static tabulation(
    xn: number = 0.1,
    xk: number = 3.14,
    h: number = 0.1
  ): Map<number, number> {
    let xy = new Map();
    let x = xn,
      y = 0.0;
    while (x <= xk) {
      y = (Math.PI ** 2 - 3 * x ** 2) / 12;
      xy.set(x, y);

      LogService.log("x=" + x.toFixed(2) + "y=" + y.toFixed(4));
      x = x + h;
    }
    return xy;
  }
}
