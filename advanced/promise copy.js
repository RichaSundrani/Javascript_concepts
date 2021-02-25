let country = {
    usa: "United States of America",
    ca: "Canada",
    in: "India"
};

let getName1 = (code) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (country[code]) {
                resolve(country[code]);
            } else {
                reject("Country name not found!")
            }
        }, 4000)
    })
};

let getName2 = (code) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (country[code]) {
                resolve(country[code]);
            } else {
                reject("Country name not found!")
            }
        }, 1000)
    })
};

console.log("Calling with then - promise1...");
let promise1 = getName1('ca');
promise1.then((data) => {
    console.log(`Resolved: ${data}`);
}).catch((err) => {
    console.log(`Errpr: ${err}`);
});

let main = async () => {
    console.log("inside main...");
    let pronise2 = await getName2('usa');
    console.log(`Async call: ${pronise2}`);
}
console.log("Calling main...");
main();
console.log("Done");