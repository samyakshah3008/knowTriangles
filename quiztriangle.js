// linking html world to javascript world
const quizForm = document.querySelector('.quiz-form')
const submitAnswerBtn = document.querySelector('#submit')
const output = document.querySelector('#output')

// array of correct answers 
const correctAnswers = ["90°","right angled","yes","yes","5cm"];

// adding event listener to button
submitAnswerBtn.addEventListener('click',calculateScore); 

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm); 
    //FormData is an API
    for(let entry of formResults.entries()){
        console.log(entry) }
    // entry will contain name(question number which we entered in html part) and value in array and that value will be answer entered by client
        
    for(let value of formResults.values()){ 
        // console.log(value) 
        if(value===correctAnswers[index]){
            score = score + 1 
            // console.log(value) 
        }
        index = index + 1
    }
    
    // console.log(score) 
    output.innerText = "Your score is: "  + score + "/5"
}

  // for of loop : 
//     const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// expected output: "a"
// expected output: "b"
// expected output: "c"

