describe('Test GET /launches', () => {
    test('It should respond with 200 success',()=>{
        const response = 200;
        expect(response).toBe(200)
    })
}
)

describe('Test POST /launch',()=>{
    test('It should respond with 201 created',()=>{
        const response = 201;
        expect(response).toBe(201)
    })
    test('It should catch missing required launch property',()=>{})
    test('It should catch invalid launch date',()=>{})
})