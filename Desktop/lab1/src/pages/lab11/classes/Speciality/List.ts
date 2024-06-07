import Speciality from ".";
import { DBApi } from "../../services/db";

class SpecialityList {
    constructor(private api: DBApi, public list: Speciality[] = []) {
        console.log("SpecialityList created", list);
    }

    get first(): Speciality {
        return this.list[0];
    }

    async add(speciality: Speciality) {
        await this.api.createSpecialty(speciality.toModel());
        this.list.push(speciality);
    }
}

export default SpecialityList;