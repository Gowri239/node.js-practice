const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile('message.txt',{encoding: "utf-8"},(err,data)=>{
            if(err){
                console.log(err)
            }
        res.write('<html>')
        res.write('<head><title>project page</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        res.end()
    }
    )}
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data',(chunk) => {
            body.push(chunk)
        })
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt',message,err => {
                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end();
            })
        })  
    }
}



//module.exports = requestHandler;
module.exports = {
    handler: requestHandler,
    someText: 'some text'
}

//exports.handler = requestHandler;
