
let arg = process.argv.slice(2);


const diceRoller = function(num){
   var roll = [];

   for (let i = 0; i < num; i ++){
    let dice = Math.floor(Math.random() * 6) + 1;
    roll.push(dice);
  }
  return roll.join(', ');
}

for (let i = 0; i < arg.length; i ++) {

  console.log("Rolled " + arg[i] + ' dice: ' + diceRoller(arg[i]));

}
