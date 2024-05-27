import { BehaviorSubject } from "rxjs";
import Specialty from "./Specialty ";

class Controller {
  specialty$: BehaviorSubject<Specialty>;

  constructor(initialSpecialty: Specialty) {
    this.specialty$ = new BehaviorSubject<Specialty>(initialSpecialty);
  }

  select(specialty: Specialty) {
    this.specialty$.next(specialty);
  }
}

export default Controller;
