
let input = {
    length: 100,
    parts: [3, 5, 7, 9],
    distance: [6, 7]
}

let distanceInRopeParts = (rope) => {
    let ropeParts = [];
    for (let i = rope.parts.length - 1; i >= 0; i--) {
        let temp = 0;
        for (let j = 0; j < rope.parts[i] - 1; j++) {
            temp = temp + (rope.length) / rope.parts[i];
            ropeParts.push(temp);
        }
    }
    ropeParts = ropeParts.sort((a, b) => { return a - b });
    console.log(ropeParts);
    let diff = (ropeParts[rope.distance[1] - 1]) - (ropeParts[rope.distance[0] - 1]);
    console.log(diff);
    return diff;
}

console.log(distanceInRopeParts(input));