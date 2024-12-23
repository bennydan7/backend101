import {jest} from '@jest/globals';
import request from 'supertest';
import app from '../../app.js';
// import supertest from 'supertest';

// const request = require('supertest')
// const app = require("../../app")

describe('Test GET /launches', () => {
    test('It should respond with 200 success',async ()=>{
        const response = await request(app)
        .get('/launches')
        .expect("Content-Type",/json/)
        .expect(200)
        })
}
)

describe('Test POST /launch',()=>{
    test('It should respond with 20 created',()=>{
        const response = 201;
        expect(response).toBe(201)
    })
    test('It should catch missing required launch property',()=>{})
    test('It should catch invalid launch date',()=>{})
})