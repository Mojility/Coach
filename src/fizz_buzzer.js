class FizzBuzzer {
  responseFor(i) {
    let out = '';
    if (i % 3 === 0) out += 'fizz';
    if (i % 5 === 0) out += 'buzz';
    if (out === '') out += i;
    return out;
  }
}

module.exports = FizzBuzzer;