const request = require('supertest');
const express = require('express');
const routes = require('../app/routes/profileRoutes');

const app = express();
app.use(express.json());
app.use('/users/profiles', routes);

describe('PUT /users/profiles/:userId', () => {
  it('should return 404 if profile not found', async () => {
    const response = await request(app)
      .put('/users/profiles/nonexistent-id')
      .send({ fullName: 'Updated Name' });
    expect(response.statusCode).toBe(404);
  });
});
