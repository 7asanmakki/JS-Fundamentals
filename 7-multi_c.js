const arg = process.argv[2];
const x = parseInt(arg);

<<<<<<< HEAD
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
=======
if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
>>>>>>> 526c9ca8df7f7fceff62fe89e3bf51dda09c2235
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
