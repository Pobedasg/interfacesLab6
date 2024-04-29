export interface IEmployee {
  position: string;
  experience: number;
  specialty: string;
  salary: number;

  setPosition(pos: string): void;
  getPosition(): string;

  setExperience(exp: number): void;
  getExperience(): number;

  setSpecialty(spec: string): void;
  getSpecialty(): string;

  setSalary(sal: number): void;
  getSalary(): number;
}

