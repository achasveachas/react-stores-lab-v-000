const Store = require('./Store')

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor () {
    super(0)
  }

  increment () {
    const oldState = this.getState()
    this.setState(oldState + 1)
  }

  decrement () {
    const oldState = this.getState()
    this.setState(oldState - 1)
  }
}

module.exports = new CounterStore();
