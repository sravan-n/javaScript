let sample = [
    {name: 'sravan', age: 27},
    {name: 'pranav', age: 23},
    {name: 'hemanth', age: 21},
    {name: 'srikanth', age: 19},
    {name: 'niharika', age: 21},
    {name: 'venkatesh', age: 18},
    {name: 'arjun', age: 27},
    {name: 'unknown', age: 20},
];
console.log('----------------------------------------------');
console.log('Filter Method');
sol1 = sample.filter((el) => {
    return el.age <=20
});
console.log(sol1);
console.log('----------------------------------------------');
console.log('Map Method');
sol2 = [];
sample.map((el) => {
    el.age <=20 ? sol2.push(el.name) : '';
});
console.log(sol2);
console.log('----------------------------------------------');
console.log('Find Method');
sol3 = sample.find((el) => {
    return el.age >= 20;
});
console.log(sol3);
console.log('----------------------------------------------');
console.log('FoeEach Method');
sample.forEach((el) => console.log(el.name +' age is ' + el.age));
console.log('----------------------------------------------');
console.log('Some Method');
kids = sample.some((el) => {
    return el.age <=15
});
kids ? console.log('YES children') : console.log('NO children');
console.log('----------------------------------------------');
console.log('Every Method');
adults = sample.every((el) => {
    return el.age >=20
});
kids ? console.log('EVERY one adult') : console.log('not EVERY one adult');