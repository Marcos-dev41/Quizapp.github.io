
const QA = document.querySelector(".question")
const cont = document.querySelector(".container")
const A = document.querySelector(".A")
const B = document.querySelector(".B")
const C = document.querySelector(".C")
const D = document.querySelector(".D")
const btn = document.querySelector(".btn-ans")
const answEls = document.querySelectorAll(".Answer");


const quiz =[
    {
        question: "Who was the first president of kenya?",
        a:"Jomo kenyatta",
        b:"Musalia Mudavadi",
        c:"Uhuru kenyatta",
        d:"Raila odinga",
        correct:"a"    
        },
        { 
    question: "What is the capital city of kenya",
    a:"Nairobi",
    b:"Turkana",
    c:"Kajiado",
    d:"Kiambu",
    correct:"a"    
    }
    ,
        { 
    question: "Which country borders kenya to the north ?",
    a:"Somalia",
    b:"Uganda",
    c:"Ethiopia",
    d:"Tanzania",
    correct:"c"    
    }
    ,
        { 
    question: "Which is kenya's most popular tourist attraction?",
    a:"Sandy beaches",
    b:"Culture",
    c:"Cuisines",
    d:"Wildlife",
    correct:"d"    
    }
    ,
        { 
    question: "What is the staple food of kenya?",
    a:"Pilau",
    b:"Ugali",
    c:"Nyama choma",
    d:"Chapati",
    correct:"b"    
    }
    ,
     { 
    question: "When did kenya gain independence ?",
    a:"1970",
    b:"1964",
    c:"1999",
    d:"2015",
    correct:"b"    
    }
]

let k = 0;
let score = 0;
function quizQ(){

    QA.innerText = quiz[k].question;
    A.innerText  = quiz[k].a
    B.innerText  = quiz[k].b
    C.innerText  = quiz[k].c
    D.innerText  = quiz[k].d
}

quizQ()

let final;
  function selected(){
  
    answEls.forEach(element => {
        if(element.checked == true){
            final = element.id
            return final; }
    })};

function scores(){
    if(final === quiz[k].correct){
        if(score < 7){
            score++;
        }
        console.log(score);   }
}

function deselected(){
answEls.forEach(element => {
    element.checked = false; 
});
}


function submit(){
    selected()
    scores()
    console.log(final);
if(k < quiz.length-1){
    k++;
    quizQ()
    deselected()
}
else{
 cont.innerHTML = `<h2> You got ${score}/6 questions </h2> <button onclick="location.reload()" id="btn2">Restart</button>`;
}
}


  
    
  
  
 
 
 
 




