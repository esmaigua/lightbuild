const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const addressRoutes = require("../app/routes/addressRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/users/addresses", addressRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27019/create_address_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("DELETE /users/addresses", () => {
  it("debería devolver error si no se envía _id", async () => {
    const res = await request(app).delete("/users/addresses").send({});
    expect(res.statusCode).toBe(400);
  });
});

