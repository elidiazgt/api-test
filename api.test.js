const { expect } = require("./config");
const app = require('./server'); 
var should = require("chai").should();
var request = require("request");
var supertest = require("supertest")(app);
//const request = supertest(app)
//let url_api = 'http://localhost:8000'

//request = request.bind(request, url_api);

//request('http://localhost:8000');
// describe("GET /iecho", function() {
//   it("returns reverse text parameter",  function() {
//     //console.log("request", request);

//     const response =  req(app).get("/iecho").send({ text: "KIX" });
    
//     console.log("response", response);

//    // expect(response.status).to.eql(200);
//    /// expect(response.body.data.length).to.eql(30);
//   });
// });

 describe("Server", function() {
   
//   it("long test", function(done) {
//     this.timeout(10000);
//     // do slow async things
//     done();
// });

  it("Responds with 'Hello, World!'", function(done) {
    supertest
        .get("/iecho")
        .expect(400)
        .send('text=john')
        .end(done);
 });

//   it("responds with JSON message 'Hello, World!' at the root", function(done) {
//     request("http://localhost:8000", function(err, response, body) {
//         if (err) done(err);

//         var payload = JSON.parse(body);
//        // assert.equal(payload.message, "Hello, World!");

//         done();
//     });
// });



// it('Gets the test endpoint', async  done => {
//   // Sends GET Request to /test endpoint
//    //this.timeout(1000);
//   // await delay(1000)
//  // this.enableTimeouts(false)
//    let response =  await supertest(app)
//    .get("/iecho")
//    .set('Accept', 'application/json')
//   // .expect('Content-Type', /json/)
//    .send('text=john')
//    .expect(200)
//    .end(function(err, res) {
//     if (err) return done(err);
//     return done();
//   });



// //.end(function(err, res) {

// // console.log('errror',err,res)
// console.log('test')
// //   } )
// //   console.log('response test',  response.status)

//   // ...
// // done()
// })
})