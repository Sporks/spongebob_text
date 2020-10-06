/* Stupid program to make spongebob text with alternating characters.

Use is `node spongebob.js [string]`

eg `node spongebob.js lorem ipsum dolor` will output `lOrEm iPsUm dOlOr`

*/

var args = process.argv.slice(2).join(" ");

let text = "";
for(let i=0; i < args.length; i++){
	if(i%2===1){
		text += args[i].toUpperCase();
	}
	else {
		text += args[i].toLowerCase();
	}
}
console.log(text);
