import { BehaviorSubject } from "rxjs";
import Speciality from "./Speciality";

class Controller {
    spec$: BehaviorSubject<Speciality>;

    constructor(initialCity: Speciality) {
        this.spec$ = new BehaviorSubject<Speciality>(initialCity ?? new Speciality("0", "Computer Science"));
    }

    select(spec: Speciality) {
        this.spec$.next(spec);
    }
}

export default Controller;