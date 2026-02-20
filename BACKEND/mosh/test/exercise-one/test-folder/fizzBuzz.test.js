const { fizzBuzz } = require("../files/fizzbuzz");


describe('fizzBuzz', ()=> {
    it('should throw an exception if the input is only number!', ()=> {
        expect(() => { fizzBuzz('A') }).toThrow();
    });
   
    it('should return FizzBuzz if the input is divided by 3 and 5',()=> { 
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
     });
     it('should return Fizz if the input is divided only by 3',() =>{
        const result = fizzBuzz(3);
        expect(result).toBe('Fizz');
     });
     it('should return Buzz if the input is only divided by 5',()=>{
        const result = fizzBuzz(5);
        expect(result).toBe('Buzz');
     });
     it('return if the input is not divided by 3 or 5',()=>{
        const result = fizzBuzz(1);
        expect(result).toBe(1);
     });

});