function ageClassification(age) {
  return age > 0
    ? age > 24
      ? age > 44
        ? age > 65
          ? age > 75
            ? age > 90
              ? age > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null;
}
console.log('-1 :', ageClassification(-1)); 
console.log('1 :', ageClassification(1)); 
console.log('24 :', ageClassification(24)); 
console.log('24.01 :', ageClassification(24.01)); 
console.log('44 :', ageClassification(44)); 
console.log('44.01 :', ageClassification(44.01)); 
console.log('65 :', ageClassification(65)); 
console.log('65.1 :', ageClassification(65.1));
console.log('75 :', ageClassification(75)); 
console.log('75.01 :', ageClassification(75.01));
console.log('90 :', ageClassification(90)); 
console.log('90.01 :', ageClassification(90.01)); 
console.log('122 :', ageClassification(122)); 
console.log('122.01 :', ageClassification(122.01)); 
console.log('150 :', ageClassification(150)); 


function weekFn(num) {
  var day = "";
  switch (num) {
    case 1:
      day = "Понедельник";
      break;
    case 2:
      day = "Вторник";
      break;
    case 3:
      day = "Среда";
      break;
    case 4:
      day = "Четверг";
      break;
    case 5:
      day = "Пятница";
      break;
    case 6:
      day = "Суббота";
      break;
    case 7:
      day = "Воскресенье";
      break;
    default:
      day = null;
  }
  return day;
}
console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn("2"));
