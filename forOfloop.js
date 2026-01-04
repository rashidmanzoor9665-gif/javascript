// let numbers=[
//     {name:"siraj",age:20},
//     {name:"ahmed",age:22},
//     {name:"ali",age:21}
// ];
// numbers.forEach((values)=>{
//     console.log(` ${values.name} is ${values.age} years old`);


// });
// let numbers=[1,2,3,4,5,6,7];
// let color=["red","green","blue"]

// color.forEach((values,index)=>{
//     console.log(values,index);
// });
// let numbers = [2, 4, 6, 8];
// let sum=0;
// numbers.forEach((values)=>{
//     sum+=values;
// });
// console.log(sum);

// let text = "javascript";
// let arr = text.split("");
// arr.forEach((values)=>{
//     if (values==="a" || values==="i" || values==="o" || values==="e" || values==="u"){
//         console.log(values);
// }
// });
// let nums = [1, 2, 3, 4, 5, 6];
// let evenarr=[];
// let oddarr=[];
// nums.forEach((values)=>{
//     if(values %2===0){
//         evenarr.push(values);

//     }
//     else{
//         oddarr.push(values);
//     }

// });
// console.log("even numbers:",evenarr);
// console.log("odd numbers:",oddarr);
// let arr=["apple","banana","grape"];
// let result=arr.map((values)=>{
//     return  `${values} is at index ${index}}`;


// });
// console.log(result);
//
// let users=[
//     {name:"siraj",age:20},
//     {name:"ahmed",age:22},]
//      users.forEach((values)=>{
//         return result= `${values.name} is ${values.age} years old`;
//     });
//     console.log(result);
// let numbers=[1,2,3,4];
// let arr=numbers.shift();
// //let shifted=numbers.shift();
// let unshifted=numbers.unshift(0);

// //console.log(shifted);
// console.log(numbers);
// console.log(unshifted);
// console.log(arr);
let fruits=["app","apple","banana","grape","watermelon","pineapple","strawberry"];
let removed=fruits.filter((values)=>{
    return values.length <=5;

});
console.log(removed);
 let numbers=[1,2,3,4,5,6,7,8,9];
 
    let even=numbers.filter(values=>values%2===0);
   
    console.log(even);
     console.log(numbers);

     let text = "javascript";
        let arr=text.split("");
        let vowels=arr.filter((values)=>{
        return values==="a" || values==="e" || values==="i" || values==="o" || values==="u";
        });
        console.log(vowels)

        let users = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Ahmed", age: 19 },
  { name: "Zain", age: 25 }
];
let adults=users.filter(values=>values.age>18);
console.log(adults);


let names = ["ali", "ahmed", "sara", "amna", "zain"];
names.splice(0,2,"hassan");
console.log(names);

let str="hellow world";
let arr1=str.split("");
arr1.reverse();
let reversedstring=arr1.join("");
console.log(reversedstring);
