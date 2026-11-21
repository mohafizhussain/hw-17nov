const array1 = [
  { username: "Aarav", userid: 105 },
  { username: "Priya", userid: 107 },
  { username: "Rohan", userid: 103 },
];

const array2 = [106, 105, 111];
const array3 = [103, 107 , 113 , 117];     

let passcount = 0;
let failcount = 0;

for (let i = 0; i < array1.length; i++) {
  let id = array1[i].userid;

  if (array2.includes(id)) {
    passcount++;
  } else if (array3.includes(id)) {
    failcount++;
  }
}

console.log("Pass Count:", passcount); 
console.log("Fail Count:", failcount); 