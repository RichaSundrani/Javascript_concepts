const fetch = require('node-fetch');
const posts = [
    { title: "Post 1", body: "This is post one!" },
    { title: "Post 2", body: "This is post two!" },
];

function getPosts() {
    setTimeout(() => {
        posts.forEach((post, index) => {
            console.log(`${post.title} - ${post.body} `);
        })
    }, 1000)
};

// instead of callback method we will return a promise 
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Some error");
            }
        }, 2000);
    })
};

// createPost({ title: "Post 3", body: "This is post three!" })
//     .then(getPosts)
//     .catch(console.log(error));

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, "goodBye")
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//         res.json();
//         console.log(res.json());
//     });
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

// console.log("hault");