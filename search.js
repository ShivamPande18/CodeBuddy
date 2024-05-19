const urlParams = new URLSearchParams(window.location.search);
const intialData = urlParams.get('data');

var scrollCont = document.getElementsByClassName("cardRow")[0];
var sideNavLis = document.getElementsByClassName("sideNavLi");
var cardMainCont = document.getElementsByClassName("cardMainCont")[0];
var cardMainCardCont = document.getElementsByClassName("cardMainCardCont")[0];

var sideInd = 0;
var filterTags = [];

var tagList = ["","ai","app","appdev","backend","business","career","chrome","code","course","game","gamedev","github","misc","ml","money","movie","project","tools","tutorial","vscode","webdev","website"];
var emojiList = ["","👾","📱","🔧","💾","💸","🧑‍🎓","🌐","🧑🏻‍💻","🧑‍🏫","🎮","🕹️","⌨️","📟","🤖","💰","🍿","🎞️","⚙️","📹","📃","🖇️"]

var isMobile = false;

var cardImg = document.getElementById("cardImg");
var cardDesc = document.getElementById("cardDesc");
var cardTags = document.getElementById("cardTags");
var cardTitle = document.getElementById("cardTitle");
var sideNavUl = document.getElementsByClassName("sideNavUl")[0];
var cardDisp = document.getElementsByClassName("cardDispCont")[0];
var cardNavCont = document.getElementsByClassName("cardNavCont")[0];
var cardMainTagCont = document.getElementsByClassName("cardMainTagCont")[0];

var signUps = document.getElementsByClassName("signUpBar");
var signedUps = document.getElementsByClassName("signedUpBar");
var signUpInputs = document.getElementsByClassName("signUpInput");
var signUpError = document.getElementsByClassName("signUpError");
var subBtns = document.getElementsByClassName("subBtn");

signedUps[0].style.display = "none";    

subBtns[0].addEventListener("click", (e) => { OnSignUp(0, e) })

var searchFilter="";

async function OnSignUp(ind,e){
    e.preventDefault();
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var email = signUpInputs[ind].value;
    
    if(regex.test(email)){
        signUps[0].style.display = "none";  
        signedUps[0].style.display = "flex";

        signUpError[ind].innerHTML = "";

        const docRef = await addDoc(collection(db, "emails"), {
            email: email
        });
    }
    else{
        signUpError[ind].innerHTML = "*Enter a valid email";
        // signUpError[ind].style
    }
}


