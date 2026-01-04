// let num =12;

// if (num % 10===0){
//     console.log("good ")
// }
// else{
//     console.log("bad");
// }
// let num=prompt("enter the number");


// let trimed=num.trim();
// console.log(trimed);
// trimed.replace("world","everyone")
// let str="hello world";
// let index=str.indexOf("world");
// console.log(index);
// let months=["january","jully","march","auguest"];

// function myfunction(values){
//       if(months.includes(values)==true){
//     console.log("month included");
// }
// else{
//     console.log("month not included");
// }
// }

// //console.log(months.includes("december"));
// myfunction("march");
// months.splice(1,2,"february","april");
// console.log(months);
// const person ={
//     name:"john",
//    age:30,
//     city:"new york",
// }
// delete person.city;

// //console.log(person.age);
// const {name,age,...restvalues}=person;

// delete person.restvalues;
// console.log(person);
 

// let propertyname="age of man";
// console.log(person[propertyname]);
// console.log(person["age of man"]);
// console.log(person["1name"]);
// let array=["a","b","c","d"];
// let idx="b";
// if(array.indexOf(idx) !==-1){
//     console.log("index is present");
// }
// else{
//     console.log("index is not present");
// }
// let array2=array;
// console.log(array2);
// array2==array;

// arraynested=[["a","b"],["c","d"],["e","f"]];

// console.log(arraynested[0][1]);
// console.log(arraynested[2][0]);
// console.log(arraynested.length);
// let arr=[7,9,0,-2];
// let n=3;
// let ans=arr.slice(arr.length-n);
// console.log(ans);
// let str="sajSS";
// if (str===str.toLowerCase()){
//     console.log("given string is lowercase");
// }
//  else {
//     console.log("string is  upercase");
//     }

//     let str1="  hello world   ";
//     console.log(str1.trim());
// let favrioteMovie="avatar";
// let guess=prompt("guess the movie");
// while(guess !==favrioteMovie && guess !=="quit"){
    

// if(guess==favrioteMovie){
//     console.log("congratulation you guessed it right");
// }
// else{
//     guess=prompt("wrong guess try agai[n" );
// }}



// let nestedarray=[[1,2,3],[4,5,6],[7,8,9]];
// for (let i=0;i<nestedarray.length;i++){
//     let result="";
//     for (let j=0;j<nestedarray[i].length;j++){
        
//         result += nestedarray[i][j];
        


//     }
//     console.log(result);
//     console.log(" ");
// }

// let arrnest=[[10,20,30],[40,50,60],[70,80,90]];
// for(let i of arrnest){
//     console.log(i);
//     for(let j of i){
//         console.log(j);
//     }
// }

// To do list application
// let todolist=[];
// while(true){
//     let input=prompt("enter the command (add,delete,list,show,quit):");
    
    
   
//     if(input==="quit"){
//         console.log("application is quit");
//         break;
//     }
//     else if(input==="add"){
//         let item=prompt("enter the item to add:");
//         todolist.push(item);
//         console.log(`"${item}" is added to the list.`); 
//      input=prompt("enter the command (add,delete,list,show,quit):");
//     }
//      else if(input==="delete")
//         {
//             let item=prompt("enter the item to remove");
//         todolist.splice(todolist.indexOf(item),1);
//         console.log(` "${item}" is removed from the list.`);
        

//     }
//     else if (input==="list" || input==="show"){
//         console.log("To do list:");
//         for (let i=0;i<todolist.length;i++){
//             console.log(`${i+1} : ${todolist[i]}`);
//         }
        
//     }
//    else 
//    {
//     console.log("invalid command try again");
//    }

// }
let num=Number(prompt("enter the max number "));
let num2=Math.floor(Math.random()*num)+1;
let guess=Number(prompt("enter the guess number"));
while (true){
if(guess==num2)
{
    console.log("congratulations! you guess the number");
    
break;
}

 else if (guess>num2){

    guess=Number(prompt("number is greater try small"));

 }
 else if (guess<num2){
    console.log('you enter the small number try greater');
     guess=Number(prompt("you enter the small number try greater "));
 }
if(guess=="quit"){
    console.log("user quit game");
    break;
}
else {
    guess=Number(prompt("invalid number"));
}
}

