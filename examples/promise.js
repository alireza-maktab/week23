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

// -------------------------------

// function promiseHell() {
//   let pageIsInit;
//   let userId;
//   let postId;

//   return pageInit()
//     .then((isInit) => {
//       pageIsInit = isInit;
//       return getUser().then((res) => res.json());
//     })
//     .then((user) => {
//       userId = user.id;
//       return getPost(userId).then((res) => res.json());
//     })
//     .then((post) => {
//       postId = post.id;
//       return getComment(postId).then((res) => res.json());
//     });
// }

// promiseHell().then(console.log);

// ----------------------------

// async function sample() {
//   return "asd";
// }

// function sample() {
//   return Promise.resolve("asd");
// }

// sample().then(console.log);

// ----------------------------

// const getFruits = async (name) => {
//   const fruits = {
//     pineapple: "🍍",
//     strawberry: "🍓",
//     orange: "🍊",
//     banana: "🍌",
//   };
//   return fruits[name];
// };

// const makeSmoothie = () => {
//   let a;
//   const promiseChainResult = getFruits("banana")
//     .then((x) => {
//       a = x;
//       return getFruits("strawberry");
//     })
//     .then((x) => {
//       return [a, x];
//     });

//   return promiseChainResult;
// };

// const makeSmoothie = async () => {
//   const a = await getFruits("banana");
//   const b = await getFruits("strawberry");
//   return [a, b];
// };

// makeSmoothie().then(console.log);

// ----------------------------

// async function promiseParadise() {
//   const pageIsInit = await pageInit();
//   const userRes = await getUser();
//   const userData = await userRes.json();
//   const postRes = await getPost(userData.id);
//   const postData = await postRes.json();
//   const commentRes = await getComment(postData.id);
//   const commentData = await commentRes.json();
//   return commentData;
// }

// promiseParadise().then(console.log);

// ----------------------------

// const getFruits = async (name) => {
//   const fruits = {
//     pineapple: "🍍",
//     strawberry: "🍓",
//     orange: "🍊",
//     banana: "🍌",
//   };
//   await delay(1000);
//   return fruits[name];
// };

// const makeSmoothie = async () => {
//   const a = await getFruits("banana");
//   const b = await getFruits("strawberry");
//   return [a, b];
// };

// const makeSmoothie2 = async () => {
//   const a = getFruits("banana");
//   const b = getFruits("strawberry");
//   const result = await Promise.all([a, b]);
//   return result;
// };

// makeSmoothie().then((r) => {
//   console.log("wait for each");
//   log(r);
// });
// makeSmoothie2().then((r) => {
//   console.log("combined with Promise.all");
//   log(r);
// });

// --------------------

// async function fastOne() {
//   await delay(1000);
//   return "I'm fast";
// }

// async function slowOne() {
//   await delay(3000);
//   return "I'm slow";
// }

// Promise.race([slowOne(), fastOne()]).then(log);

// ----------------------------------------

// async function badFunc() {
//   let user;
//   try {
//     const userRes = await getPost(1);
//     user = userRes.json();
//   } catch (err) {
//     return "❌ " + err + " ❌";
//   }
//   return user;
// }

// badFunc().then(console.log);
