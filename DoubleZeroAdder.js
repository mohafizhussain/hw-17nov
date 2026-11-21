const array1 = [
  { username: "Aarav", userid: 11 },
  { username: "Priya", userid: 12 },
  { username: "Rohan", userid: 13 },
  { username: "Neha", userid: 14 },
  { username: "Vikram", userid: 15 }
];

const array2 = [11, 12, 14, 15]; 

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i].userid === array2[j]) {
      console.log("00" + i);
    }
  }
}
