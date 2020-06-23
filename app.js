//Saylani 6 Assignment
// chap 21 to25
//q1
// var firstName=prompt("Enter First Name!");
// var lastName = prompt("Enter Last Name!");
// var fullName= firstName+ " " +lastName;
// document.write("<h1> Welcome " + fullName);



// q2

// var mobile=prompt("Enter your favorite mobile phone model!");

//     document.write("<h1> My favorite phone is: " + mobile);
//     document.write("<br>Length of string "+ mobile.length);

//q3
// var word="Pakistan";
// var searchedIndex=0
// for (let i=0; i<=word.length; i++){
//     if (word[i] === searchWord)
//         {
//             searchedIndex=i;
//             break;
//         }
// }
// document.write("<h1> String: "+word );
// document.write("<br> Index of 'n': " + searchedIndex);

//q4
//  var str = "Hello world.";
var searchedIndex=0
// var n = str.indexOf("e", 5);
// document.write(n);
var indexArr=[];
var searchWord='l'
for (let i=0; i<=str.length; i++){
    if (str[i] === searchWord)
        {
            indexArr.push(i);
        }
}
document.write("<h1> String: "+str + "<br> Last index of 'l': " + indexArr[indexArr.length-1]);

//Q5

//var str="Pakistan";
   // var searchWord;
    // for(let i=0; i<str.length; i++){
    //     if (i ===3)
    //     {
    //         searchWord=str(i);
    //         // document.write(i);
    //         break;
    //     }
    // }
  //  document.write("<h1>String: " +str);
   // document.write("<br> Character at index 3:" +str[3]);


//    Q6

// var str1 = "Hello ";
// var str2 = "Brother!";
// var str3 = " Have a nice day!";
// var res = str1.concat(str2, str3);
// var firstName=prompt("Enter First Name!");
// var lastName = prompt("Enter Last Name!");
// var fullName=firstName.concat(lastName);
// document.write("<h1> Welcome " + fullName);

//q7

// var str = "Hyderabad";
//     var res = str.replace("Hyder", "Islam");
//     document.write("<h1> City: " + str +"<br> After replacement: " + res);

// q8

// var str = "Ali and Sami are best friends. They play cricket and football together.";
//     var res = str.replace(/and/g, "&");
//     document.write("<h1> Actual string: " + str +"<br> After replacement: " + res);


    // Q9

    // var str = "472";
    // var num=parseInt(str);
    // document.write("<h1> Value: "+str + "<br> Type: string");
    // document.write("<h1> <br> Value: "+ num + "<br> Type: number");

    // Q10

    // var str=prompt("Enter any text!");
    // var res = str.toLocaleUpperCase();
    // document.write("<h1> User input: " + str);
    // document.write("<br>Upper case "+ res);



    // Q11



    // q12

    // var num = 35.36;
    // // var str=num.toString();
    // // var myTrunc = Math.trunc(num);
    // var myTrunc = num.toFixed(4);

    // document.write("<h1> Number: "+num );
    // document.write("<br> Result: "+ myTrunc);


// Q13
// var userName=prompt("Enter Username!");
//     var found=0
//     for (let i=0; i<=userName.length; i++){
//         if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
//             {
//                 // document.write("Please enter a valid username!");
//                 found=1;
//                 break;
//             }
//         }
//     if (found)
//     document.write("Please enter a valid username");
//     else
//     document.write("Thank you! you entered a valid username");


// Q14

// var a=["cake", "apple pie", "cookie", "chips", "patties"]
// var order=prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
// var found=0, i=0;

// for( i =0; i<a.length;i++){
//     if(a[i] === order){
//         // document.write(order+" is available at index "+i +"in our bakery");
//         found=1;
//         break
//     }

// }
// if(found){
//     document.write(order+" is available at index "+ (i+1) +"in our bakery");
// }
// else{
//     document.write("We are sorry. "+ order +" is not available in our bakery.")
// }






// Q15
// var password=prompt("Enter valid passwordz");
// var found=0, i=0;

// for( i =0; i<a.length;i++){
//     if(a[i] === order){
//         // document.write(order+" is available at index "+i +"in our bakery");
//         found=1;
//         break
//     }

// }
// if(found){
//     document.write(order+" is available at index "+ (i+1) +"in our bakery");
// }
// else{
//     document.write("We are sorry. "+ order +" is not available in our bakery.")
// }

// Q16

// var str="University of Karachi";
  

// str = str.split('');

// for (let i =0; i<str.length; i++){
//     document.write(str[i]+"<br>");
// }

// Q17
// var str=prompt("Enter any input?");
//     document.write("<h1> User input: " + str);
//     document.write("<br> Last character: " + str[str.length-1])


// Q18
// var str=prompt("Enter any input?");
//     document.write("<h1> User input: " + str);
//     document.write("<br> Last character: " + str[str.length-1])







// ---------------------------------------chapters26-30 (1)--------

// q1
    // var n=prompt("Enter any positive integer?");
    // document.write("<h1> number: " + n);
    // document.write("<br> round off value: "+ Math.round(n));
    // document.write("<br> floor value: "+ Math.floor(n));
    // document.write("<br> ceil value: "+ Math.ceil(n));
}
///------------ Q2

    // var n=prompt("Enter any negative integer?");
    // document.write("<h1> number: " + n);
    // document.write("<br> round off value: "+ Math.round(n));
    // document.write("<br> floor value: "+ Math.floor(n));
    // document.write("<br> ceil value: "+ Math.ceil(n));

///------------ Q3

    // var n=prompt("Enter any number?");
    // document.write("<h1> The absolute value of " + n + " is "+ Math.abs(n));

///------------ QNo.4

    // var n=prompt("Enter any number?");
    // var bigDecimal = Math.random();
    // var improvedNum = (bigDecimal * 6) + 1;
    // var numberOfStars = Math.floor(improvedNum);
    // document.write("<h1> random dice value: " +  numberOfStars);

///------------ Q5

    // var n=prompt("Enter any number?");
    // var bigDecimal = Math.random();
    // var improvedNum = (bigDecimal * 2) + 1;
    // var numberOfStars = Math.floor(improvedNum);
    // if (numberOfStars === 1)
    //     document.write("<h1>" +  numberOfStars +"<br> random coin value: Tails");
    // else
    //     document.write("<h1>" +  numberOfStars +"<br> random coin value: Heads");

///------------Q6

    // var n=prompt("Enter any number?");
    // var bigDecimal = Math.random();
    // var improvedNum = (bigDecimal * 100) + 1;
    // var numberOfStars = Math.floor(improvedNum);
    // document.write("<h1> random number between 1 and 100: " +  numberOfStars );

///------------ Q7

    // var weight =prompt("Enter your weight in kilograms?");
    // var parseWet=parseFloat(weight);
    // document.write("<h1> The weight of user is "+ parseWet +" kilograms");

//////------- Q8

    // var bigDecimal = Math.random();
    // var improvedNum = (bigDecimal * 10) + 1;
    // var numberSecret = Math.floor(improvedNum);

    // var userInput =prompt("Enter your any number in between 1 to 10?");
    // if (numberSecret === userInput)
    // document.write("<h1> Congratulations the user");
    // else
    // document.write("<h1> Try again"+ numberSecret);




