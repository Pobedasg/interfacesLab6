import Student from ".";
import Controller from "../Controller";
import { DBApi } from "../../services/db";

class StudentList {
    private filteredList: Student[] = [];
    dataList: string[][] = this.filteredList.map(this.convert);

    constructor(
        controller: Controller,
        private api: DBApi,
        private list: Student[] = []
    ) {
        controller.spec$.subscribe((spec) => this.filter(spec.code));
    }

    private convert(student: Student): string[] {
        return [
            `Ім'я: ${student.name}`,
            `Вік: ${student.age.toString()}`,
            `Оцінка: ${student.grade.toString()}`,
        ];
    }

    async add(student: Student) {
        this.list.push(student);
        await this.api.createStudent(student.toModel());
        this.filter(student.specialty_code);
    }

    filter(code: string) {
        console.log("Filtering by", this.list);
        this.filteredList = this.list.filter(
            (student) => student.specialty_code === code
        );
        this.dataList = this.filteredList.map(this.convert);
        console.log(this.dataList);
    }
}

export default StudentList;