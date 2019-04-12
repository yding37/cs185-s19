const http = require('http')

var counter = 0;
const requestHandler = (request, response) => {
  console.log(request.url)
  counter += 1;

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  
  response.end(counter.toString());
}

const server = http.createServer(requestHandler)
const port = 3000

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})