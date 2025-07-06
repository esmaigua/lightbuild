const request = require('supertest');
const express = require('express');
const bodyParser = require('express');
const assignRoleRoutes = require('../app/routes/assignRoleRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/assign-role', assignRoleRoutes);

describe('POST /assign-role', () => {
  it('should return 400 if required fields are missing', async () => {
    const res = await request(app)
      .post('/assign-role')
      .send({ userId: '' });
    expect(res.statusCode).toEqual(400);
  });
});
