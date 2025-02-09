// 1: Создаём пустой массив grades и заполняем случайными оценками от 1 до 100 для 12 студентов
const amountOfStudents = 12;
const grades = [];

//  Функция для генерации случайной оценки
function getRandomGrade() {
  return Math.floor(Math.random() * 100) + 1; 
}

// Функция для наполнения массива оценками
function fillGradesArray(amountOfStudents) {
  for (let i = 0; i < amountOfStudents; i++) {
    grades.push(getRandomGrade()); 
  }
}

//  Заполняем массив оценками для 12 студентов
fillGradesArray(amountOfStudents);

console.log('Оценки студентов:', grades);

// 2: Рассчитайте и выведите средний балл студентов, используя методы массивов.
function calcAverageGrade(grades) {
    if (grades.length === 0) return 0; 
    const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return Math.floor(sum / grades.length); 
  }
  const gradesAverageScore = calcAverageGrade(grades);
  console.log('Cредний балл студентов:', gradesAverageScore);


 // 3: Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
 function getMaxOfArray(grades) {
    return Math.max.apply(null, grades);
  }
  const maxGrade = getMaxOfArray(grades);
  console.log('Максимальный балл студентов:', maxGrade);

 // 4: Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
 function getMinOfArray(grades) {
    return Math.min.apply(null, grades);
  }
  const minGrade = getMinOfArray(grades);
  console.log('Минимальный балл студентов:', minGrade);


  //5: Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). 
  //Используйте метод массива, который фильтрует оценки и оставляет только те, 
  //которые соответствуют заданному условию. 
  //Затем посчитайте количество оставшихся оценок и выведите результат.

const foundPositiveGrades = grades.filter(grades => grades >= 60);
console.log('Положительные оценки (>= 60):', foundPositiveGrades);

const numberOfPositiveGrades = foundPositiveGrades.length;

console.log('Количество положительных оценок (>= 60):', numberOfPositiveGrades);

//6: Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60).
// Используйте аналогичный подход, как в предыдущем шаге.

const foundNegativGrades = grades.filter(grades => grades < 60);
console.log('Отрицательные ценки (< 60):', foundNegativGrades);

const numberOfNegativGrades = foundNegativGrades.length;

console.log('Количество отрицательных оценок (< 60):', numberOfNegativGrades);


//7: Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//Если оценка ниже 20, преобразуйте её в "E"


function reformedGrades(grades) {
    return grades.map(grade => {
      if (grade >= 80) {
        return 'A';
      } else if (grade >= 60 && grade <= 79) {
        return 'B';
      } else if (grade >= 40 && grade <= 59) {
        return 'C';
      } else if (grade >= 20 && grade <= 39) {
        return 'D';
      } else {
        return 'E';
      }
    });
}

const newGrade = reformedGrades(grades);
console.log('Преобразование числовых оценок в формат буквенных оценок A/B/C/D/E:', newGrade);