let fs = require("fs");

    console.log("Before ");

    let contentf1 = fs.readFileSync("../../f1.txt");
    console.log("Content of F1: " + contentf1);

    let contentf2 = fs.readFileSync("../../f2.txt");
    console.log("Content of F2: " + contentf2);

    let contentf3 = fs.readFileSync("../../f3.txt");
    console.log("Content of F3: " + contentf3);

    console.log("After");
    