describe("Тестирование функции weekFn",  () => {
  it("Функция должна определить день недели с порядковым номером 1", () => {
    const numDay = new weekFn(1);
    expect(weekFn(1)).toBe("Понедельник");
  });

  it("Функция должна определить день недели с порядковым номером 3", () => {
    const numDay = new weekFn(3);
    expect(weekFn(3)).toBe("Среда");
  });

  it("Функция должна определить день недели с порядковым номером 7", () => {
    const numDay = new weekFn(7);
    expect(weekFn(7)).toBe("Воскресенье");
  });

  it("Функция должна определить день недели с порядковым номером 9", () => {
    const numDay = new weekFn(9);
    expect(weekFn(9)).toBe(null);
  });

  it("Функция должна определить день недели с порядковым номером 1.5", () => {
    const numDay = new weekFn(1.5);
    expect(weekFn(1.5)).toBe(null);
  });

  it("Функция должна определить день недели с порядковым номером '2' ", () => {
    const numDay = new weekFn('2');
    expect(weekFn('2')).toBe(null);
  });
});