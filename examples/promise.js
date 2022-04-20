// console.log("synchronous 1");

// setTimeout(_ => console.log('setTimeout'), 0)

// Promise.resolve().then(_ => console.log('promise'))

// console.log("synchronous 4");


// -----------------------------------

// fetch('http://localhost:3000/name')
//     .then(res => res.json())
//     .then(data => console.log(data.name + " :)"))


// -----------------------------------

// fetch('http://localhost:3000/error')
//     .then(res => res.json())
//     .then(data => console.log(data.name + " :)"))
//     .catch(err => console.log('oops :('))

// -----------------------------------

// fetch('http://localhost:3000/error')
//     .then(res => res.json())
//     .then(data => console.log(data.name + " :)"))
//     .catch(err => console.log('oops :('))

// -----------------------------------
// const start = new Date()
// function log(v) {
//     const logTime = new Date();
//     console.log("---------------");
//     console.log(v);
//     console.log((logTime - start) + 'MS');
//     console.log('---------------');
// }

// const codeBlocker = () => {
//     let i = 0
//     while (i < 1000000000) {
//         i++
//     }
//     return '1000000000 counted'
// }
// 
// log("start");
// log(codeBlocker());
// log("end");

// const codeBlocker = () => {
//     return new Promise((resolve, reject) => {
//         let i = 0;
//         while (i < 1000000000) {
//           i++;
//         }
//         resolve("1000000000 counted");
//     })
// };

// log("start");
// codeBlocker().then(log);
// log("end");

// const codeBlocker = () => {
//   return Promise.resolve().then(() => {
//     let i = 0;
//     while (i < 1000000000) {
//         i++;
//     }
//     return "1000000000 counted";
//   })
// };

// log("start");
// codeBlocker().then(log);
// log("end");