var cardsJson = JSON.parse(`{
    "cards":[
        {
            "id": "0",
            "title": "DEBUG VISUALIZER",
            "shortDesc": "A VS Code extension for visualizing data structures while debugging. Like the VS Code's watch view, but with rich visualizations of the watched value",
            "desc": "<p>A VS Code extension for visualizing data structures while debugging.Like the VS Code's watch view, but with rich visualizations of the watched value</p><p>Debugging is hard for beginners, and solving data structures, even harder.Developers, when starting out, can easily get confused with the sorting techniques or traversals</p><p>To solve this we have VSCode Debug Visualizer, a VSCode extension that visualizes data structures in the editor</p><p>It  opens a new visualizer view and lets you debug and visualize data structures on the go, making it more easy and interactive for you to understand new and complicated concepts</p>",
            "img": "Images/Thumbnail/thumbnail0.jpg",
            "tags": "vscode code",
            "link": "https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer"
        },
        {
            "id": "1",
            "title": "OSSU",
            "shortDesc": "The OSSU curriculum is a complete education in computer science using online materials",
            "desc": "<p>The OSSU curriculum is a complete education in computer science using online materials. It's not merely for career training or professional development. It's for those who want a proper, well-rounded grounding in concepts fundamental to all computing disciplines</p><p>It is designed according to the degree requirements of undergraduate computer science majors, minus general education (non-CS) requirements, as it is assumed most of the people following this curriculum are already educated outside the field of CS</p><p>The courses themselves are among the very best in the world, often coming from Harvard, Princeton, MIT, etc., but specifically chosen to meet the following criteria</p>",
            "img": "Images/Thumbnail/thumbnail1.jpg",
            "tags": "code webdev appdev gamedev",
            "link": "https://github.com/ossu/computer-science"
        },
        {
            "id": "2",
            "title": "HER",
            "shortDesc": "Theodore buys an AI system to help him write. However, when he finds out about the AI's ability to learn and adapt, he falls in love with it",
            "desc": "<p>Theodore buys an AI system Samantha to help him write. However, when he finds out about the AI's ability to learn and adapt, he falls in love with it</p><p>As they start spending time together they grow closer and closer and eventually find themselves in love</p><p>Having fallen in love with his OS, Theodore finds himself dealing with feelings of both great joy and doubt. As an OS, Samantha has powerful intelligence that she uses to help Theodore in ways others hadn't</p><p>but how does she help him deal with his inner conflict of being in love with an OS?</p>",
            "img": "Images/Thumbnail/thumbnail2.jpg",
            "tags": "movie ai",
            "link": "https://www.youtube.com/watch?v=dJTU48_yghs"
        },
        {
            "id": "3",
            "title": "DAILY.DEV",
            "shortDesc": "Daily Dev is a browser extension that provides a customized homepage to your browser containing personalized feed to stay up-to-date with the latest dev news, has niche developer communities for you to join",
            "desc": "<p>Daily Dev is a browser extension that provides a customized homepage to your browser containing personalized feed to stay up-to-date with the latest dev news, has niche developer communities for you to join</p><p>daily.dev is a professional network for developers to learn, collaborate, and grow together</p><p>Every time you open a new tab, we'll bring you a personalized feed of tech content that’s tailored to your specific interests. No fluff, just the good stuff. 200,000+ developers use and love it every day</p>",
            "img": "Images/Thumbnail/thumbnail3.jpg",
            "tags": "chrome",
            "link": "https://daily.dev/"
        },
        {
            "id": "4",
            "title": "ACMX",
            "shortDesc": "AcmX is an extension that empowers contestants to solve competitive programming problems easily",
            "desc": "<p>AcmX is an extension that empowers contestants to solve competitive programming problems easily</p><p>It parses problems from various online judges (like Code forces) and sends data like the example test cases and the time and memory constraints</p><p>The submissions are evaluated against all test cases, giving a verdict if the test case failed or not and if passed what was the time taken</p><p>It allows you to easily manage test cases and create your test cases easily</p><p>Provides stress solutions using brute solutions and generators to find edge cases</p><p>It allows you to smartly submit the solution from the editor with all the technicalities taken care of</p>",
            "img": "Images/Thumbnail/thumbnail4.jpg",
            "tags": "vscode code",
            "link": "https://marketplace.visualstudio.com/items?itemName=marx24.acmx"
        },
        {
            "id": "5",
            "title": "TAB EXTENDS",
            "shortDesc": "Tab extends is a chrome extension that saves you your tab bar real estate by allowing you to properly manage different tabs",
            "desc": "<p>Tab extends is a chrome extension that saves you your tab bar real estate by allowing you to properly manage different tabs</p><p>It allows you to save tabs directly from the browser,Group them into different names and categories, manage and organize them properly</p><p>Add notes or todo related to any save tab</p>",
            "img": "Images/Thumbnail/thumbnail5.jpg",
            "tags": "chrome",
            "link": "https://www.tabextend.com/?via=shivam"
        },
        {
            "id": "6",
            "title": "COFOLIOS",
            "shortDesc": "Discover portfolio websites of design interns at top tech companies",
            "desc": "<p>Discover portfolio websites of design interns at top tech companies</p><p>The website provides a list of faang companies to find portfolios according to the company your want to target</p><p>It has a portfolio newsletter to Stay updated with Cofolios and learn useful tips that help students get design internships</p><p>Contains courses and case studies and has a job section for all the job listings you can apply for</p>",
            "img": "Images/Thumbnail/thumbnail6.jpg",
            "tags": "webdev",
            "link": "https://www.cofolios.com/"
        },
        {
            "id": "7",
            "title": "THE ALGORITHMS",
            "shortDesc": "GitHub's largest open-source algorithm library",
            "desc": "<p>GitHub's largest open-source algorithm library</p><p>Our goal is to work together to document and model beautiful, helpful and interesting algorithms using code</p><p>We are an open-source community - anyone can contribute</p><p>We are an open-source community - anyone can contribute</p><p>The best part is the algorithm implementations are available in almost all the languages you will ever need</p>",
            "img": "Images/Thumbnail/thumbnail7.jpg",
            "tags": "code",
            "link": "https://github.com/TheAlgorithms"
        },
        {
            "id": "8",
            "title": "ROADMAP.SH",
            "shortDesc": "Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career",
            "desc": "<p>Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career</p><p>It contains roadmaps on different skills and roles apart from that they have sections for best practices and tech-related questions</p><p>The roadmaps are super detailed and user-friendly. and also allows you to track your progress</p><p>You can download, share the pre-provided roadmaps or create your roadmaps through the website</p>",
            "img": "Images/Thumbnail/thumbnail8.jpg",
            "tags": "career",
            "link": "https://roadmap.sh/"
        },
        {
            "id": "9",
            "title": "7 BILLION HUMANS",
            "shortDesc": "7 billion humans allow players to solve puzzles by programming an army of office workers to perform various tasks",
            "desc": "<p>7 billion humans allow players to solve puzzles by programming an army of office workers to perform various tasks</p><p>The game provides a very simple visual coding language that uses drag and drop mechanism to write your code</p><p>Each worker then follows the instructions provided in the programming language to complete assigned tasks</p><p>The tasks involve devising and coding the most efficient algorithm, giving you a taste of actual programming and problem-solving</p><p>7 billion humans is like a game made out of leetcode, must try for people starting out</p> ",
            "img": "Images/Thumbnail/thumbnail9.jpg",
            "tags": "game code",
            "link": "https://store.steampowered.com/app/792100/7_Billion_Humans/"
        },
        {
            "id": "10",
            "title": "DEVPROJECTS",
            "shortDesc": "Dev projects has a collection of different project ideas in the various fields of tech",
            "desc": "<p>Dev projects has a collection of different project ideas in the various fields of tech</p><p>The projects are categorized into different categories - easy, medium and hard</p><p>each project has a small community built around it in which you can have discussions, submit your solution for review, check others’ solutions, and much more</p>",
            "img": "Images/Thumbnail/thumbnail10.jpg",
            "tags": "project code webdev gamedev appdev",
            "link": "https://www.codementor.io/projects"
        },
        {
            "id": "11",
            "title": "WELLFOUND",
            "shortDesc": "Browse through 100,000 internship and job opportunities from fast-growing startups from around the globe",
            "desc": "<p>Browse through 100,000 internship and job opportunities from fast-growing startups from around the globe</p><p>Connect directly with founders at top startups - no third party recruiters allowed</p><p>Everything you need to know, all upfront. View salary, stock options, and more before applying</p><p>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done</p><p>Unique jobs at startups and tech companies you can’t find anywhere else</p><p></p><p></p><p></p><p></p>",
            "img": "Images/Thumbnail/thumbnail11.jpg",
            "tags": "career",
            "link": "https://wellfound.com/"
        },
        {
            "id": "12",
            "title": "CODEMYUI",
            "shortDesc": "Web Design & UI Inspiration with Code Snippets",
            "desc": "<p>Web Design & UI Inspiration with Code Snippets</p><p>Contains snippets from a bunch of topics like page elements, design elements, HTML elements, javascript snippets, etc</p><p>You can use this to directly copy and paste UI elements to your website or at least take inspiration from it</p>",
            "img": "Images/Thumbnail/thumbnail12.jpg",
            "tags": "webdev",
            "link": "https://codemyui.com/"
        },
        {
            "id": "13",
            "title": "WHATFONT",
            "shortDesc": "The easiest way to identify fonts on web pages",
            "desc": "<p>The easiest way to identify fonts on web pages</p> <p>With this extension, you could inspect fonts on a website by simply just hovering on them</p> <p>It also detects the services used for serving the web fonts. Supports Typekit and Google Font API. all for free</p>",
            "img": "Images/Thumbnail/thumbnail13.jpg",
            "tags": "chrome webdev",
            "link": "https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm"
        },
        {
            "id": "14",
            "title": "README.SO",
            "shortDesc": "The easiest way to create a github README file",
            "desc": "<p>The easiest way to create a github README file</p> <p>The simple editor allows you to quickly add and customize all the sections you need for your project's readme</p> <p>The editor is capable of basic stuff like titles and descriptions and with that, it can also add stuffs like API references, badges, logos, and more</p> <p>The editor provides you with both the preview and the raw file which you can copy and paste on the real reader file on GitHub</p>",
            "img": "Images/Thumbnail/thumbnail14.jpg",
            "tags": "code",
            "link": "https://readme.so/"
        },
        {
            "id": "15",
            "title": "CODEWARS",
            "shortDesc": "Improve your development skills by training with your peers on code kata that continuously challenge and push your coding practice",
            "desc": "<p>Improve your development skills by training with your peers on code kata that continuously challenge and push your coding practice</p> <p>Challenge yourself on small coding exercises called kata</p> <p>Solve kata with your coding style right in the browser and use test cases (TDD) to check it as you progress</p> <p>Kata code challenges are ranked from beginner to expert level. As you complete higher-ranked kata, you level up your profile and push your software development skills to your highest potential</p>",
            "img": "Images/Thumbnail/thumbnail15.jpg",
            "tags": "",
            "link": "https://www.codewars.com/"
        },
        {
            "id": "16",
            "title": "MIT OPENCOURSEWARE",
            "shortDesc": "Creating new opportunities for millions of learners and educators, sharing Open Educational Resources (OER) from MIT",
            "desc": "<p>Creating new opportunities for millions of learners and educators, sharing Open Educational Resources (OER) from MIT</p> <p>Use OCW to guide your own life-long learning, or to teach others. MIT does not offer credit or certification to users of OCW – and asks for nothing in return</p> <p> Freely browse and use OCW materials at your own pace. There's no signup, and no start or end dates</p> <p>Download files for later. Send to friends and colleagues. Modify, remix, and reuse (just remember to cite OCW as the source)</p>",
            "img": "Images/Thumbnail/thumbnail16.jpg",
            "tags": "course code",
            "link": "https://ocw.mit.edu/"
        },
        {
            "id": "17",
            "title": "GOOGLE FOR DEVELOPERS",
            "shortDesc": "Unlock creativity and simplify your workflow with open, integrated solutions",
            "desc": "<p>Unlock creativity and simplify your workflow with open, integrated solutions</p>",
            "img": "Images/Thumbnail/thumbnail17.jpg",
            "tags": "xx",
            "link": "https://developers.google.com/"
        },
        {
            "id": "18",
            "title": "FIRST SITE GUIDE",
            "shortDesc": "Online Business & Side Hustle Advice",
            "desc": "<p>Online Business & Side Hustle Advice</p> <p>Our all‑in‑one hub gives you resources to jump-start and grow your online business, learn how to make money online, and be a successful entrepreneur</p> <p>Quickly search for software and services to help you grow your online business and be successful online.</p> <p>Topics include: making a website, startinga blog, web hosting, etc</p>",
            "img": "Images/Thumbnail/thumbnail18.jpg",
            "tags": "business webdev code",
            "link": "https://firstsiteguide.com/"
        },
        {
            "id": "19",
            "title": "XKCD",
            "shortDesc": "A webcomic of romance, sarcasm, math, and language",
            "desc": "<p>A webcomic of romance, sarcasm, math, and language</p>",
            "img": "Images/Thumbnail/thumbnail19.jpg",
            "tags": "misc",
            "link": "https://xkcd.com/"
        },
        {
            "id": "20",
            "title": "SQL MURDER MYSTERY",
            "shortDesc": "Solve a murder mystry while learning SQL",
            "desc": "<p>Solve a murder mystry while learning SQL</p> <p>All the clues to this mystery are buried in a huge database, and you need to use SQL to navigate through this vast network of information</p> <p>The SQL Murder Mystery is built using SQLite. Use this SQL command to find the tables in the Murder Mystery database</p> <p>Start with the walkthrough and start learning by setting up your SQL database and learning the commands</p>",
            "img": "Images/Thumbnail/thumbnail20.jpg",
            "tags": "backend code",
            "link": "https://mystery.knightlab.com/"
        },
        {
            "id": "21",
            "title": "DEV.TO",
            "shortDesc": "Community of software developers getting together to help one another out",
            "desc": "<p>Community of software developers getting together to help one another out</p> <p>You can share your view on different tech topics, interact with posts from others, and be a part of different interesting topics</p> <p>DEV is built on Forem: open source software designed to empower communities</p>",
            "img": "Images/Thumbnail/thumbnail21.jpg",
            "tags": "misc",
            "link": "https://dev.to/"
        },
        {
            "id": "22",
            "title": "DRIBBBLE",
            "shortDesc": "The world’s destination for design",
            "desc": "<p>The world’s destination for design</p> <p>Get inspired by the work of millions of top-rated designers & agencies around the world</p> <p>It serves as a design portfolio platform, jobs and recruiting site</p> <p>One of the largest platforms for designers to share their work online</p>",
            "img": "Images/Thumbnail/thumbnail22.jpg",
            "tags": "webdev",
            "link": "https://dribbble.com/"
        },
        {
            "id": "23",
            "title": "RESUMAKE",
            "shortDesc": "Tool for automatically generating beautiful resumes",
            "desc": "<p>Tool for automatically generating beautiful resumes</p> <p>Choose a template and fill in as much info as you want. Once you're happy, download the resume</p>",
            "img": "Images/Thumbnail/thumbnail23.jpg",
            "tags": "career",
            "link": "https://resumake.io/"
        },
        {
            "id": "24",
            "title": "FIRST CONTRIBUTIONS",
            "shortDesc": "Make your first open source contribution in 5 minutes",
            "desc": "<p>Make your first open source contribution in 5 minutes</p> <p>This project aims to simplify and guide the way beginners make their first contribution</p>",
            "img": "Images/Thumbnail/thumbnail24.jpg",
            "tags": "github code",
            "link": "https://firstcontributions.github.io/"
        },
        {
            "id": "25",
            "title": "AWWWARDS",
            "shortDesc": "Recognize the talent and effort of the best web designers, developers and agencies in the world",
            "desc": "<p>Recognize the talent and effort of the best web designers, developers and agencies in the world</p> <p>A meeting point, where digital design professionals from across the globe find inspiration</p> <p>A panel of expert digital creatives, made up of designers, developers, and agencies from all over the world</p> <p>Editorial range includes: a yearly publication Hot Right Now</p>",
            "img": "Images/Thumbnail/thumbnail25.jpg",
            "tags": "webdev",
            "link": "https://www.awwwards.com/"
        },
        {
            "id": "26",
            "title": "BRILLIANT",
            "shortDesc": "Brilliant's mission is to inspire and develop people to achieve their goals in STEM",
            "desc": "<p>Brilliant's mission is to inspire and develop people to achieve their goals in STEM</p> <p>Enable great teachers to illuminate the soul of math, science, and engineering through bite-sized, interactive learning experiences</p> <p>Courses explore the laws that shape our world, elevating math and science from something to be feared to a delightful experience of guided discovery</p>",
            "img": "Images/Thumbnail/thumbnail26.jpg",
            "tags": "code misc",
            "link": "https://brilliant.org"
        },
        {
            "id": "27",
            "title": "ML IS FUN",
            "shortDesc": "‘Ml is fun’ makes machine learning accessible for everyone, by presenting its fun and interesting side",
            "desc": "<p>‘Ml is fun’ makes machine learning accessible for everyone, by presenting its fun and interesting side</p> <p>This website and the book with similar name, covers various topics of ml like deep learning, image recognition, NLP, etc</p> <p>Using fun projects like Using Machine Learning to generate Super Mario Maker levels, Face Recognition with Deep Learning, Abusing Generative Adversarial Networks to Make 8-bit Pixel Art, How to break a CAPTCHA system in 15 minutes with Machine Learning</p>",
            "img": "Images/Thumbnail/thumbnail27.jpg",
            "tags": "ai",
            "link": "https://www.machinelearningisfun.com"
        },
        {
            "id": "28",
            "title": "CODEPEN",
            "shortDesc": "CodePen is a social development environment for front-end designers and developers",
            "desc": "<p>CodePen is a social development environment for front-end designers and developers</p> <p>Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration</p> <p>Get work done quicker by building out entire projects or isolating code to test features and animations</p> <p>Participating in CodePen Challenges is a great way to try something new</p> <p>Become a part of the most active front-end community in the world by sharing work</p>",
            "img": "Images/Thumbnail/thumbnail28.jpg",
            "tags": "code",
            "link": "https://codepen.io/"
        },
        {
            "id": "29",
            "title": "LEARNING LAB",
            "shortDesc": "Learn anything in one month alongside your day job",
            "desc": "<p>Learn anything in one month alongside your day job</p> <p>Check out our curated list of topics with their learning resources and experiences to learn anything within 2 months</p> <p></p> <p></p> <p></p> <p></p>",
            "img": "Images/Thumbnail/thumbnail29.jpg",
            "tags": "course",
            "link": "https://learn.uno/"
        },
        {
            "id": "30",
            "title": "BUILD YOUR OWN X",
            "shortDesc": "This repository is a compilation of well-written, step-by-step guides for re-creating our favorite technologies from scratch",
            "desc": "<p>This repository is a compilation of well-written, step-by-step guides for re-creating our favorite technologies from scratch</p> <p>Topics include: 3d Renderer, Bot, BitTorrent Client, OS, Search Engine, etc</p> ",
            "img": "Images/Thumbnail/thumbnail30.jpg",
            "tags": "code webdev ai course",
            "link": "https://github.com/codecrafters-io/build-your-own-x"
        }
    ]
}`)
var cardsData = cardsJson["cards"];
var dataInd = parseInt(intialData);

