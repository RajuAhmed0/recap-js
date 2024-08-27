// for of use only array and string not use object & for in only use object

/* const allNumber = [12,123,233,238,907]
for (const x of allNumber) { //array ramove only num
    console.log(x);
    
} */

/* const college = 'savar college' 
for (const w of college) { //all word on single character
    console.log(w);
    
} */



const studentInfo = {
    name: 'raju ahmed',
    age: 22,
    profession: 'student',
    depertment: 'commerc',
    inMale:true
}    

for (const k in studentInfo) { //object remove only string return
  const element = studentInfo[k];
  console.log(k, element);
  
}





