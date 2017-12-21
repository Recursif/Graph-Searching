

function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}


Node.prototype.visit = function(parent) {
  //Try to visit left branch
  if (this.left != null) {
    this.left.visit(this);
  }
  //Print the value of the node
  console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y);
  stroke(255);
  noFill();
  ellipse(this.x, this.y, 20, 20);
  line(parent.x, parent.y, this.x, this.y);
  //Try to visit right branch
  if (this.right != null) {
    this.right.visit(this);
  }
}

Node.prototype.search = function(val) {
  if (this.value == val) { //If found return
   return this;
 } else if (val < this.value && this.left != null) { //Search in left branch
    return this.left.search(val);
  } else if (val > this.value && this.right != null) { // Search in right branch
    return this.right.search(val);
  }
}

Node.prototype.addNode = function(n) {
  //Put the a node at the rigth place on the tree
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x - 4 * width / this.y;
      this.left.y = this.y + 20;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x  + 4 * width / this.y;
      this.right.y = this.y + 20;
    } else {
      this.right.addNode(n);
    }
  }
}
