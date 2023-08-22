const array = [3, 7, 9, 1, 0];

// Fila
const queue = [];
array.forEach(num => queue.push(num));
while (queue.length) {
  console.log(queue.shift());
}

// Lista
const list = [];
array.forEach(num => list.push(num));
while (list.length) {
  console.log(list.pop());
}

// Pilha
const stack = [];
array.forEach(num => stack.push(num));
while (stack.length) {
  console.log(stack.pop());
}