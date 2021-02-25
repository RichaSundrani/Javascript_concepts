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

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000)
// };

// getPosts();
// createPost({ title: "Post 3", body: "This is post three!" });

// using callback methids 
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
};

createPost({ title: "Post 3", body: "This is post three!" }, getPosts);
