// arr = [1, 2, 3, 4, 5, 6, 2, 3];
// for(item of arr){
//     if(item===2){
//     arr.splice(arr.indexOf(item),1);
//     console.log(arr);

//     }
    
// }
// let number='287152';
//  let sum=0;
// for (let i=0;i<number.length;i++){
   
//    sum =sum+Number(number[i]);

    
// }
// console.log(sum);
// const person={
//     name:'john',
//     details:[

//        { height:140},{weight:49},{color:'black',clothes:"white"}
//     ],
//     age:30,
//     city:"new york"
// }
// console.log(person.details[2]);

// const students={1:"Rashid khan",undefined:"5 th sem",gpa:"3.33"};
//  students.gpa="gpa";
// console.log(students[1]);
// console.log(students.undefined);
// console.log(students.gpa);
// students.height="44";
// console.log(students);
//  const classInfo=[
//     {
//         class:"tent",
//         marks:"55",
//         gpa:"3.4"

//     },
//     {
//         class:"penth",
//         marks:'445',
//         gpa:'4.4'
//     }
// ]
// classInfo[0].gender='female';
// delete classInfo[1].gpa;
//  console.log(classInfo[1]);

// let num=prompt("enter the max number ");
// let num2=Math.floor(Math.random()*num);
// console.log(num2);
// function multi(n){
//     for (let i=n;i<=n*10;i+=n){
//         console.log(i)
//     }
// }
// multi(5)
// function add(n){
//     let num=0;
//     for(let i=1;i<=n;i++){
        
//         num+=i;
        
//     }
//     console.log(num);

// }
// add(10);
// let str =['hi','hellow','bye'];
// function addString(str){
//      let result="";
// for(let i=0;i<=str.length;i++){
   
//     result+=str[i];

// }
// return result;
    
// }

// console.log(addString(str));
// let arr=`{
//   name: "Ali",
//   age: 20,
//   isStudent: true
// }`;
// let obj=JSON.stringify(arr);
// console.log(obj);
// let greet ="hello";
// function greetFunction(){
//   let greet="asslam ";
//   console.log(greet);
//   function changefunction(){
// console.log(greet);
//   }
  
// }
// console.log(greet);

// greetFunction();
// let sum=function(a,b){
//   return console.log(a+b);
// }

// let ton=sum;
// ton(1,7);

 let check=function multipleFunction(request){
  if (request=="positive"){
    
 return function plus(num){
  if (num>0){
    console.log(`number ${num} is positive`);
  }
}
  }
  else if (request=="negative"){
     return function negative(num){
  if (num<0){
    console.log(`number ${num} is negative`);
  }
}
     }

    }

// check("positive")(87);




let calculater={
  add(a,b){
    return a+b;},
  sub(a,b){
      return a+b;
    },
  multi(a,b){
      return a*b;
    }

  
};
calculater.num="reo";
calculater.myname="Rashid khan";
calculater.divide= function divide(a,b){
   return a/b;};


// delete calculater.num;
// console.log(calculater.add(3,8));
// console.log(calculater);


// let array=[1,2,3,4,5,6,7,8,9];
// let arr2=[];
// function check2(num){
//   for(let i=0;i<=array.length-1;i++){
//     if(array[i]>num){
//      arr2.push(array[i]);
     
//     }


//   }
//   return arr2;
// }



// let str ="abcdabcdefggh";
// // let splitstr=str.split("");
// // console.log(splitstr);
// function uniqueStr(str){
//   let result="";
//   for(let i=0;i<=str.length-1;i++){
    

//     if(!result.includes(str[i])){
//       result+=str[i];
//     }
    
//   }
//   console.log(result);
// }
// uniqueStr(str);
let country = ["Australia", "Germany", "United States of America"];
let result='';
function mycountry(country){
for(let i=0; i<country.length;i++)
{
  if(result.length<country[i].length){
    result=country[i];
  }
}
console.log(result);
}
 mycountry(country);
