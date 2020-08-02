const request = require("supertest");

const db = require("../database/config");

const server = require("../server");

describe("End Points Tests", function () {
  beforeAll(async () => {
    await db("users").truncate();
  });
  //Register tests
  it("POST /users/users", function () {
    return request(server)
      .post("/users/users")
      .send({
        username: "testman",
        password: "test123",
        email: "test@test.com",
        isInstructor: true,
      })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });

  it("POST /users/users", function () {
    return request(server)
      .post("/users/users")
      .send({
        username: "testjose",
        password: "secret123",
        email: "test@test.com",
        isInstructor: true,
      })
      .then((res) => {
        expect(res.body.username).toBe("testjose");
      });
  });
  //Classes test
  it("POST /classes/", function () {
    return request(server)
      .post("/classes/")
      .send({
        name: "test6",
        type: "yoga",
        startTime: "7-11-2020 7AM",
        duration: 30,
        intensity: "high",
        location: "florida",
        numberOfRegisteredAttendees: 25,
        maxClassSize: 50,
      })
      .then((res) => {
        expect(res.status).toBe(401);
      });
  });
  //Login Test
  it("POST /users/login", function () {
    return request(server)
      .post("/users/login")
      .send({ username: "testman", password: "test123" })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it("POST /users/login", function () {
    return request(server)
      .post("/users/login")
      .send({ username: "testjose", password: "secret123" })
      .then((res) => {
        expect(res.type).toBe("application/json");
      });
  });
  //Get Users tests
  it("GET /Users/", function () {
    return request(server)
      .get("/users/users")
      .then((res) => {
        expect(res.type).toBe("application/json");
      });
  });

  it("GET /Users/", function () {
    return request(server)
      .get("/users/Users")
      .then((res) => {
        expect(res.body).toBeDefined();
      });
  });
  //Get Classes tests
  it("GET /classes/", function () {
    return request(server)
      .get("/classes/")
      .then((res) => {
        expect(res.type).toBe("application/json");
      });
  });

  it("GET /classes/", function () {
    return request(server)
      .get("/classes/")
      .then((res) => {
        expect(res.body).toBeDefined();
      });
  });
});
