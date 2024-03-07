// const promise = new Promise((resolve , reject) => {
//     resolve("Hello");
// });

// promise.then((result) => {
//     console.log("Result : " + result)
// }).catch((err)=> {
//     console.log("Error : " + err);
// })



fetch("https://icanhazdadjoke.com/")
  .then((data) => data.json())
  .then((joke) => {
    console.log(joke);
  })
  .catch((err) => {
    console.log(err);
  });
