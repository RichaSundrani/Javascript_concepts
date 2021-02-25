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

async function init() {
    await createPost({ title: "Post 3", body: "This is post three!" });
    getPosts();
}

init();