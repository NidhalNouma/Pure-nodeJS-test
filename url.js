
const url = require('url')

const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

console.log(myurl.href)

console.log(myurl.hostname)

console.log(myurl.port)

console.log(myurl.pathname)

console.log(myurl.search)

console.log(myurl.searchParams)


