let score = 83;

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("Grade: A");
        break;
    case (score >= 80 && score <= 89):
        console.log("Grade: B");
        break;
    case (score >= 70 && score <= 79):
        console.log("Grade: C");
        break;
    case (score >= 60 && score <= 69):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}

let result = (score >= 60) ? "Pass" : "Fail";
console.log(result);

let strNum = "25";
let num = Number(strNum);
console.log("Converted number:", num);

let values = [0, "", "hello", null, undefined, NaN];
for (let val of values) {
    if (val) {
        console.log(val, "is truthy");
    } else {
        console.log(val, "is falsy");
    }
}

function greetingBot(name, isMorning) {
    return isMorning && name 
        ? `Good morning, ${name}!` 
        : `Hello, ${name}!`;
}

console.log(greetingBot("Relebohile", true));
console.log(greetingBot("Sam", false));

let post = {
    username: "coder123",
    caption: "Learning JavaScript is fun!",
    likes: 10,
    comments: ["Nice!", "Keep going!"],
    addLike: function() {
        this.likes++;
    }
};

post.addLike();
console.log("Likes after adding:", post.likes);

let { username, caption } = post;
console.log("Username:", username);
console.log("Caption:", caption);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined array:", combined);

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*   ";
    }
    console.log(row);
}


let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