var tagTemp;
for (let i = 0; i < tagList.length; i++) {
    let name = tagList[i];
    if(i==0){
        tagTemp = elementFromHtml(
            `<li class="sideNavLi activeSideNav" onclick="onSideNav(0)">all🪐</li>`
        );
    }
    else{
        tagTemp = elementFromHtml(
            `<li class="sideNavLi" onclick="onSideNav(${i})">${name}${emojiList[i]}</li>`
        );
    }
    sideNavUl.appendChild(tagTemp);
}


if (intialData != "-1") {
    var ind = dataInd;
    var curCard = cardsData[ind];
    cardTitle.innerHTML = curCard["title"];
    cardDesc.innerHTML = curCard["desc"];
    cardImg.src = curCard["img"];
    const tags = curCard["tags"].split(" ")
    let str = "";
    tags.forEach(tag => {
        str += "<div>" + tag + "</div> ";
    });
    cardTags.innerHTML = str;
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
    // cardTitle.innerHTML = curCard["title"];
    cardDesc.innerHTML = curCard["desc"];
    cardImg.src = curCard["img"];
    const tags = curCard["tags"].split(" ")
    let str = "";
    tags.forEach(tag => {
        str += "<div>" + tag + "</div> ";
    });
    cardTags.innerHTML = str;
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
    if(ind==0){
        filterTags = [];
    }
    else{
        let tempTag = tagList[ind];
        if(!filterTags.includes(tempTag))   filterTags.push(tempTag);
    }

    showCards();
    showTags();
    if(isMobile){
        cardNavCont.style.display = "none";
        isMobile = false;
    }
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
    let child = cardMainCardCont.lastElementChild;
    while (child) {
        cardMainCardCont.removeChild(child);
        child = cardMainCardCont.lastElementChild;
    }

    // cardMainCardCont.appendChild(elementFromHtml(`<div class="multiTagCont">tags</div>`))
    for(let i=0; i<cardsData.length; i++){
        var curCard = cardsData[i];
        const tags = curCard["tags"].split(" ")
        let str = "";
        tags.forEach(tag => {
            str += "<div>" + tag + "</div> ";
        });

        if (curCard["title"].toLowerCase().includes(searchFilter)){
            var cardTempStr = `
            <div class="card" onclick = "sendLink(${i})">
                <div class="cardHeader">
                    <p>${curCard["shortDesc"]}</p>
                    <div class="tagCont">
                        ${str}
                    </div>
                </div>
                <div class="cardFooter">
                    <img src=${curCard["img"]} alt=""srcset="">
                </div>
            </div>
            `;
            var cardTemp; 

            if(filterTags.length == 0){
                cardTemp = elementFromHtml(cardTempStr);
                cardMainCardCont.appendChild(cardTemp);
            }
            else{
                for(let j=0;j<filterTags.length;j++){
                    var curTag = filterTags[j];
                    if(tags.indexOf(curTag) != -1 || curTag == ""){
                        cardTemp = elementFromHtml(cardTempStr);
                        cardMainCardCont.appendChild(cardTemp);
                        break;
                    }
                }
            }
        }
    }
}

function showTags(){
    const len = filterTags.length;
    cardMainTagCont.innerHTML = "";
    if(len==0)  return;

    let tagTemp;
    for (let i = 0; i < filterTags.length; i++) {
        tagTemp = elementFromHtml(`<span class="multiTag" onclick = "removeTag(${i})">${filterTags[i]}   <i class="fa fa-times "></i> </span>`);
        cardMainTagCont.appendChild(tagTemp);
    }
}

function removeTag(index){
    filterTags.splice(index,1);
    showTags();
    showCards();
}

function onSearch(e){
    searchFilter = e.target.value;
    showCards();
}

function showSideMenu(){
    isMobile = true;
    cardNavCont.style.display = "block";
}