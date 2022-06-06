function square(a) {
   return console.log(a*a)
}
square(3, 4);

function ractangle(a, b) {
  return console.log(a * b);
}
function circle(r) {
  return console.log(2 * 3.24 * r);
}
module.exports = {
  square: square,
  ractangle: ractangle,
  circle: circle,
};