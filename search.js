const urlParams = new URLSearchParams(window.location.search);
const intialData = urlParams.get('data');

var scrollCont = document.getElementsByClassName("cardRow")[0];
var sideNavLis = document.getElementsByClassName("sideNavLi");
var cardMainCont = document.getElementsByClassName("cardMainCont")[0];

var sideInd = 0;
var filterTag = "";

var tagList = ["","vscode","chrome","tools","projects","money","movie","tutorial"]

var cardTitle = document.getElementById("cardTitle");
var cardDesc = document.getElementById("cardDesc");
var cardImg = document.getElementById("cardImg");
var cardTags = document.getElementById("cardTags");
var cardDisp = document.getElementsByClassName("cardDispCont")[0];

var searchFilter="";


var cardsJson = JSON.parse(`{
    "cards":[
        {
            "id":"",
            "title":"",
            "shortDesc":"",
            "desc":"",
            "tag":"",
            "img": "Images/cosmos.png",
            "srcTag":"",
            "link":""
        },
        {
            "id": "0",
            "title": "DEBUG VISUALIZER",
            "shortDesc": "A VS Code extension for visualizing data structures while debugging. Like the VS Code's watch view, but with rich visualizations of the watched value",
            "desc": "<p>A VS Code extension for visualizing data structures while debugging.Like the VS Code's watch view, but with rich visualizations of the watched value</p><p>Debugging is hard for beginners, and solving data structures, even harder.Developers, when starting out, can easily get confused with the sorting techniques or traversals</p><p>To solve this we have VSCode Debug Visualizer, a VSCode extension that visualizes data structures in the editor</p><p>It  opens a new visualizer view and lets you debug and visualize data structures on the go, making it more easy and interactive for you to understand new and complicated concepts</p>",
            "tag":"<div>vscode</div> <div>coding</div>",
            "img": "Images/cosmos.png",
            "srcTag": "vscode code",
            "link": "https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer"
        },
        {
            "id": "1",
            "title": "OSSU",
            "shortDesc": "The OSSU curriculum is a complete education in computer science using online materials",
            "desc": "<p>The OSSU curriculum is a complete education in computer science using online materials. It's not merely for career training or professional development. It's for those who want a proper, well-rounded grounding in concepts fundamental to all computing disciplines</p><p>It is designed according to the degree requirements of undergraduate computer science majors, minus general education (non-CS) requirements, as it is assumed most of the people following this curriculum are already educated outside the field of CS</p><p>The courses themselves are among the very best in the world, often coming from Harvard, Princeton, MIT, etc., but specifically chosen to meet the following criteria</p>",
            "tag": "<div>code</div> <div>webdev</div> <div>appdev</div> <div>gamedev</div>",
            "img": "Images/cosmos.png",
            "srcTag": "code webdev appdev gamedev",
            "link": "https://github.com/ossu/computer-science"
        },
        {
            "id": "2",
            "title": "HER",
            "shortDesc": "Theodore buys an AI system to help him write. However, when he finds out about the AI's ability to learn and adapt, he falls in love with it",
            "desc": "<p>Theodore buys an AI system Samantha to help him write. However, when he finds out about the AI's ability to learn and adapt, he falls in love with it</p><p>As they start spending time together they grow closer and closer and eventually find themselves in love</p><p>Having fallen in love with his OS, Theodore finds himself dealing with feelings of both great joy and doubt. As an OS, Samantha has powerful intelligence that she uses to help Theodore in ways others hadn't</p><p>but how does she help him deal with his inner conflict of being in love with an OS?</p>",
            "tag": "<div>movie</div> <div>ai</div>",
            "img": "Images/cosmos.png",
            "srcTag": "movie ai",
            "link": "https://www.youtube.com/watch?v=dJTU48_yghs"
        },
        {
            "id": "3",
            "title": "DAILY.DEV",
            "shortDesc": "Daily Dev is a browser extension that provides a customized homepage to your browser containing personalized feed to stay up-to-date with the latest dev news, has niche developer communities for you to join",
            "desc": "<p>Daily Dev is a browser extension that provides a customized homepage to your browser containing personalized feed to stay up-to-date with the latest dev news, has niche developer communities for you to join</p><p>daily.dev is a professional network for developers to learn, collaborate, and grow together</p><p>Every time you open a new tab, we'll bring you a personalized feed of tech content that’s tailored to your specific interests. No fluff, just the good stuff. 200,000+ developers use and love it every day</p>",
            "tag": "<div>chrome</div>",
            "img": "Images/cosmos.png",
            "srcTag": "chrome",
            "link": "https://daily.dev/"
        },
        {
            "id": "4",
            "title": "ACMX",
            "shortDesc": "AcmX is an extension that empowers contestants to solve competitive programming problems easily",
            "desc": "<p>AcmX is an extension that empowers contestants to solve competitive programming problems easily</p><p>It parses problems from various online judges (like Code forces) and sends data like the example test cases and the time and memory constraints</p><p>The submissions are evaluated against all test cases, giving a verdict if the test case failed or not and if passed what was the time taken</p><p>It allows you to easily manage test cases and create your test cases easily</p><p>Provides stress solutions using brute solutions and generators to find edge cases</p><p>It allows you to smartly submit the solution from the editor with all the technicalities taken care of</p>",
            "tag": "<div>vscode</div> <div>code</div>",
            "img": "Images/cosmos.png",
            "srcTag": "vscode code",
            "link": "https://marketplace.visualstudio.com/items?itemName=marx24.acmx"
        },
        {
            "id": "5",
            "title": "TAB EXTENDS",
            "shortDesc": "Tab extends is a chrome extension that saves you your tab bar real estate by allowing you to properly manage different tabs",
            "desc": "<p>Tab extends is a chrome extension that saves you your tab bar real estate by allowing you to properly manage different tabs</p><p>It allows you to save tabs directly from the browser,Group them into different names and categories, manage and organize them properly</p><p>Add notes or todo related to any save tab</p>",
            "tag": "<div>chrome</div>",
            "img": "Images/cosmos.png",
            "srcTag": "chrome",
            "link": "https://www.tabextend.com/?via=shivam"
        },
        {
            "id": "6",
            "title": "COFOLIOS",
            "shortDesc": "Discover portfolio websites of design interns at top tech companies",
            "desc": "<p>Discover portfolio websites of design interns at top tech companies</p><p>The website provides a list of faang companies to find portfolios according to the company your want to target</p><p>It has a portfolio newsletter to Stay updated with Cofolios and learn useful tips that help students get design internships</p><p>Contains courses and case studies and has a job section for all the job listings you can apply for</p>",
            "tag": "<div>webdev</div>",
            "img": "Images/cosmos.png",
            "srcTag": "webdev",
            "link": "https://www.cofolios.com/"
        },
        {
            "id": "7",
            "title": "THE ALGORITHMS",
            "shortDesc": "GitHub's largest open-source algorithm library",
            "desc": "<p>GitHub's largest open-source algorithm library</p><p>Our goal is to work together to document and model beautiful, helpful and interesting algorithms using code</p><p>We are an open-source community - anyone can contribute</p><p>We are an open-source community - anyone can contribute</p><p>The best part is the algorithm implementations are available in almost all the languages you will ever need</p>",
            "tag": "<div>code</div>",
            "img": "Images/cosmos.png",
            "srcTag": "code",
            "link": "https://github.com/TheAlgorithms"
        },
        {
            "id": "8",
            "title": "ROADMAP.SH",
            "shortDesc": "Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career",
            "desc": "<p>Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career</p><p>It contains roadmaps on different skills and roles apart from that they have sections for best practices and tech-related questions</p><p>The roadmaps are super detailed and user-friendly. and also allows you to track your progress</p><p>You can download, share the pre-provided roadmaps or create your roadmaps through the website</p>",
            "tag": "<div>career</div>",
            "img": "Images/cosmos.png",
            "srcTag": "career",
            "link": "https://roadmap.sh/"
        },
        {
            "id": "9",
            "title": "7 BILLION HUMANS",
            "shortDesc": "7 billion humans allow players to solve puzzles by programming an army of office workers to perform various tasks",
            "desc": "<p>7 billion humans allow players to solve puzzles by programming an army of office workers to perform various tasks</p><p>The game provides a very simple visual coding language that uses drag and drop mechanism to write your code</p><p>Each worker then follows the instructions provided in the programming language to complete assigned tasks</p><p>The tasks involve devising and coding the most efficient algorithm, giving you a taste of actual programming and problem-solving</p><p>7 billion humans is like a game made out of leetcode, must try for people starting out</p> ",
            "tag": "<div>game</div> <div>code</div>",
            "img": "Images/cosmos.png",
            "srcTag": "game code",
            "link": "https://store.steampowered.com/app/792100/7_Billion_Humans/"
        },
        {
            "id": "10",
            "title": "DEVPROJECTS",
            "shortDesc": "Dev projects has a collection of different project ideas in the various fields of tech",
            "desc": "<p>Dev projects has a collection of different project ideas in the various fields of tech</p><p>The projects are categorized into different categories - easy, medium and hard</p><p>each project has a small community built around it in which you can have discussions, submit your solution for review, check others’ solutions, and much more</p>",
            "tag": "<div>project</div> <div>code</div> <div>webdev</div> <div>gamedev</div> <div>appdev</div>",
            "img": "Images/cosmos.png",
            "srcTag": "project code webdev gamedev appdev",
            "link": "https://www.codementor.io/projects"
        },
        {
            "id": "11",
            "title": "WELLFOUND",
            "shortDesc": "Browse through 100,000 internship and job opportunities from fast-growing startups from around the globe",
            "desc": "<p>Browse through 100,000 internship and job opportunities from fast-growing startups from around the globe</p><p>Connect directly with founders at top startups - no third party recruiters allowed</p><p>Everything you need to know, all upfront. View salary, stock options, and more before applying</p><p>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done</p><p>Unique jobs at startups and tech companies you can’t find anywhere else</p><p></p><p></p><p></p><p></p>",
            "tag": "<div>career</div>",
            "img": "Images/cosmos.png",
            "srcTag": "career",
            "link": "https://wellfound.com/"
        },
        {
            "id": "12",
            "title": "CODEMYUI",
            "shortDesc": "Web Design & UI Inspiration with Code Snippets",
            "desc": "<p>Web Design & UI Inspiration with Code Snippets</p><p>Contains snippets from a bunch of topics like page elements, design elements, HTML elements, javascript snippets, etc</p><p>You can use this to directly copy and paste UI elements to your website or at least take inspiration from it</p>",
            "tag": "<div>webdev</div>",
            "img": "Images/cosmos.png",
            "srcTag": "webdev",
            "link": "https://codemyui.com/"
        },
        {
            "id": "13",
            "title": "WHATFONT",
            "shortDesc": "The easiest way to identify fonts on web pages",
            "desc": "<p>The easiest way to identify fonts on web pages</p> <p>With this extension, you could inspect fonts on a website by simply just hovering on them</p> <p>It also detects the services used for serving the web fonts. Supports Typekit and Google Font API. all for free</p>",
            "tag": "<div>chrome</div> <div>webdev</div>",
            "img": "Images/cosmos.png",
            "srcTag": "chrome webdev",
            "link": "https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm"
        },
        {
            "id": "14",
            "title": "README.SO",
            "shortDesc": "The easiest way to create a github README file",
            "desc": "<p>The easiest way to create a github README file</p> <p>The simple editor allows you to quickly add and customize all the sections you need for your project's readme</p> <p>The editor is capable of basic stuff like titles and descriptions and with that, it can also add stuffs like API references, badges, logos, and more</p> <p>The editor provides you with both the preview and the raw file which you can copy and paste on the real reader file on GitHub</p>",
            "tag": "<div>code</div>",
            "img": "Images/cosmos.png",
            "srcTag": "code",
            "link": "https://readme.so/"
        },
        {
            "id": "15",
            "title": "CODEWARS",
            "shortDesc": "Improve your development skills by training with your peers on code kata that continuously challenge and push your coding practice",
            "desc": "<p>Improve your development skills by training with your peers on code kata that continuously challenge and push your coding practice</p> <p>Challenge yourself on small coding exercises called kata</p> <p>Solve kata with your coding style right in the browser and use test cases (TDD) to check it as you progress</p> <p>Kata code challenges are ranked from beginner to expert level. As you complete higher-ranked kata, you level up your profile and push your software development skills to your highest potential</p>",
            "tag": "",
            "img": "Images/cosmos.png",
            "srcTag": "",
            "link": "https://www.codewars.com/"
        },
        {
            "id": "16",
            "title": "MIT OPENCOURSEWARE",
            "shortDesc": "Creating new opportunities for millions of learners and educators, sharing Open Educational Resources (OER) from MIT",
            "desc": "<p>Creating new opportunities for millions of learners and educators, sharing Open Educational Resources (OER) from MIT</p> <p>Use OCW to guide your own life-long learning, or to teach others. MIT does not offer credit or certification to users of OCW – and asks for nothing in return</p> <p> Freely browse and use OCW materials at your own pace. There's no signup, and no start or end dates</p> <p>Download files for later. Send to friends and colleagues. Modify, remix, and reuse (just remember to cite OCW as the source)</p>",
            "tag": "course code",
            "img": "Images/cosmos.png",
            "srcTag": "course code",
            "link": "https://ocw.mit.edu/"
        },
        {
            "id": "17",
            "title": "GOOGLE FOR DEVELOPERS",
            "shortDesc": "Unlock creativity and simplify your workflow with open, integrated solutions",
            "desc": "<p>Unlock creativity and simplify your workflow with open, integrated solutions</p>",
            "tag": "<div>xx</div>",
            "img": "Images/cosmos.png",
            "srcTag": "xx",
            "link": "https://developers.google.com/"
        },
        {
            "id": "18",
            "title": "FIRST SITE GUIDE",
            "shortDesc": "Online Business & Side Hustle Advice",
            "desc": "<p>Online Business & Side Hustle Advice</p> <p>Our all‑in‑one hub gives you resources to jump-start and grow your online business, learn how to make money online, and be a successful entrepreneur</p> <p>Quickly search for software and services to help you grow your online business and be successful online.</p> <p>Topics include: making a website, startinga blog, web hosting, etc</p>",
            "tag": "<div>business</div> <div>webdev</div> <div>code</div>",
            "img": "Images/cosmos.png",
            "srcTag": "business webdev code",
            "link": "https://firstsiteguide.com/"
        },
        {
            "id": "19",
            "title": "XKCD",
            "shortDesc": "A webcomic of romance, sarcasm, math, and language",
            "desc": "<p>A webcomic of romance, sarcasm, math, and language</p>",
            "tag": "<div>misc</div>",
            "img": "Images/cosmos.png",
            "srcTag": "misc",
            "link": "https://xkcd.com/"
        },
        {
            "id": "20",
            "title": "SQL MURDER MYSTERY",
            "shortDesc": "Solve a murder mystry while learning SQL",
            "desc": "<p>Solve a murder mystry while learning SQL</p> <p>All the clues to this mystery are buried in a huge database, and you need to use SQL to navigate through this vast network of information</p> <p>The SQL Murder Mystery is built using SQLite. Use this SQL command to find the tables in the Murder Mystery database</p> <p>Start with the walkthrough and start learning by setting up your SQL database and learning the commands</p>",
            "tag": "<div>backend</div> <div>code</div>",
            "img": "Images/cosmos.png",
            "srcTag": "backend code",
            "link": "https://mystery.knightlab.com/"
        },
        {
            "id": "21",
            "title": "DEV.TO",
            "shortDesc": "Community of software developers getting together to help one another out",
            "desc": "<p>Community of software developers getting together to help one another out</p> <p>You can share your view on different tech topics, interact with posts from others, and be a part of different interesting topics</p> <p>DEV is built on Forem: open source software designed to empower communities</p>",
            "tag": "<div>misc</div>",
            "img": "Images/cosmos.png",
            "srcTag": "misc",
            "link": "https://dev.to/"
        },
        {
            "id": "22",
            "title": "DRIBBBLE",
            "shortDesc": "The world’s destination for design",
            "desc": "<p>The world’s destination for design</p> <p>Get inspired by the work of millions of top-rated designers & agencies around the world</p> <p>It serves as a design portfolio platform, jobs and recruiting site</p> <p>One of the largest platforms for designers to share their work online</p>",
            "tag": "<div>wedev</div>",
            "img": "Images/cosmos.png",
            "srcTag": "webdev",
            "link": "https://dribbble.com/"
        }
    ]
}`)
var cardsData = cardsJson["cards"];
var dataInd = parseInt(intialData);



