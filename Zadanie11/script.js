// Exercise 1
const student1 = { id: 12, name: "Jan", lastName: "Kowalski", personalIdentityNumber: 111222333, fieldOfStudy: "Informatics", notes: [3, 4, 2, 4, 3, 4] };
const student2 = { id: 46, name: "Anna", lastName: "Stardust", personalIdentityNumber: 222333444, fieldOfStudy: "Astronomy", notes: [4, 4, 5, 3, 4, 5] };
const student3 = { id: 34, name: "Tom", lastName: "Major", personalIdentityNumber: 111222333, fieldOfStudy: "Astronautics", notes: [3, 4, 2, 4, 3, 4] };
const student4 = { id: 26, name: "Kate", lastName: "Moon", personalIdentityNumber: 555666777, fieldOfStudy: "Architecture", notes: [5, 4, 3, 4, 5, 4] };
const student5 = { id: 32, name: "Adam", lastName: "Nowak", personalIdentityNumber: 333444555, fieldOfStudy: "PoliticalScience", notes: [3, 2, 2, 4, 5, 4] };
let students = [student1, student2, student3, student4, student5];
console.log(students);

//Exercise 2
function addNewstudent(name, lastName, personalIdentityNumber, fieldOfStudy, notes) {
  function getRandomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const id = getRandomId(100, 999);
  const newStudent = {
    id: id,
    name: name,
    lastName: lastName,
    personalIdentityNumber: personalIdentityNumber,
    fieldOfStudy: fieldOfStudy,
    notes: notes,
  };
  students.push(newStudent);
  console.log(students);
}

addNewstudent("Ilona", "Brain", 777888999, "Alienology", [2, 5, 2, 5, 2, 5]);

// Exercise 3
function studentsList(students) {
  return students.map((student) => `Student ${student.id}: ${student.name} ${student.lastName}, PESEL: ${student.personalIdentityNumber}, Fields of study: ${student.fieldOfStudy}`);
}

console.log(studentsList(students));
