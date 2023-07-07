// array 
const person = 'I am learning web dev' 

const res = person.split(' ').map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ')
console.log('res',res);