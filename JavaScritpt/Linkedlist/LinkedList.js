class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addElement(number) {
    var node = new Node(number);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  addAt_index(number, index) {
    if (index < 0 || index > this.size) {
      console.log("Add valid index");
    }
    var node = new Node(number);
    var cur, pre;
    cur = this.head;
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      cur = this.head;
      var it = 0;
      while (it < index) {
        it++;
        pre = cur;
        cur = cur.next;
      }
      node.next = cur;
      pre.next = node;
    }
    this.size++;
  }
  removeElement(index) {
    if (index < 0 || index >= this.size) {
      console.log("invalid index");
    } else {
      var cur, pre;
      cur = this.head;
      let it = 0;
      if (index == 0) {
        this.head = cur.next;
      } else {
        while (it < index) {
          it++;
          pre = cur;
          cur = cur.next;
        }
        pre.next = cur.next;
      }
      this.size--;
      return cur.number;
    }
  }
  Size_list() {
    console.log(this.Size);
  }
  printList() {
    var current = this.head;
    var result = "";
    while (current) {
      result = result + current.element + ",";
      current = current.next;
    }
    console.log(result);
  }
}
var list = new Linkedlist();
list.addElement(5);
list.addElement(100);
list.addElement(50);
list.addElement(1001);
console.log("Print addElement:")
list.printList();
list.addAt_index(10, 1);
console.log("Print addElement after adding at index :")

list.printList();
console.log("Print Removed element:")

list.removeElement(1)
list.printList();


console.log(list.Size_list());
console.log(list.isEmpty)
