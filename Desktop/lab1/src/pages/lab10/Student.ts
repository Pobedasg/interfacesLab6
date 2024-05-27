class Student {
  name: string;
  age: number;
  grade: number;
  specialty_code: number;
  constructor(
    name: string,
    age: number,
    grade: number,
    specialty_code: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.specialty_code = specialty_code;
  }
}

export default Student;
