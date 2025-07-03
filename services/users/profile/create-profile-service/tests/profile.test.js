const request = require('supertest');
const express = require('express');
const routes = require('../app/routes/profileRoutes');

const app = express();
app.use(express.json());
app.use('/users/profiles', routes);

describe('POST /users/profiles', () => {
  it('should create a profile', async () => {
    const response = await request(app)
      .post('/users/profiles')
      .send({
        userId: 'test123',
        fullName: 'John Doe',
        phone: '1234567890',
        birthDate: '2000-01-01',
        gender: 'Male'
      });
    expect(response.statusCode).toBe(201);
  });
});
