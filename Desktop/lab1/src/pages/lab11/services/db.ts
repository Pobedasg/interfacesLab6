import { Database, get, ref, set } from "firebase/database";
import { db } from "../../../firebase";


type Student = {
    name: string;
    age: number;
    grade: number;
    specialty_code: string;
}

type Specialty = {
    code: string;
    name: string;
}

export class DBApi {
    constructor(private db: Database) { }

    async listStudents(): Promise<Student[]> {
        const stydentsRef = ref(this.db, "/Student");
        const snapshot = await get(stydentsRef);
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        } else {
            return [];
        }
    }

    async createStudent(student: Student) {
        const studentRef = ref(this.db, `Student/${student.age + student.grade}`);
        await set(studentRef, student);
    }

    async getStudent(code: number) {
        const specialityRef = ref(this.db, `Student/${code}`);
        const snapshot = await get(specialityRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    }

    async upsertListStudents(students: Student[]) {
        Promise.all(students.map((student) => this.createStudent(student)));
    }

    async listSpecialties(): Promise<Specialty[]> {
        const specialityRef = ref(this.db, "/Specialty");
        const snapshot = await get(specialityRef);
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        } else {
            return [];
        }
    }

    async createSpecialty(specialty: Specialty) {
        const specialityRef = ref(this.db, `Specialty/${specialty.code}`);
        await set(specialityRef, specialty);
    }

    async getSpecialty(code: number) {
        const specialityRef = ref(this.db, `Specialty/${code}`);
        const snapshot = await get(specialityRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    }

    async upsertListSpecialties(specialties: Specialty[]) {
        Promise.all(specialties.map((specialty) => this.createSpecialty(specialty)));
    }

}

export default new DBApi(db);