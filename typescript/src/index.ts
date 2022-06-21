/**
 * ---------------------- EJERCICIO 1 ----------------------
 */

interface Student {
    name: string;
    age: number;
    occupation?: string;
}

// const students: Student[] = [
//     {
//         name: "Patrick Berry",
//         age: 25,
//         occupation: "Medical scientist",
//     },
//     {
//         name: "Alice Garner",
//         age: 34,
//         occupation: "Media planner",
//     },
// ];

// const logStudent = ({ name, age }: Student) => {
//     console.log(`  - ${name}, ${age}`);
// };
  
// console.log("Students:");
// students.forEach(logStudent);

/**
 * ---------------------- EJERCICIO 2 ----------------------
 */

interface User extends Teacher, Student {
    name: string;
    age: number;
}

interface Teacher {
    name: string;
    age: number;
    subject?: string;
}
  
const users: User[] = [
    {
        name: "Luke Patterson",
        age: 32,
        occupation: "Internal auditor",
    },
    {
        name: "Jane Doe",
        age: 41,
        subject: "English",
    },
    {
        name: "Alexandra Morton",
        age: 35,
        occupation: "Conservation worker",
    },
    {
        name: "Bruce Willis",
        age: 39,
        subject: "Biology",
    },
];
  
// const logUser = ({ name, age }: User) => {
//     console.log(`  - ${name}, ${age}`);
// };
  
// users.forEach(logUser);

/**
 * ---------------------- EJERCICIO 3 ----------------------
 */

const isStudent = (user: User): user is Student => {
    return (user as Student).occupation !== undefined
}

const isTeacher = (user: User): user is Teacher => {
    return (user as Teacher).subject !== undefined
}

const logUser = (user: User) => {
    let extraInfo: string = '';
 
    if (isStudent(user) && user.occupation !== undefined) {
        extraInfo = user.occupation;
    } 
    else if(isTeacher(user) && user.subject !== undefined) {
        extraInfo = user.subject;
    }
    
    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};

// users.forEach(logUser)

/**
 * ---------------------- EJERCICIO 4 ----------------------
 */

const students: Student[] = [
    {
      name: "Luke Patterson",
      age: 32,
      occupation: "Internal auditor",
    },
    {
      name: "Emily Coleman",
      age: 25,
      occupation: "English",
    },
    {
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    },
    {
      name: "Bruce Willis",
      age: 39,
      occupation: "Placement officer",
    },
];

const filterStudentsBy = (students: Student[], criteria: unknown): Student[] => {
    const criteriaForStudent = criteria as Student

    return students.filter((user) => {
        const criteriaKeys = Object.keys(criteriaForStudent);
        return criteriaKeys.every((fieldName) => {
            return criteriaForStudent[fieldName] === user[fieldName];
        });
    });
};

  
const logStudent = ({ name, occupation }: Student) => {
    console.log(`  - ${name}, ${occupation}`);
};
  
// console.log("Students of age 35:");
// filterStudentsBy(students, { age: 35 }).forEach(logStudent);

/**
 * ---------------------- EJERCICIO 5 ----------------------
 */

const swap = <T, U>(arg1: T, arg2: U): [T, U] => {
    return [arg1, arg2];
};

let age: number = 0, occupation: string = '';
[age, occupation] = swap<number, string>(39, "Placement officer");

// console.log("Occupation: ", occupation);
// console.log("Age: ", age);