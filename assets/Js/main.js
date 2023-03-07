
/* 
context: describing sequences: ask to user his name, 
his surname, 
his favourite colour, 
at last show on the page the result '+23'
using this writing format: namesurnamefavouritecolour23
*/

//open the dialog window on the browser

 alert("main.js connect");
 
 // request for his name

 let userName = prompt("Qual'è il tuo Nome?");
 console.log(userName);
 
 //request for his surname

 let userSurname;
 userSurname = prompt("Qual'è il tuo Cognome?");
 console.log(userSurname);
 
 //request for his favourite colour

 let usercolor;
 usercolor = prompt("Qual'è il tuo Colore preferito?");
 console.log(usercolor);
 
 //show on the page the result adding '+23' at the end

 let result = userName + userSurname + usercolor + 23;
 console.log(result);

 let element = document.getElementById("result_display");
 console.log (element);
 element.innerHTML = result;