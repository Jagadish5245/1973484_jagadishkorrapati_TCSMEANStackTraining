let fs = require("fs");
let obj = require("readline-sync");
let fname = obj.question("Enter the Firstname ");
console.log("your firstname is " +fname);
debugger;

let lname = obj.question("Enter the Last Name ");
console.log("your name is " +lname);
let gender = obj.question("Enter gender ");
console.log("your gender is " +gender);
let email = obj.question("Enter email ");
console.log("your email is " +email);
var datetime =new Date();
console.log(datetime);
var array = new Array();
array.push(fname)
array.push(lname)
array.push(gender)
array.push(email)
array.push(datetime)
debugger;
let data =fs.readFileSync('Detail.json') 
     var json= JSON.parse(data)
    json.push(array)
   // debugger;
    //console.log(json)
    
    let JsonData=JSON.stringify(json)
    fs.writeFileSync("Detail.json",JsonData)

/*let JsonData=JSON.stringify(array)
fs.writeFileSync("Details.json",JsonData)
let data = fs.readFileSync("Details.json");
console.log(data.toString());
let jsonString=data.toString();
let anotherJSON=JSON.parse(jsonString);
console.log(anotherJSON.id)*/