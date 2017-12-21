var cities = [];
var totalCities = 10;
var recordDist;
var shortestPath;

function setup() {
  createCanvas(400, 300);
  frameRate(5);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }

  var d = calcDistance(cities);
  recordDist = d;
  shortestPath = cities.slice();
}

function draw() {
  background(0);
  fill(255);
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 6, 6);
  }
  stroke(140 + floor(random(105)), 140 + floor(random(105)), 0);
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(3);
  noFill();
  beginShape();
  for (var i = 0; i < shortestPath.length; i++) {
    vertex(shortestPath[i].x, shortestPath[i].y);
  }
  endShape();

  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i ,j);
  var d = calcDistance(cities);
  if (d < recordDist) {
    recordDist = d;
    shortestPath = cities.slice();
    console.log(recordDist);
  }

}

function Path() {
  this.cities = cities
}

function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}

function swap(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}
