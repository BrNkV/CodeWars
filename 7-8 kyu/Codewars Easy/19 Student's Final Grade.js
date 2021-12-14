/** comlete
 * 
 * Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

Создайте функцию finalGrade, которая вычисляет итоговую оценку студента в зависимости от двух параметров: оценки за экзамен и количества выполненных проектов.

Эта функция должна принимать два аргумента: экзамен - оценка за экзамен (от 0 до 100); проекты - количество реализованных проектов (от 0 и выше);

Эта функция должна возвращать число (итоговая оценка). Есть четыре типа итоговых оценок:

100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
90, если оценка за экзамен больше 75 и количество выполненных проектов не менее 5.
75, если оценка за экзамен больше 50 и количество выполненных проектов не менее 2.
0, в остальных случаях

Примеры (Входы -> Выход):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0

* Используйте операторы сравнения и логические операторы.

*/

function finalGrade(exam, projects) {
    if (exam > 90 || projects >= 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    else return 0;
}

console.log((finalGrade(100, 12)));//, 100);
console.log((finalGrade(85, 5)));//, 90);
console.log((finalGrade(99, 0)));//, 100);
console.log((finalGrade(85, 5)));//, 90);
console.log((finalGrade(55, 3)));//, 75);
console.log((finalGrade(55, 0)));//, 0);
console.log((finalGrade(20, 2)));//, 0);