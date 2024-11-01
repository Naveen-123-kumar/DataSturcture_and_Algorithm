console.log('Start');
setTimeout(() => {
    console.log('Timeout');
}, 0);
new Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
}).then(() => {
    console.log('Promise then');
});
console.log('End');
//output-
// Start
// Promise
//End
//Timeout
//promise then