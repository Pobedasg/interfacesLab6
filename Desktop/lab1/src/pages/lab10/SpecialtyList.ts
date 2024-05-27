import Specialty from "./Specialty ";

class SpecialtyList {
  list: Specialty[] = [];

  constructor() {
    this.add(new Specialty(0, "Computer Science"));
    this.add(new Specialty(1, "Mathematics"));
    this.add(new Specialty(2, "Physics"));
    this.add(new Specialty(3, "Chemistry"));
    this.add(new Specialty(4, "Biology"));
  }

  get first(): Specialty {
    return this.list[0];
  }

  add(specialty: Specialty) {
    this.list.push(specialty);
  }
}

export default SpecialtyList;
