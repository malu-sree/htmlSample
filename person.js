// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
  
// //   const p1 = new Person("Sreelekshmi", 23);
// //   console.log(p1.Person)
  

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data fetched");
//     }, 1000);
// }

// fetchData((result) => {
//     console.log(result);
// });

// let promise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Success!");
//     } else {
//         reject("Error!");
//     }
// });

// promise.then((msg) => console.log(msg)).catch((err) => console.error(err));
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function example() {
    console.log("Waiting...");
    await delay(2000); // waits for 2 seconds
    console.log("Done!");
  }
  
  example();
  