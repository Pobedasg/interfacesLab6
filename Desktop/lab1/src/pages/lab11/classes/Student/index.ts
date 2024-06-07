class Student {
    name: string;
    age: number;
    grade: number;
    specialty_code: string;
    constructor(name: string, age: number, grade: number, specialty_code: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.specialty_code = specialty_code;
    }

    toModel() {
        return {
            name: this.name,
            age: this.age,
            grade: this.grade,
            specialty_code: this.specialty_code
        };
    }
}

export default Student;