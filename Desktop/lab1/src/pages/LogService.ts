export class LogService {
  static log(message: string) {
    console.log(`[${new Date().toLocaleTimeString()}] - ${message}`);
  }

  static warn(message: string) {
    console.warn(`[${new Date().toLocaleTimeString()}] - ${message}`);
  }

  static error(message: string) {
    console.error(`[${new Date().toLocaleTimeString()}] - ${message}`);
  }
}
