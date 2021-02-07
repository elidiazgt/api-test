const server = require("./server.js")



// listen for requests :)
const listener =server.listen(8000, () => {
    console.log("Server has started!" + listener.address().port)
  })