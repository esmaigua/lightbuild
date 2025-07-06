const request = require('supertest');
const express = require('express');
const listRolesRoutes = require('../app/routes/listRolesRoutes');

const app = express();
app.use(express.json());
app.use('/list-roles', listRolesRoutes);

describe('GET /list-roles', () => {
  it('should respond with status 200', async () => {
    const res = await request(app).get('/list-roles');
    expect(res.statusCode).toEqual(200);
  });
});
