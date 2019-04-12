# Hacking the DOM

Dicussion notes from 12 Apr 2019 for CS 185

## Create a simple website

- [ ] Create a webpage in this folder with the files

```
index.html
script.js
style.css
```

- [ ] Import style and script into HTML file
- [ ] Create a few `<p></p>` Tags.
- [ ] Give some a class, some ID
- [ ] Create one that is nested.

## Adding Dynamic Elements with javascript

- [ ] Call a function when page finishes loading
- [ ] Print the DOM (document)
- [ ] Change the text color
- [ ] Change the text
- [ ] Add a heading to a div tag
- What kind of structure is a DOM?
    - List? Tree? Hashtable? 
    - What is being stored as a list?
    - What is being stored in a hashtable?
    - What is the tree?
- [ ] Timeouts & function handles

## CSS

- [ ] Style elements, try out specificity

## Server vs Client
- What is server side code vs client side code?
- Why do we need a server?
- Lets build a hit counter!

- [ ] Install [node.js](https://nodejs.org)
- [ ] Create a `server.js` file
- [ ] Copy code:

```javascript
const http = require('http')

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)
const port = 3000

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
```

**Further reading**: the many ways to declare javascript [functions](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/)

**Further reading**: The many ways to declare [variables](https://hackernoon.com/js-var-let-or-const-67e51dbb716f)

**Further reading** on libraries which can simplify your life: [here](https://blog.risingstack.com/your-first-node-js-http-server/)

- [ ] Send back JSON with counter. Note: need to `JSON.stringify` the response.

- [ ] Add a sleep function. Is this synchronous or asynchronous?

```javascript
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
```

- [ ] Retrieve and display the counter using javascript
```javascript
var xmlhttp = new XMLHttpRequest();
var url = "localhost:3000";

xmlhttp.setRequestHeader("Content-Type", "application/json");

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var json = JSON.parse(xmlhttp.responseText);
        console.log(json);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
```

- readyState 4 is DONE (request is complete) [reference](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
- Http status 200 is OK [reference](https://httpstatuses.com/)

*Advanced* At some point you might run into a CORS issue (Access restrictions across domains.) 

```javascript
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Headers", "*");
```

https://www.w3.org/wiki/CORS_Enabled
https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue

## Serving webpages
### Express JS
Framework for easily serving websites with node.js.

For comparison, here is a node.js server [without a framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)

### React JS
We will be starting react soon, please install and check out some tutorials.

## Summary

- Familarity with using the console and browser tools for debugging
- An understanding of UI manipulation at a lower level
- Client, Server, Asychronous communication
