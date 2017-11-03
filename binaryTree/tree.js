module.exports = class BinaryTree {
  constructor (NodeConstructor) {
    this.root = null;
    this.NodeConstructor = NodeConstructor;
  }

  push (value) {
    const newNode = new this.NodeConstructor(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while(currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  searchDepthFirst (value, node) {
    if (!node) {
      node = this.root;
    }

    if (value === node.value) {
      return node;
    } else if (value < node.value) {
      node = node.left;
    } else {
      node = node.right;
    }

    if (!node) {
      return null;
    } else {
      return this.searchDepthFirst(value, node);
    }
  }

  *inOrder (node) {
    if (!node) {
      node = this.root;
    }

    if (node.left) {
      yield* this.inOrder(node.left);
    }

    yield node.value;

    if (node.right) {
      yield* this.inOrder(node.right);
    }
  }

  *postOrder (node) {
    if (!node) {
      node = this.root;
    }

    if (node.left) {
      yield* this.postOrder(node.left);
    }

    if (node.right) {
      yield* this.postOrder(node.right);
    }

    yield node.value;
  }

  *preOrder (node) { // fix
    if (!node) {
      node = this.root;
    }

    yield node.value;

    if (node.left) {
      yield* this.preOrder(node.left);
    }

    if (node.right) {
      yield* this.preOrder(node.right);
    }
  }
}