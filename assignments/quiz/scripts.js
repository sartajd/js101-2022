const questions = [
    {
        question: "What is capital of Afghanistan?",
        options: ["kabul", "ghazni", "herat"],
        answer: "kabul"
    },
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    }, 
    {
        question: "what is 20 - 5?", 
        options: ["25", "15", "30", "23"],
        answer: "15",
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            alert(option.textContent);
        }
    });

}