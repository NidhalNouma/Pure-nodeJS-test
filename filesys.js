const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname,'/test'), {}, function (err) {
        if (err) {
                      console.log(err)
                }
        else {
                console.log('folder created ')
            }
    })

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'hello node \nhello word', function (err) {
//     if (err) {
//                   console.log(err)
//             }
//     else {
//             console.log('file created ')
//         }
//     })

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
        if (err) {
                   console.log(err)
             }
        else {
                 console.log(data)
        } 
})