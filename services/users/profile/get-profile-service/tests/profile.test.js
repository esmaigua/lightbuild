const request = require('supertest');
const express = require('express');
const route = require('../app/routes/profileRoutes');

const app = express();
app.use('/users/profiles', route);

describe('GET /users/profiles/:userId', () => {
  it('should return 404 for unknown userId', async () => {
    const response = await request(app).get('/users/profiles/unknown-id');
    expect(response.statusCode).toBe(404);
  });
});
