var ib1, ib2
var n1, n2

var b1, b2, b3, b4

function setup() {
  createCanvas(400, 400);
  ib1 = createInput()
  ib1.position(5, 60)
  ib2 = createInput()
  ib2.position(200, 60)
  b1 = createButton("add")
  b1.position(10, 200)

b1.mousePressed(add)

  b2 = createButton("subtract")
  b2.position(100, 200)
  b2.mousePressed(sub)
  b3 = createButton("divide")
  b3.position(190, 200)
  b3.mousePressed(divide)
  b4 = createButton("times")
  b4.position(190 + 90, 200)
  b4.mousePressed(times)

}





function draw() {
  background("yellow");
  n1 = parseInt(ib1.value())
  n2 = parseInt(ib2.value())
}
function add(){
  console.log(n1+n2)
}
function sub(){
  console.log(n1-n2)
}
function divide(){
  console.log(n1/n2)
}
function times(){
  console.log(n1*n2)
}