// sample array of marks
const marks=[81,85,79,68,98];
let highestmarks=marks[0];

for(let i=1;i<marks.length;i++){
    highestmarks = (marks[i]>highestmarks) ?  marks[i] :  highestmarks;
}

console.log(`the highestmarks score by the student is: ${highestmarks}`);