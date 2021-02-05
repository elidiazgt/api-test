const request = require("supertest");
const expect = require("chai").expect;

describe("GET /iecho", function() {
  it("returns reverse text parameter", async function() {
    console.log("request", request);

    const response = await request.post("/iecho/").send({ text: "KIX" });

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(30);
  });
});
