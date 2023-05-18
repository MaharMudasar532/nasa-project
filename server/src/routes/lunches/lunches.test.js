const request = require('supertest');
const app = require('../../app');
const { connectMongo } = require('../../utils/mongo');

describe("Test GET  /lunches",()=>{
    test('should response 200', async () => { 
        const response = await request(app).get('/launches');
        expect(response.statusCode).toBe(200); 
     })
})