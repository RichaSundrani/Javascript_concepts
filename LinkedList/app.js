const LinkedList = require("./LinkedList");

const list1 = new LinkedList();


list1.append(1);
list1.append("two");
list1.append(3);
list1.append("four");
list1.prepend(0);
list1.prepend("head");
list1.prepend("head");
list1.prepend("head");
list1.append("tail");
list1.append("tail");
let listArr = list1.toArray();
// list1.delete("head");
// listArr = list1.toArray();
// list1.delete("tail");
// listArr = list1.toArray();
let find = list1.find("head");
list1.insertAfter("Richard", "head");
listArr = list1.toArray();
console.log(listArr);
console.log(find);