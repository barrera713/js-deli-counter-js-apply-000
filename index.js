var number = 1;
function takeANumber(line) {
 line.push(number);
 return `Welcome Carlos you are ticker number ${number++}`;
} 

function nowServing(katzDeli) {
if (katzDeli.length === 0) {
return 'There is nobody waiting to be served!';
} else {
return (`Currently serving ${katzDeli.shift()}.`);
}
}
function currentLine(line) {
var lineAndNumbers = [];
if (line.length === 0) {
  return 'The line is currently empty.';
} 
for (var i=0; i<line.length; i++) {
  lineAndNumbers.push(`${i+1}. ${line[i]}`);
} 
return `The line is currently: ${lineAndNumbers.join(', ')}`;
}



///("The line is currently: 1. Bill, 2. Jane, 3. Ann");
/// ['Bill', 'Jane', 'Ann']

   


  
    



 





 
