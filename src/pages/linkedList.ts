console.log("Linked Lists 🧕➡️🥕➡️🥕➡️🥕➡️🔚");

class ListNode {
  val: any;
  next: ListNode;
  prev: ListNode;
  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  head: ListNode;
  tail: ListNode;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addHead(val: any) {
    let newListNode = new ListNode(val);

    if (!this.head) {
      this.head = newListNode;
      this.tail = this.head;
    }

    this.head.prev = newListNode;
    newListNode.next = this.head;
    this.head = newListNode;

    this.length++;
    return this;
  }
  addTail(val: any) {
    let newListNode = new ListNode(val);

    if (!this.head) {
      this.head = newListNode;
      this.tail = newListNode;
    }

    this.tail.next = newListNode;
    newListNode.prev = this.tail;
    this.tail = newListNode;

    this.length++;
    return this;
  }

  removeHead() {
    let removed = this.head;
    if (!this.head) return undefined;

    this.head = this.head.next;
    this.head.prev = null;

    this.length--;
    return removed;
  }

  removeTail() {
    let removed = this.tail;
    if (!this.tail) return undefined;

    this.tail = removed.prev;
    this.tail.next = null;

    this.length--;
    return removed;
  }

  find(index) {
    let current;
    if (index < 0 || index >= this.length) return undefined;

    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
    } else {
      current = this.tail;
      for (let i = this.length; i > index; i--) current = current.prev;
    }
    return current;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.addTail(val);
    if (index === 0) return this.addHead(val);

    let prev = this.find(index - 1),
      newNode = new ListNode(val),
      temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    newNode.prev = prev;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.removeTail();
    if (index === 0) return this.removeHead();

    let removed = this.find(index);

    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;

    length--;
    return removed;
  }

  update(index, val) {
    if (index < 0 || index > this.length) return null;
    let toUpdate = this.find(index);
    toUpdate.val = val;
  }
}

let iggySays = new LinkedList();
iggySays.addHead("hello");
iggySays.addTail("my");
iggySays.addTail("name");
iggySays.addTail("is");
iggySays.addTail("Iggy");
iggySays.addTail("Pop");

// console.log(iggySays);
// console.log(iggySays.find(1).val);
