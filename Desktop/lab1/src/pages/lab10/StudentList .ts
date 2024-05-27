import Student from "./Student";
import Controller from "./Controller";

class StudentList {
  private list: Student[] = [];
  private filteredList: Student[] = [];
  dataList: string[][] = this.filteredList.map(this.convert);

  constructor(controller: Controller) {
    this.add(new Student("Student1", 20, 90, 0));
    this.add(new Student("Student2", 21, 85, 1));
    this.add(new Student("Student3", 22, 88, 2));
    this.add(new Student("Student4", 23, 92, 3));
    this.add(new Student("Student5", 24, 87, 4));
    controller.specialty$.subscribe((specialty) => this.filter(specialty.code));
  }

  private convert(student: Student): string[] {
    return [
      `Name: ${student.name}`,
      `Age: ${student.age.toString()}`,
      `Grade: ${student.grade.toString()}`,
    ];
  }

  add(student: Student) {
    this.list.push(student);
    this.filter(student.specialty_code);
  }

  filter(specialtyCode: number) {
    this.filteredList = this.list.filter(
      (student) => student.specialty_code === specialtyCode
    );
    this.dataList = this.filteredList.map(this.convert);
    console.log(this.dataList);
  }
}

export default StudentList;
