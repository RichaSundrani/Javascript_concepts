// let person = {
//     "first_name": "Jonathan",
//     "last_name": "Hsu",
//     "medium-handle": "@jhsu98"
//  }
//  for(const item of person) {
//     console.log(item);
//  }

let person = {
    "first_name": "Jonathan",
    "last_name": "Hsu",
    "medium-handle": "@jhsu98"
 }
 for(const key in person) {
    console.log(key + ": " + person[key]);
 }