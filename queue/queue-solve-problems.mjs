import Queue from "./queue.mjs";
import Deque from './deque.mjs';

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    };
}

function palindromeChecker(aString){
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)){
            return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split('').join('');
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;
}

export { hotPotato, palindromeChecker };
