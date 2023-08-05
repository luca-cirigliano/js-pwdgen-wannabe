
/* 
context: describing sequences: ask to user his name, 
his surname, 
his favourite colour, 
at last show on the page the result '+23'
using this writing format: namesurnamefavouritecolour23
*/

/*strumenti: 
-prompt
-const
-let
-document.getElementById
*/

 // request for his name

 const userName = prompt("Qual'è il tuo Nome?");
 console.log(userName);
 
 //request for his surname


 const userSurname = prompt("Qual'è il tuo Cognome?");
 console.log(userSurname);
 
 //request for his favourite colour

 const favourite_colour = prompt("Qual'è il tuo Colore preferito?");
 console.log(favourite_colour);


 console.log(userName);
 console.log(userSurname);
 console.log(favourite_colour);
 
 //show on the page the result adding '+23' at the end


 const result_display = document.getElementById("result_display");
 console.log (result_display);
 result_display.innerHTML =
 `
 ${userName + userSurname + favourite_colour + 23}
 `;