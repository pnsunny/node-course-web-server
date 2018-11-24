const request = require('supertest');
const app = require('./server').app;


describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        let response = await request(app).get("/");
            let myProfile = {
                name: 'haudt',
                hobies: ['watching video', 'reading book']
            }
            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(myProfile)
    });
})

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
})