const request = require('supertest');
const express = require('express');
const routes = require('../app/routes/profileRoutes');

const app = express();
app.use('/users/profiles', routes);

describe('DELETE /users/profiles/:userId', () => {
  it('should return 404 if user not found', async () => {
    const response = await request(app).delete('/users/profiles/nonexistent-id');
    expect(response.statusCode).toBe(404);
  });
});
