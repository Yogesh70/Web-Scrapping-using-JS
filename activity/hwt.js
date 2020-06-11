//Highest Wicket Taker
let request = require("request");
let fs=require("fs");
//npm install
let cheerio = require("cheerio");
console.log("Sending Request");
let url = "https://www.espncricinfo.com/series/19322/scorecard/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20";

request(url, cb);

function cb(err, response, html) {
    console.log("Received Response");
    if (err == null && response.statusCode == 200) {
        // fs.writeFileSync("hwt.html", html);
        // console.log("File Saved");
        parseHtml(html);
    } else if(response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.statusCode);
    }
}
        function parseHtml(html) {
            console.log("Parsing Html");
            let $ = cheerio.load(html);

            let Players = $('.table.bowler tbody tr');

            let maxWickets = 0;
            let hwt= "";
            // fs.writeFileSync("bowlers.html", Players);
            for(let i=0; i< Players.length;i++) {
                //get Name
                let allColOfAPlayer = $(Players[i]).find("td");
                let cPlayerName = $(allColOfAPlayer[0]).text();
                let wickets = $(allColOfAPlayer[4]).text();

                if(Number(wickets) > maxWickets) {
                    hwt = cPlayerName;
                    maxWickets = Number(wickets);
                }
                console.log(cPlayerName + " " + wickets);
                //get Wickets
            }
            console.log("```````````````````````````````");    
            console.log(`${hwt} ${maxWickets}`);
        }
        