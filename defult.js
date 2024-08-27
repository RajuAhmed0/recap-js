// old use function 
function addNum(a, b) {
    const result = a+b;
    return result;
}
// const num = addNum(4, 10);
// console.log(num);


// Expression function 
const num1 = function (a, b) {
    const result = a * b;
    return result;
}
// console.log(num1(2, 5));



// arrow function this functon all time use not old 
const num2 = (a, b) => a*b
// console.log(num2(5, 5));


// one param use arrow function 
const man = name => name;
// console.log(man('sajib'));


// no param arrow function 
const word = () => 'savar college'
// console.log(word());



// defult function 
function num3(a=4, b=5) {
    const result = a*b;
   console.log(a, b, result);
   
    
}

// num3(9,8);



