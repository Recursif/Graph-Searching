var cities = [];
var totalCities = 7;
var recordDist;
var shortestPath;

var count = 0;
var totalPermutations = factorial(totalCities);
var order = [];

function setup() {
  createCanvas(400, 700);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(300));
    cities[i] = v;
    order[i] = i;
  }

  var d = calcDistance(cities, order);
  recordDist = d;
  shortestPath = order.slice();
}

function draw() {
  background(0);



  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[order[i]].x, cities[order[i]].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < shortestPath.length; i++) {
    vertex(cities[shortestPath[i]].x, cities[shortestPath[i]].y);
  }
  endShape();

  noStroke();
  textSize(44);
  for (var i = 0; i < cities.length; i++) {
    fill(0, i * 40, 200);
    ellipse(cities[i].x, cities[i].y, 50, 50);
    fill(255);
    text(order[i],cities[i].x + 25, cities[i].y + 25);
  }




  var d = calcDistance(cities, order);
  if (d < recordDist) {
    recordDist = d;
    shortestPath = order.slice();
    console.log(recordDist);
  }

  nextOrder();

  var percent = 100 * (count / totalPermutations);
  text(nf(percent, 0, 1) + "% completed", 20, height - 50);
}

function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length - 1; i++) {
    var cityA = points[order[i]];
    var cityB = points[order[i+1]];
    var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
}

function swap(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

function nextOrder() {
  count++;
  //Article : https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
  //STEP 1
  var largestI = - 1;
  for (var i = 0; i < order.length - 1; i++) {
    if (order[i] < order[i + 1]) {
      largestI = i;
    }
  }
  if (largestI == -1) {
    noLoop();
    console.log('finished');
  }

  //STEP 2
  var largestJ = - 1;
  for (var j = 0; j < order.length; j++) {
    if (order[largestI] < order[j]) {
      largestJ = j;
    }
  }

  //STEP 3
  swap(order, largestI, largestJ);

  //STEP 4: reverse from largestI + 1 to the end
  var endArray = order.splice(largestI + 1);
  endArray.reverse();
  order = order.concat(endArray);
}


function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
      return n * factorial(n - 1);
  }
}
