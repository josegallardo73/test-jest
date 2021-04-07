function fizzBuzz(num) {
    
    let response = ''
    
    if (num % 3 == 0) {
        response += 'Fizz';
    }
    if (num % 5 == 0) {
        response += 'Buzz';
    } 
    
    return response.length ? response : num;
}

module.exports = fizzBuzz;