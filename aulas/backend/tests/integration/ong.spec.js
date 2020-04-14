const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () =>{
    beforeEach(async () => {
      await connection.migrate.latest();
});
 afterAll(async () => {
      await  connection.destroy();
    });
it('should be able to create a new ONG', async () =>{
const response = await request(app)
    .post('/ongs')
    .send({
        name: "teste",
        email: "contato@apad5.com",
        whatsapp: "4700300124",
        city: "Alegrete",
        uf: "RS"});
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});