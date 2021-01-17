var student={id:1239, phone:5214, name:"Abir"};
var student2={id:1320, phone:1514, name:"mahi"};
var studentProName="phone";
var studentNo1=student.phone;
var studentNo2=student["phone"];
var studentNo3=student[studentProName];
student.phone=234569;
student["phone"]=99955;
student["Cinema"]="SuperHit";
student["Movie"]="fatakesto";
student["Movie"]="fatakesto na";
console.log(student);


// console.log(student2);