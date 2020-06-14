const uuid = require('uuid')
const event = require('events')

class Logger extends event {
    log(msg) {
        this.emit('event', {
            id: uuid.v4(),
            msg
        })
    }
}

const logger = new Logger()

logger.on('event', (data) => console.log('called listener', data))

logger.log("hello world")

logger.log("hi there")

logger.log("love world")