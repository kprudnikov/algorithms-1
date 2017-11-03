const Node = require('./node');
const BinaryTree = require('./tree');

const tree = new BinaryTree(Node);

tree.push(40);
tree.push(25);
tree.push(10);
tree.push(32);
tree.push(78);

const walkInOrder = tree.inOrder();
let inOrder = walkInOrder.next();

console.log('Walk in order:');
while (!inOrder.done) {
  console.log(inOrder.value);
  inOrder = walkInOrder.next();
}

console.log('Walk post order:');
const walkPostOrder = tree.postOrder(tree.root);
let postOrder = walkPostOrder.next();
while (!postOrder.done) {
  console.log(postOrder.value);
  postOrder = walkPostOrder.next();
}

console.log('Walk pre order:');
const walkPreOrder = tree.preOrder(tree.root);
let preOrder = walkPreOrder.next();
while (!preOrder.done) {
  console.log(preOrder.value);
  preOrder = walkPreOrder.next();
}