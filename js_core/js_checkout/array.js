const res = 'I am learning Web Dev'.split(' ')
.map(s => s[0].toLocaleUpperCase() + s.slice(1).toLocaleLowerCase()).join(' '); 
console.log('res', res); // res I Am Learning Web Dev
