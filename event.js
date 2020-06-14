
const event = require('events')

class MyEvent extends event {
	
}

const myevent = new MyEvent()

myevent.on('event', () => console.log('event fired!'))

myevent.emit('event')





