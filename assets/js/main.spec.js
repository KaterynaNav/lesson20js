describe("Тестирование функции ageClassification", function () {

  it("Функция должна определить классификацию возраста -1 год",  () => {
    const person = new ageClassification(-1);
    expect(ageClassification(-1)).toBe(null);
  });

  it("Функция должна определить классификацию возраста 1 год", () => {
    const person = new ageClassification(1);
    expect(ageClassification(1)).toBe("детский возраст");
  });

  it("Функция должна определить классификацию возраста 24 года", () => {
    const person = new ageClassification(24);
    expect(ageClassification(24)).toBe("детский возраст");
  });
  it("Функция должна определить классификацию возраста 24.01 года", () => {
    const person = new ageClassification(24.01);
    expect(ageClassification(24.01)).toBe("молодой возраст");
  });
  it("Функция должна определить классификацию возраста 44 года", () => {
    const person = new ageClassification(44);
    expect(ageClassification(44)).toBe("молодой возраст");
  });
  it("Функция должна определить классификацию возраста 44.01 года", () => {
    const person = new ageClassification(44.01);
    expect(ageClassification(44.01)).toBe("средний возраст");
  });
  it("Функция должна определить классификацию возраста 65 лет", () => {
    const person = new ageClassification(65);
    expect(ageClassification(65)).toBe("средний возраст");
  });
  it("Функция должна определить классификацию возраста 65.1 лет", () => {
    const person = new ageClassification(65.01);
    expect(ageClassification(65.01)).toBe("пожилой возраст");
  });
  it("Функция должна определить классификацию возраста 75 лет", () => {
    const person = new ageClassification(75);
    expect(ageClassification(75)).toBe("пожилой возраст");
  });
  it("Функция должна определить классификацию возраста 75.01 лет", () => {
    const person = new ageClassification(75.01);
    expect(ageClassification(75.01)).toBe("старческий возраст");
  });
  it("Функция должна определить классификацию возраста 90 лет", () => {
    const person = new ageClassification(90);
    expect(ageClassification(90)).toBe("старческий возраст");
  });
  it("Функция должна определить классификацию возраста 90.01 год", () => {
    const person = new ageClassification(90.01);
    expect(ageClassification(90.01)).toBe("долгожители");
  });
  it("Функция должна определить классификацию возраста 122 года", () => {
    const person = new ageClassification(122);
    expect(ageClassification(122)).toBe("долгожители");
  });
  it("Функция должна определить классификацию возраста 122.01 год", () => {
    const person = new ageClassification(122.01);
    expect(ageClassification(122.01)).toBe(null);
  });
  it("Функция должна определить классификацию возраста 150 лет", () => {
    const person = new ageClassification(150);
    expect(ageClassification(150)).toBe(null);
  });

});
