function stopWatch() {
  let count = 0;
  //kichui bujhini eta

  return function() {
    count++;
    return count;
  };
}
const clock1 = stopWatch();
console.log(clock1()); // Why does it use first bracket in console?
console.log(clock1());
console.log(clock1());
