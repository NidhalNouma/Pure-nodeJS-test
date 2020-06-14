const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // if (req.url === '/') {
    //         fs.readFile(path.join(__dirname,'public', 'index.html'), (err, data) => {
    //             if (err) res.end(err.toString())
    //             else {
    //                 res.writeHead(200, {
    //                     'Content-Type': 'text/html'
    //                 })
    //                 res.end(data)
    //             }
    //         })
    //     }
    //     else if (req.url === '/about') {
    //             fs.readFile(path.join(__dirname,'public', 'about.html'), (err, data) => {
    //                 if (err) res.end(err.toString())
    //                 else {
    //                     res.writeHead(200, {
    //                         'Content-Type': 'text/html'
    //                     })
    //                     res.end(data)
    //                 }
    //             })
    //         }
    //     else if (req.url === '/api/users') {
    //         const users = [
    //             {
    //                 name: 'first',
    //                 age: '0'
    //             },
    //             {
    //                 name: 'second',
    //                 age: '1'
    //             }
    //         ]

    //         res.writeHead(200, {
    //             'Content-Type': 'application/json'
    //         })
    //         res.end(JSON.stringify(users))
    //     }
    //     else {
    //         res.end('<h1>404</h1>')
    //     }

        let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
        let ext = path.extname(filePath)
        let contentType = 'text/html'
        switch (ext) {
            case '.json':
                contentType = 'application/json'
                break
            case '.css':
                contentType = 'text/css'
                break
            case '.js':
                contentType = 'text/javascript'
                break
            case '.png':
                contentType = 'image/png'
                break
            case '.jpg':
                contentType = 'image/jpg'
                break
            default:
                contentType = 'text/html'
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                    console.log(err.toString())
                    if (err.code == "ENOENT") {
                        // Page not found
                        fs.readFile(
                        path.join(__dirname, "public", "404.html"),
                        (err, content) => {
                            res.writeHead(404, { "Content-Type": "text/html" });
                            res.end(content, "utf8");
                        }
                        );
                    } else {
                        //  Some server error
                        res.writeHead(500);
                        res.end(`Server Error: ${err.code}`);
                    }

                } else {
                    res.writeHead(200, { 'Content-Type': contentType })
                    res.end(content)
                }
        })
})


const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log('server listening ')
})

