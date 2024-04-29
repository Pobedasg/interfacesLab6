import { Laborer } from "./Laborer";

describe("Laborer Testing", () => {
  let laborer: Laborer;

  beforeEach(() => {
    laborer = new Laborer('Mike', 'Blue', 'male', new Date(1987,4,10,0,0,0,0),'high', 10, 'engineer', 600, "Monday", 2);
  });

  it("Створення екземляру класу", () => {
    expect(laborer).toBeTruthy();
  });

    it("Створення екземляру класу з від'ємним значенням досвіду ", () => {
      expect(
        () =>
          new Laborer(
            "Blue",
            "Mike",
            "male",
            new Date(1987, 4, 10, 0, 0, 0, 0),
            "high",
            -10,
            "engineer",
            600,
            "Monday",
            2
          )
      ).toThrow(new Error("Досвід не може бути менше 0"));
    });
  
     it("Створення екземляру класу з від'ємним значенням зарплати ", () => {
      expect(
        () =>
          new Laborer(
            "Blue",
            "Mike",
            "male",
            new Date(1987, 4, 10, 0, 0, 0, 0),
            "high",
            10,
            "engineer",
            -600,
            "Monday",
            2
          )
      ).toThrow(new Error("Зарплата не може бути менше 0"));
    });

  
     it("Створення екземляру класу з незадовільною датою народження ", () => {
       expect(
         () =>
           new Laborer(
             "Blue",
             "Mike",
             "male",
             new Date(2008, 4, 10, 0, 0, 0, 0),
             "high",
             10,
             "engineer",
             600,
             "Monday",
             2
           )
       ).toThrow(new Error("Вік не може бути менше за 18"));
     });
  
it("Створення екземляру класу із задовільним значенням досвіду", () => {
  laborer.setExperience(12);
  expect(laborer.getExperience()).toEqual(12);
});
  
  it("Створення екземляру класу із задовільним значенням зарплати", () => {
    laborer.setSalary(800);
    expect(laborer.getSalary()).toEqual(800);
  });
    
it("Створення екземляру класу із задовільним значенням дати народження", () => {
  laborer.setDateOfBirth(new Date(1993, 7, 12, 0, 0, 0, 0));
  expect(laborer.getDateOfBirth().getTime()).toEqual(
    new Date(1993, 7, 12, 0, 0, 0, 0).getTime()
  );
});

  
  

});
