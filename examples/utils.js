const start = new Date();
function log(v) {
  const logTime = new Date();
  console.log("---------------");
  console.log(v);
  console.log(logTime - start + "MS");
  console.log("---------------");
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout((_) => resolve(), ms);
  });
}

const getUser = (_) => fetch("http://localhost:3000/user");
const getPost = (id) =>
  fetch(`http://localhost:3000/post/${id}`).then((res) => {
    if (res.status === 500) {
      throw new Error("bad things happened");
    }
  });
const getComment = (id) => fetch(`http://localhost:3000/comment/${id}`);
const pageInit = (_) => Promise.resolve(true);
const pageInit2 = (_) => Promise.resolve(false);
