class Speciality {
    code: string;
    name: string;
    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }

    toModel() {
        return {
            code: this.code,
            name: this.name
        };
    }
}

export default Speciality;