
//function
// function greet(){
// //logic
// console.log("hello ")
// }
// greet() // fun call
//------------------------
//function parameter

// function greet(name) {
//     //logic
//     console.log("hello",name);
// }
// //fn aurgument -Arun
// greet("Arun")
// greet("greeshma")


// function greet(fname, lname) {
//     //logic
//     console.log("hello",fname + " " +lname);
// }
// greet("Arun","pradeep") //fun call
//--------------------------

//Function with return

// function add(a, b){

// a += 10; //a= a+10, 10+10
// b += 20; // b= b + 20 ,20+20
// return a + b; //20+40
// }
// const result = add(10, 20);

// console.log("result=",result);
//---------------------------------------------
//function expression

// const greetings = function(){
//     //logic
//     console.log("hello");
// }

// greetings();
//--------------------------

//Arowww function
// const greetings = () => {
//     //logic
//     console.log("hello");
// }
// greetings();

// const add = (a,b) => a + b;
// const res = add(10,20);
// console.log("result=",res);

// aroww with multiple parameter and return

// const add = (a,b) => {
//     a +=10;
//     b +=20;
//     return a + b; // where is found multple rutn function so we use return 
// }
// const res = add(10,20);
// console.log("result=",res);

const gradeCheck =(score) =>{ // at a time one return was work (score- is parameter)
if (score >= 90) return "A+";

    if (score >= 80) return "A";

        if (score >= 70) return "B+";

            if (score >= 60) return "B";

                if (score >= 50) return "C+";

                    if (score >= 50) return "C";

                    return "E";
}
                    const grade = gradeCheck(85); // 85- is aurgement
                    console.log("Your result is",grade)



