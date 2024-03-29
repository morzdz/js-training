//  Exercice de JS : Faire un jeu de quizz avec des questions, une bonne réponse et des mauvaises avec un compteur de score. Travailler l'algo et la réflexion global.

let questionText = document.getElementById("question");
const reponseText = document.querySelector(".reponse");
const container = document.getElementById("container");


const questions = [
    {
        question: "Quel est l'organe principal du système respiratoire chez l'homme?",
        reponses: {
            a: "Le cœur",
            b: "Les reins",
            c: "Les poumons",
            d: "Le foie"
        },
        reponseCorrecte: "Les poumons"
    },
    {
        question: "Quelle planète est la plus proche du soleil?",
        reponses: {
            a: "Vénus",
            b: "Jupiter",
            c: "Mercure",
            d: "Mars"
        },
        reponseCorrecte: "Mercure"
    },
    {
        question: "Qui a peint la Joconde?",
        reponses: {
            a: "Pablo Picasso",
            b: "Léonard de Vinci",
            c: "Vincent van Gogh",
            d: "Claude Monet"
        },
        reponseCorrecte: "Léonard de Vinci"
    },
    {
        question: "Quelle est la capitale du Canada?",
        reponses: {
            a: "Toronto",
            b: "Montréal",
            c: "Ottawa",
            d: "Vancouver"
        },
        reponseCorrecte: "Ottawa"
    },
    {
        question: "Quel est le plus grand océan sur Terre?",
        reponses: {
            a: "L'océan Atlantique",
            b: "L'océan Arctique",
            c: "L'océan Indien",
            d: "L'océan Pacifique"
        },
        reponseCorrecte: "L'océan Pacifique"
    },
    {
        question: "Qui a écrit 'Hamlet'?",
        reponses: {
            a: "William Shakespeare",
            b: "Charles Dickens",
            c: "Jane Austen",
            d: "F. Scott Fitzgerald"
        },
        reponseCorrecte: "William Shakespeare"
    },
    {
        question: "Quel est l'élément le plus abondant dans l'atmosphère terrestre?",
        reponses: {
            a: "Oxygène",
            b: "Azote",
            c: "Dioxyde de carbone",
            d: "Hydrogène"
        },
        reponseCorrecte: "Azote"
    },
    {
        question: "Combien de continents y a-t-il sur Terre?",
        reponses: {
            a: "Quatre",
            b: "Cinq",
            c: "Six",
            d: "Sept"
        },
        reponseCorrecte: "Six"
    },
    {
        question: "Qui a découvert la gravitation universelle?",
        reponses: {
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Galilée",
            d: "Nicolaus Copernicus"
        },
        reponseCorrecte: "Isaac Newton"
    },
    {
        question: "Quel est le plus grand désert du monde?",
        reponses: {
            a: "Le Sahara",
            b: "Le désert de Gobi",
            c: "Le désert d'Atacama",
            d: "Le désert d'Arabie"
        },
        reponseCorrecte: "Le Sahara"
    }
];

function displayQuestion() {
    questions.forEach((element, questionIndex) => {
        let carte = document.createElement('article');
        carte.innerHTML = `
            <article class="card">
                <h1>${element.question}</h1>
                <div>
                    <ul class="reponse">
                        ${Object.keys(element.reponses).map((key, index) => `
                            <li class="option" id="option-${questionIndex}-${index}" onclick="correctOrNot('${element.reponseCorrecte}', '${element.reponses[key]}', 'option-${questionIndex}-${index}')">${element.reponses[key]}</li>
                        `).join('')}
                    </ul>
                </div>
            </article>
        `;
        document.getElementById('container').appendChild(carte);
    });
};

displayQuestion();
let count = 0;

function correctOrNot(answer, answerSelected, elementId) {
    console.log(answer);
    console.log(answerSelected);
    console.log(elementId);
    const element = document.getElementById(elementId);
    if (answer === answerSelected) {
        console.log("Correct");
        element.style.backgroundColor = "green";
        count += 1;
        console.log(count);
    } else {
        console.log("Incorrect");
        element.style.backgroundColor = "red";
    };
}