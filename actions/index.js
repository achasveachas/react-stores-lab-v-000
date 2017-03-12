const CounterStore = require('../stores/counterStore')

function increment() {
  CounterStore.increment()
}

function decrement() {
  CounterStore.decrement()
}

module.exports = {
  // Your implementation here.
  // Hint: We need two actions!
  increment,
  decrement
};