if (intialData != "-1") {
    var ind = dataInd;
    var curCard = cardsData[ind];
    cardTitle.innerHTML = curCard["title"];
    cardDesc.innerHTML = curCard["desc"];
    cardImg.src = curCard["img"];
    cardTags.innerHTML = curCard["tag"];
}
else {
    cardDisp.style.display = "none";
}

showCards();

function goToLink(){
    open(cardsData[dataInd]["link"]);
}

function showCardDisp(ind){
    var curCard = cardsData[ind];
    cardTitle.innerHTML = curCard["title"];
    cardDesc.innerHTML = curCard["desc"];
    cardImg.src = curCard["img"];
    cardTags.innerHTML = curCard["tag"];
    cardDisp.style.display = "block";
}

function cardDispExit() {
    cardDisp.style.display = "none";
}

function cardDispExitChild(e) {
    e.stopPropagation();
}



function onSideNav(ind){
    sideNavLis[ind].classList.add("activeSideNav");
    sideNavLis[sideInd].classList.remove("activeSideNav");
    sideInd = ind;
    filterTag = tagList[ind];
    showCards();
}

function onScroll(dir){
    console.log("page");
    scrollCont.scrollBy(dir * 600,0)
}

function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

function sendLink(ind){
    showCardDisp(ind);
    dataInd = ind;
    // open(`http://127.0.0.1:5501/search.html?data=${ind}`, target = "_parent")
}

function showCards(){
    let child = cardMainCont.lastElementChild;
    while (child) {
        cardMainCont.removeChild(child);
        child = cardMainCont.lastElementChild;
    }
    for(let i=0; i<cardsData.length; i++){
        var curCard = cardsData[i];
        var tagString = curCard["srcTag"];
        var tags = tagString.split(" ");

        if (curCard["title"].toLowerCase().includes(searchFilter)){
            if(tags.indexOf(filterTag) != -1 || filterTag == ""){
                // if(curCard["tag"]!=filterTag && filterTag!="" ) continue;
                var cardTemp = elementFromHtml(
                `
                <div class="card" onclick = "sendLink(${i})">
                    <div class="cardHeader">
                        <h1>${curCard["title"]}</h1>
                        <p>${curCard["shortDesc"]}</p>
                        <div class="tagCont">
                            ${curCard["tag"]}
                        </div>
                    </div>
                    <div class="cardFooter">
                        <img src=${curCard["img"]} alt=""srcset="">
                    </div>
                </div>
                `
                );
                cardMainCont.appendChild(cardTemp);
            }
        }
    }
}

function onSearch(e){
    searchFilter = e.target.value;
    showCards();
}