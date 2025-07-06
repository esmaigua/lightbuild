const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const addressRoutes = require("../app/routes/addressRoutes");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use("/", addressRoutes);

describe("POST /create-address", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://admin:admin123@localhost:27019/create_address_db?authSource=admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  it("debería crear una dirección", async () => {
    const res = await request(app)
      .post("/create-address")
      .send({
        user_id: "123",
        street: "Av. Principal",
        city: "Quito",
        state: "Pichincha",
        postal_code: "170516",
        country: "Ecuador",
        is_primary: true
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });
});
