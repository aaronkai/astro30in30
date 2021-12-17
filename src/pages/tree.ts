console.log("🌳🌳🌳🌳");

class TreeNode {
  val: any;
  right: TreeNode;
  left: TreeNode;
  count: number;

  constructor(val: any) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.count = 0;
  }
}

class BST {
  root: TreeNode;

  constructor() {
    this.root = null;
  }
  create(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) {
        current.count++;
        return this;
      }
      if (val < current.val) addSide("left");
      else addSide("right");
    }
  }
  // execute breadth-first search
  breadthFirstSearch(start?: any) {
    let search: TreeNode | boolean = this.find(start);
    let visited = [];
    let queue = [];
    let current: TreeNode = search instanceof TreeNode ? search : this.root;

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.val);

      if (current && current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  //Depth-first searches: preOrder, postOrder, inOrder
  preOrderDepthSearch() {
    let visited = [];
    let current = this.root;

    let traverse = (node) => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return visited;
  }

  postOrderDepthSearch() {
    let visited = [];
    let current = this.root;

    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.val);
    };

    traverse(current);
    return visited;
  }

  inOrderDepthSearch() {
    let visited = [];
    let current = this.root;

    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      visited.push(node.val);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(current);
    return visited;
  }

  find(val: any): TreeNode | boolean {
    if (!this.root) return undefined;
    let current: TreeNode = this.root;
    let found: boolean = false;

    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }

    if (!found) return false;
    return current;
  }

  delete(val) {
    if (!this.root) return undefined;
    let current = this.root;
    let parent;

    const pickSide = (side) => {
      if (!current[side]) return "no node found!";
      parent = current;
      current = current[side];
    };

    const deleteNode = (side) => {
      if (current.val === val && current.count > 1) current.count--;
      else if (current.val === val) {
        const children = this.breadthFirstSearch(current.val);
        parent[side] = null;
        children.splice(0, 1);
        children.forEach((child) => this.create(child));
      }
    };
    while (current.val !== val) {
      if (val < current.val) {
        pickSide("left");
        deleteNode("left");
      } else {
        pickSide("right");
        deleteNode("right");
      }
    }
  }
}

const tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);
// console.log(tree.BFS());
// tree.preOrder();
// tree.postOrder();
// tree.inOrder();

const nameTree = new BST();
nameTree.create("floyd");
nameTree.create("bob");
nameTree.create("doug");
nameTree.create("alan");
nameTree.create("gregor");
nameTree.create("egan");
nameTree.create("clarence");
nameTree.create("zepher");

const bredth = nameTree.breadthFirstSearch();
const pre = nameTree.preOrderDepthSearch();
const post = nameTree.postOrderDepthSearch();
const inOrder = nameTree.inOrderDepthSearch();
// console.log(nameTree.breadthFirstSearch());

nameTree.delete("zepher");
// console.log(nameTree.breadthFirstSearch());

// console.log({ nameTree });
// console.log({ bredth });
// console.log({ pre });
// console.log({ post });
// console.log({ inOrder });

// console.log(nameTree.find("bob"));
// console.log(tree);

// const factorial = (n) => {
//   let num = n;

//   if (n === 0) return 1;
//   for (let i = 0; i < n; i++) {
//     console.log(num);
//     num = n * factorial(n - 1);
//   }
//   return num;
// };

// console.log(factorial(12));

function miniMaxSum(array: number[]): void {
  let min: number;
  let max: number;
  let possibleAnswers: number[] = [];
  let answer: string = `${min} ${max}`;

  for (let i = array.length; i < array.length; i++) {
    console.log(i);
    // const tempArray: number[] = array.filter((number, j) => {
    //     console.log(i,j);

    //     if (i != j) {
    //         console.log(number);
    //         return number
    //     }
    // })
    // possibleAnswers.push(tempArray.reduce((a,b) => {return a+b}, 0))
  }

  console.log(possibleAnswers);
}

miniMaxSum([1, 2, 3, 4, 5]);
