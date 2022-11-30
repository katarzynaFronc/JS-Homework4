// Exercise 1
// Array with students data
const students = [
  { id: 12, name: "Jan", lastName: "Kowalski", pesel: 111222333, fieldOfStudy: "Informatics", notes: [3, 4, 2, 4, 3, 4] },
  { id: 46, name: "Anna", lastName: "Stardust", pesel: 222333444, fieldOfStudy: "Astronomy", notes: [4, 4, 5, 3, 4, 5] },
  { id: 34, name: "Tom", lastName: "Major", pesel: 444555666, fieldOfStudy: "Astronautics", notes: [5, 4, 4, 4, 5, 4] },
  { id: 26, name: "Kate", lastName: "Moon", pesel: 555666777, fieldOfStudy: "Architecture", notes: [5, 4, 3, 4, 5, 4] },
  { id: 32, name: "Adam", lastName: "Nowak", pesel: 333444555, fieldOfStudy: "PoliticalScience", notes: [3, 2, 2, 2, 3, 2] },
];

console.log(students);

// Exercise 2
// function addNewStudent

function addNewstudent(name, lastName, pesel, fieldOfStudy, notes) {
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
    pesel: pesel,
    fieldOfStudy: fieldOfStudy,
    notes: notes,
  };
  students.push(newStudent);
  console.log(students);
}

addNewstudent("Ilona", "Brain", 777888999, "Alienology", [2, 5, 2, 5, 2, 5]);

// Exercise 3
// function that displays a list of students

students.map(function (student) {
  const index = students.indexOf(student);
  const ordinalNumber = index + 1;
  console.log(`Student ${ordinalNumber}: ${student.name} ${student.lastName}, PESEL: ${student.pesel}, Fields of study: ${student.fieldOfStudy}`);
});

//Exercise 4
//`Max note for student Ewa Nowak is 5`

function getMaxNote(students, pesel) {
  // let peselNumber;
  //   for (let i = 0; ; i++) {
  //     if (students[i].pesel == pesel) {
  //       peselNumber = i;
  //       break;
  //     }
  //   }

  //   students.forEach((element) => {
  //     if (element == pesel) {
  //       peselNumber = i;
  //     }
  //   });
  const studentIndex = students.findIndex((element) => element.pesel == pesel);
  const maxNote = Math.max(...students[studentIndex].notes);
  console.log(`Max note for student ${students[studentIndex].name} ${students[studentIndex].lastName} is ${maxNote}`);
}

getMaxNote(students, 555666777);

function getMinNote(students, pesel) {
  const studentIndex = students.findIndex((element) => element.pesel == pesel);
  const minNote = Math.min(...students[studentIndex].notes);
  console.log(`Min note for student ${students[studentIndex].name} ${students[studentIndex].lastName} is ${minNote}`);
}

getMinNote(students, 444555666);
//--------------------//
// Exercise 1
// Array with students data
const students = [
  { id: 12, name: "Jan", lastName: "Kowalski", pesel: 111222333, fieldOfStudy: "Informatics", notes: [3, 4, 2, 4, 3, 4] },
  { id: 46, name: "Anna", lastName: "Stardust", pesel: 222333444, fieldOfStudy: "Astronomy", notes: [4, 4, 5, 3, 4, 5] },
  { id: 34, name: "Tom", lastName: "Major", pesel: 444555666, fieldOfStudy: "Astronautics", notes: [5, 4, 4, 4, 5, 4] },
  { id: 26, name: "Kate", lastName: "Moon", pesel: 555666777, fieldOfStudy: "Architecture", notes: [5, 4, 3, 4, 5, 4] },
  { id: 32, name: "Adam", lastName: "Nowak", pesel: 333444555, fieldOfStudy: "PoliticalScience", notes: [3, 2, 2, 2, 3, 2] },
];

console.log(students);

// Exercise 2
// function addNewStudent

function addNewstudent(name, lastName, pesel, fieldOfStudy, notes) {
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
    pesel: pesel,
    fieldOfStudy: fieldOfStudy,
    notes: notes,
  };
  students.push(newStudent);
  console.log(students);
}

addNewstudent("Ilona", "Brain", 777888999, "Alienology", [2, 5, 2, 5, 2, 5]);

// Exercise 3
// function that displays a list of students

students.map(function (student) {
  const index = students.indexOf(student);
  const ordinalNumber = index + 1;
  console.log(`Student ${ordinalNumber}: ${student.name} ${student.lastName}, PESEL: ${student.pesel}, Fields of study: ${student.fieldOfStudy}`);
});

//Exercise 4
//`Max note for student Ewa Nowak is 5`

function getMaxNote(students, pesel) {
  const studentIndex = students.findIndex((element) => element.pesel == pesel);
  const maxNote = Math.max(...students[studentIndex].notes);
  console.log(`Max note for student ${students[studentIndex].name} ${students[studentIndex].lastName} is ${maxNote}`);
}

getMaxNote(students, 555666777);

function getMinNote(students, pesel) {
  const studentIndex = students.findIndex((element) => element.pesel == pesel);
  const minNote = Math.min(...students[studentIndex].notes);
  console.log(`Max note for student ${students[studentIndex].name} ${students[studentIndex].lastName} is ${minNote}`);
}

getMinNote(students, 444555666);
