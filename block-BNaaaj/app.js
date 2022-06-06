let area = require('./area')
var circle_area = area.circle(10);

console.log(circle_area,square_area,rectangle_area)

var buffer1 = Buffer.alloc(12)
var buffer2 = Buffer.allocUnsafe(12);
 

buffer1.write('Hello-World')
console.log(bufer1.toString()); 
