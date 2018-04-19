//
//server.js
//

var http = require("http")

const port = process.env.PORT || 3000;

function onRequest(request, response){
    console.log("Er was een request.")
    response.writeHead(200,{"Content-Type": "application/json"})
    let result = JSON.stringify({
        "firstname": "Rick",
        "lastname:": "IJtsma"
    })
    
    response.end(result);
}

http.createServer(onRequest).listen(port || 3000)

console.log("De server luistert op port " + port)