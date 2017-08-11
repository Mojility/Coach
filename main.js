for(let i=1; i<=25; i++) {
  let out = '';
  if (i % 3 === 0) out += 'fizz';
  if (i % 5 === 0) out += 'buzz';
  if (out === '') out += i;
  console.log(out);
}
