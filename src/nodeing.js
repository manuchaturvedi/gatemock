const EventEmitter=require('events')
const eventEmitter=new EventEmitter();

eventEmitter.on('tutorial',()=>{console.log('this is the event function')})

eventEmitter.emit('tutorial')