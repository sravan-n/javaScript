per = {
    name: 'sravan',
    family: [
        {name: 'arjun', age: 20},
        {name: 'arjunbbb', age: 240}
    ]
}

console.log(per.name);
console.log(per['name']);
x = per.family;
arr = [];
x.map((p) => {
    arr.push(p.name)
});
console.log(per);
console.log(x);
console.log(arr);
