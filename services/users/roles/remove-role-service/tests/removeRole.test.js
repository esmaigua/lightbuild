const request = require('supertest');
const express = require('express');
const removeRoleRoutes = require('../app/routes/removeRoleRoutes');

const app = express();
app.use(express.json());
app.use('/remove-role', removeRoleRoutes);

describe('DELETE /remove-role/:id', () => {
  it('should return 404 for invalid id', async () => {
    const res = await request(app).delete('/remove-role/123456789012345678901234');
    expect(res.statusCode).toEqual(404);
  });
});
