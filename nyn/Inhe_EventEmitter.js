const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  // Add any custom methods here
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
