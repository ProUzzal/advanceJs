const bonus = 30;
function sum(num1, num2) {
  const result = num1 + num2 + bonus;
  return result;
  //console.log(bonus);
  if (result > 5) {
    var mood = "happy";
    mood = "funny";
    mood = "cranny";
  }
  console.log(mood);
}
// It's not possible to call anything from function except using "return".
//Rather you can use outside things in any place .
// For example we can see to "Bonus"
const result = sum(10, 5);
//console.log(result);
//console.log(bonus);
//var "let and const" don't play role outside of it's area but var does . Example:
