const http = require('http')

http.createServer((req, res) => {
    res.write('Hello word')
    res.end()
}).listen(5000, () => {
    console.log('server listening ')
})