/* クイズ内容 */

let Questions = [
    {
        Q: "Which hamster is the smallest?",
        button1: ["Golden", false],
        button2: ["Roborovski", true],
        button3: ["Djungarian", false]
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

/* 要素指定 */

//　ハムスター画像(img)
let hamster = document.querySelector("#hamster")

//　たね置き場(div)
let seeds = document.querySelector("#seed")

// // Quiz(div)
let quizDiv = document.querySelector("#quiz")

// 質問文表示(p)
let question = document.querySelector("#question")

//　回答ボタンたち３個(div, button)
let quizBtnDiv = document.querySelector("#buttons")
let quizBtns = document.querySelectorAll("[name='quiz']")
let btn1 = document.querySelector("#button1")
let btn2 = document.querySelector("#button2")
let btn3 = document.querySelector("#button3")

/* Nextボタンの設定 */

// Nextボタン(button)
let nextBtn = document.querySelector("#next")
// 次の質問へをクリックしたらQuestionsから値をひっぱる
let i = 0;
nextBtn.addEventListener("click", () => {
    //回答しないと次に進めないようNextボタンをオフ
    nextBtn.disabled = true;

    // クイズボタンボックスを表示
    quizBtnDiv.style.display = "flex";

    //クイズボタンたちをオンに
    hamster.setAttribute('src', "./img/hamster.jpeg")
    quizBtns.forEach((btn)=>{
        btn.disabled = false;
        btn.style.background = "lightgrey";
    })

    //Quiz Arrayの内容を引用してく
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
    else { //Array内の質問完了
        nextBtn.innerText = "DONE!"
        quizDiv.style.display = "none";
        nextBtn.style.display = "none"

        // 結果発表の場所を設定
        let result = document.createElement("h2");
        result.style.textAlign = "center";
        document.body.append(result);

        // タネの数によって評価
        if(seeds.childElementCount === 5){
            hamster.setAttribute('src', "./img/happyHamster.jpeg")
            result.innerText = "Amazing!\n You answered all questions!\n Thank you hooman :)";
        }
        else if(seeds.childElementCount === 4){
            hamster.setAttribute('src', "./img/happyHamster.jpeg")
            result.innerText = "Great!\n You got " + seeds.childElementCount + " seeds!\n Good job hooman";
        }
        else if(seeds.childElementCount >= 2){
            result.innerText = "Nice!\n You got " + seeds.childElementCount + " seeds!\n Not bad hooman";
        }
        else if(seeds.childElementCount === 1){
            hamster.setAttribute('src', "./img/sadHamster.jpeg")
            result.innerText = "Oh no.\n Only " + seeds.childElementCount + " seed.\n I am hungryyyy!";
        }
        else{
            hamster.setAttribute('src', "./img/sadHamster.jpeg")
            result.innerText = "What!? 0 seed?\n Where is my food hooman!?";
        }
    }
})

/* 回答ボタンの設定 */

//　最初は回答ボタンをオフにしておく。（Start(Next)を押すとオン）
quizBtns.forEach((btn)=>{
    btn.disabled = true;
})

// 最初はクイズボタンボックスを非表示に
quizBtnDiv.style.display = "none";

// 正解したら画像が変わってタネをもらえるよ
quizBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        nextBtn.disabled = false;   //回答するとNextボタンが使える

        if (btn.value == "true") {
            // タネ増える
            let aSeed = document.createElement("img");
            aSeed.setAttribute('src', "./img/seed.jpeg");
            aSeed.style.width = "70px";
            seeds.append(aSeed);
            // ハム喜ぶ
            question.innerText = "Yay! Correct!";
            hamster.setAttribute('src', "./img/happyHamster.jpeg");

        }
        else {
            question.innerText = "Ooops"
            hamster.setAttribute('src', "./img/sadHamster.jpeg")
        }
        
        // 正解がピンクで表示され、回答ボタンをオフに
        quizBtns.forEach((btn)=>{
            btn.disabled = true;
            if(btn.value=="true"){
                btn.style.background = "lightpink";
            }
        })
    })
})