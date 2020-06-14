const os = require('os')

// console.log(os.platform())

//console.log(os.arch())

//console.log(os.cpus())

console.log('free memory =>'+os.freemem())
console.log('total memory =>'+os.totalmem())

console.log(os.homedir())