let student={
    stdName:"deepak",
    rollNo:123,
    branch:"MCA",
    displayData(){
        console.log(`Name: ${this.stdName}`);
    },
    Subject:{
        Marathi:{
            subName:"Mara",
            Author:"vsk",

        },
        English:{
            subName:"Eng",
            Author:"Vedant",
        }
    }


}
console.log(`Name: ${student.stdName}`);
console.log(`Roll No: ${student.rollNo}`);
console.log(`Branch: ${student.branch}`);
console.log(`Subject Name:${student.Subject.Marathi.subName}`);
console.log(`English Author: ${student.Subject.English.Author}`);
student.Subject.English.Author="VISHWAJIT";
console.log(`English Author: ${student.Subject.English.Author}`);
student.displayData();

