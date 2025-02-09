// 1. Создаём пустой массив и заполняем случайными оценками
const grades = Array.from(
  { length: 12 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log("Оценки студентов:", grades);

// 2. Рассчитываем средний балл
const averageGrade = Math.floor(
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length
);
console.log("Средний балл студентов:", averageGrade);

// 3. Находим максимальный балл
const maxGrade = Math.max(...grades);
console.log("Максимальный балл:", maxGrade);

// 4. Находим минимальный балл
const minGrade = Math.min(...grades);
console.log("Минимальный балл:", minGrade);

// 5. Количество положительных оценок (≥ 60)
const positiveGrades = grades.filter((grade) => grade >= 60).length;
console.log("Количество положительных оценок:", positiveGrades);

// 6. Количество отрицательных оценок (< 60)
const negativeGrades = grades.filter((grade) => grade < 60).length;
console.log("Количество отрицательных оценок:", negativeGrades);

// 7. Преобразование в буквенные оценки
const letterGrades = grades.map((grade) => {
  if (grade >= 80) return "A";
  if (grade >= 60) return "B";
  if (grade >= 40) return "C";
  if (grade >= 20) return "D";
  return "E";
});
console.log("Буквенные оценки:", letterGrades);
