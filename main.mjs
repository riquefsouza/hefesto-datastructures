import Stack from './stack/stack.mjs';
import { decimalToBinary, baseConverter } from './stack/stack-solve-problems.mjs';

import Queue from './queue/queue.mjs';
import Deque from './queue/deque.mjs';
import { hotPotato, palindromeChecker } from './queue/queue-solve-problems.mjs';
import LinkedList from './linkedlist/linked-list.mjs';
import DoublyLinkedList from './linkedlist/doubly-linked-list.mjs';
import SortedLinkedList from './linkedlist/sorted-linked-list.mjs';
import StackLinkedList from './linkedlist/stack-linked-list.mjs';
import Set from './set/set.mjs';
import Dictionary from './dictionary/dictionary.mjs';

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());

console.log(stack.toString());

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());

queue.enqueue('Camila');

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());

deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('John');
console.log(deque.toString());

const names = ['John','Jack','Camila','Ingrid','Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is: ${result.winner}`);

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));


const linkedlist = new LinkedList();
linkedlist.push("primeiro item");
linkedlist.push("segundo item");
console.log(linkedlist.toString());

const dlinkedlist = new DoublyLinkedList();
dlinkedlist.push("primeiro item");
dlinkedlist.push("segundo item");
console.log(dlinkedlist.toString());

const sortedlist = new SortedLinkedList();
sortedlist.insert(1);
sortedlist.insert(8);
sortedlist.insert(7);
console.log(sortedlist.toString());

const stacklist = new StackLinkedList();
stacklist.push(1);
stacklist.push(8);
stacklist.push(7);
console.log(stacklist.toString());

const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log(unionAB.values());

const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());


const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.remove('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());

dictionary.forEach((k, v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`);
});

