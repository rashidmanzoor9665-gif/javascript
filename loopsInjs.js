// let fruits = ["apple", "banana", "mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }
// let colors = ["red", "green", "blue", "yellow"];
// for (let color of colors){
//     console.log(color);
// }
// let names = ["Ali", "Ahmed", "Sara"];
// for(let name  of names){
//     for(let letter of name)
//     console.log(letter," ");
// }
// let cars = ["BMW", "Audi", "Ferrari"];
// for (let [car,index] of cars.entries()){
//     console.log(car,index);
// }
// let prices = [100, 250, 300, 150];
// let totalprice = 0;
// for(let price of prices){
//  totalprice+=price;
 

    
// }
// console.log(totalprice);
// let text = "JavaScript";
// for (let letter of text){
//     if (letter==='a'|| letter==='e' || letter==='i'|| letter==='o'|| letter==='u'){
//     console.log(letter);    
// }

// }
// find the longest word in an array of words
// let words = ["apple", "banana", "grape", "watermelon"];
// let longestWord = "";
// for(let word of words){
//     if(word.length>longestWord.length){

//     longestWord = word;
   
//     }

// } console.log("The longest word is:",longestWord);
// function calculater(num1,num2,operator){
//     let result;
//     switch(operator){
//         case '+':
//             result=num1+num2;
//             console.log(result);
//             break;
//         case '-':
//             result=num1-num2;
//             console.log(result);
//             break;
//         case '*':
//             result=num1*nun2;
//             console.log(result);
//             break;
//         case '/':
//             result=num1/nun2;
//             console.log(result);
//             break;
//         default:
//             console.log("Invalid operator");

//     }


// }
// calculater(10,5,'+');
 const  palindrome=(str)=>{
    let result="";
    for(let char=str.length-1;char>=0;char--){
      result+= str[char];
         
    
    }
    


if (result===str){
    return true;
}
else{
    return false;
}

};
   

console.log(palindrome("hellow"));
console.log(palindrome("level"));