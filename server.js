//
//server.js
//

var http = require("http")

function onRequest(request, response){
    console.log("Er was een request.")
    response.writeHead(200,{"Content-Type": "application/json"})
    let result = JSON.stringify({
        "firstname": "Rick",
        "lastname:": "IJtsma"
    })
    
    response.end(result);
}

http.createServer(onRequest).listen(3000)

console.log("De server luistert op port 3000")