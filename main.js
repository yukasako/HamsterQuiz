let Questions = [
    {
        Q: "Which hamster is the smallest?",
        button1: ["Golden", false],
        button2: ["Djungarian", true],
        button3: ["Molmot", false]
    },
    {
        Q: "How long is the lifespan of a hamster?",
        button1: ["7 days", false],
        button2: ["1-3 years", true],
        button3: ["5-10 years", false]
    },
    {
        Q: "How fast do hamster front teeth grow?",
        button1: ["Every week", true],
        button2: ["Every month", false],
        button3: ["Every day", false]
    },
    {
        Q: "What color light are hamsters most sensitive to?",
        button1: ["Red", true],
        button2: ["Blue", false],
        button3: ["Green", false]
    },
    {
        Q: "During which time of day are hamsters most active?",
        button1: ["Morning", false],
        button2: ["Afternoon", false],
        button3: ["Night", true]
    }
];

//　ハムスター画像
let hamster = document.querySelector("#hamster")

//　たね
let seeds = document.querySelector("#seed")

// // Quiz Div
let quizDiv = document.querySelector("#quiz")

// 質問のpタグ
let question = document.querySelector("#question")

//　回答ボタンたち３個
let quizBtns = document.querySelectorAll("[name='quiz']")
let btn1 = document.querySelector("#button1")
let btn2 = document.querySelector("#button2")
let btn3 = document.querySelector("#button3")

//　次の質問へ
let nextBtn = document.querySelector("#next")

//　最初はボタンをオフにしておく
quizBtns.forEach((btn)=>{
    btn.disabled = true;
})

// 次の質問へをクリックしたらQuestionsから値をひっぱる
let i = 0;
nextBtn.addEventListener("click", () => {
    hamster.setAttribute('src', "./img/hamster.jpeg")
    quizBtns.forEach((btn)=>{
        btn.disabled = false;
        btn.style.background = "lightgrey";
    })

    if (i < Questions.length) {
        nextBtn.innerText = "Next";
        question.innerText = Questions[i].Q;

        btn1.innerText = Questions[i].button1[0];
        btn1.setAttribute('value', Questions[i].button1[1]);

        btn2.innerText = Questions[i].button2[0];
        btn2.setAttribute('value', Questions[i].button2[1]);

        btn3.innerText = Questions[i].button3[0];
        btn3.setAttribute('value', Questions[i].button3[1]);

        i++;
    }
    else {
        nextBtn.innerText = "DONE!"
        quizDiv.style.display = "none";
        nextBtn.style.display = "none"

        let result = document.createElement("h2");
        result.style.textAlign = "center";
        document.body.append(result);
        if(seeds.childElementCount === 5){
            hamster.setAttribute('src', "./img/happyHamster.jpeg")
            result.innerText = "Amazing! You answered all questions!";
        }
        else if(seeds.childElementCount > 2){
            result.innerText = "Great! You got " + seeds.childElementCount + " seeds!";
        }
        else if(seeds.childElementCount === 1){
            hamster.setAttribute('src', "./img/sadHamster.jpeg")
            result.innerText = "Oops. Only " + seeds.childElementCount + " seed. I am hungryyyy!";
        }
        else{
            hamster.setAttribute('src', "./img/sadHamster.jpeg")
            result.innerText = "Oops. Only " + seeds.childElementCount + " seeds. I am hungryyyy!";
        }
    }
})

// 正解したら画像が変わってタネをもらえるよ
quizBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.value == "true") {
            hamster.setAttribute('src', "./img/happyHamster.jpeg")
            let aSeed = document.createElement("img");
            aSeed.setAttribute('src', "./img/seed.jpeg");
            aSeed.style.width = "70px";
            seeds.append(aSeed);
        }
        else {
            hamster.setAttribute('src', "./img/sadHamster.jpeg")
        }
        
        quizBtns.forEach((btn)=>{
            btn.disabled = true;
            if(btn.value=="true"){
                btn.style.background = "lightpink";
            }
        })
    })
})