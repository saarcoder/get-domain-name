const getDomainName = require('./index')
test('split apart a found camelCase within a string', ()=>{
    expect(getDomainName("https://www.codewars.com/kata/latest/my-languages?beta=false")).toBe("codewars")
})