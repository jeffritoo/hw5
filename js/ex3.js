console.log("Jeffry's Output from Tutorial 4 Example 3");

const students = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

const studentsResults = [];
for (const student of students) {
    let gradesSum = 0;

    for (const score of student.scores){
      gradesSum += score;
    }
    const averageGrade = gradesSum / student.scores.length;


    studentsResults.push({
      firstname: student.firstName,
      lastname: student.lastName,
      /*max: maximum,
      min: minnimum,*/
      avgGrade: averageGrade
    });
}


/*
const studList = [];

for (const student of studentList){
    let gradeSum=0;

    for(const score of studentList.scores){
        gradeSum += score;
    }

    const averageGrade = gradeSum/studentList.scores.length;

    studentList.push({
        firstname: studentList.firstName,
        lastname: studentList.lastName,
        avgScore: averageGrade

    });
}
*/
console.log(studentsResults);
