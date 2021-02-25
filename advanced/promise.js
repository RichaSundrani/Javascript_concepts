let db = {
    'richa': 'sundrani',
    'abc': 'xyz'
};

let getName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (db[name]) {
                resolve(db[name])
            } else {
                reject("Not found!")
            }
        }, 3000)
    })
};

let main = async () => {
    try {
        let data = await getName('rrrr');
        console.log(data);
    } catch (error) {
        console.log(error);
    }

};

main();