
/*Create a function to calculate Average to a group of
numbers (at least 10 numbers)*/

function calcc(x,c,v,b,n,m,a,s,d,f){
 return (x+c+b+v+n+m+a+s+d+f)/ 2
}

console.log(calcc(1,2,3,4,5,6,7,8,9,10));


/*Write a function that takes the base and height of a
triangle and return its area */

function area(x,y){
 var area= (x * y) / 2
 return area
}
console.log( area(10,5))


/*Create a function that takes the age in years and
returns the age in days and print it on console */

function age (yourage){
  var age = yourage * 365.25
  return age
}
console.log( age(18))


/*Create a function takes two numbers and return
thier sum Create a function takes two numbers and
return thier sum */

function tot (a,k){
    var total = a + k;
    return total
}
console.log( tot(18,2))


/* Create a function that takes an array containing
only names and return the first element*/

var names = ['asmaa', 'khaled', 'Mark'];
  
var firstName = getFirstName(names);
function getFirstName(names) {
    return names[0];
  }
  console.log(firstName); 



//Create a function show your name in HTML document

function showName() {
    var name = "Asmaa Khaled Orabi";
    document.write(name);
  }
  
  showName();


  //Write a function that takes an integer hours and converts it to second .

  function sec (hours){
    return hours * 3600
  }
  console .log(sec (2));


  /*Given four numbers, return true if the sum of both
numbers is more than 350. Otherwise return false. */

function calc (x,y,z,i){
    if ( x+ y+z+i >350 ) {
        return true
}else{
    return false
}
}
console.log(calc (100,200,50,30))

// create function that take two numbers if equal 0 return true else false
function check(number) {
    if (number === 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(check(1)); 
  console.log(check(0)); 


  //عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة

  function calc (x,y){
    var num = x % y
    return num
  }
  console.log(calc (10,3))


  /*Find the largest of two number
Make a function take two parameters num1 and num2 and print the
greater number or if they are equal print they are equal. */


function calculate (num1,num2){
    if(num1==num2){
        return "they are equal"
    }else if(num1>num2) {
        return "num1 is the largest "
    } else {
        return "num2 is the largest"
    } 
}
console.log(calculate (60,50))
console.log(calculate (50,50))
console.log(calculate (30,50))

//Check if input variable is a number or not

function checkk(x){
    if (typeof x == 'number'){
        return 'it is a number'
    }else{
        return 'not a number'
    }
    }
console.log(checkk('a'))
console.log(checkk(5))


//Write a JavaScript function to get the current date

function getCurrentDate() {
    let today = new Date(); 
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
  }
  
console.log(getCurrentDate("date")); 