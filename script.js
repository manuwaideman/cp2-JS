//funcao para trocar cor do background

function trocar(cor){
    document.body.style.background =cor
}

//funcao para realizar o envio do contato

function validar() {
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value

    if(nome =="" && telefone =="" && email ==""){
        alert("PREENCHA TODOS OS CAMPOS")
    }else{
        alert("Contato enviado.")
        window.open('contato.html')
    }
}

//quiz de 10 perguntas sobre vinho

function quiz() {
const questions = [
    {
      question: "Qual é a uva usada para produzir vinho tinto Bordeaux?",
      answer: "Cabernet Sauvignon"
    },
    {
      question: "De qual país é originária a uva Malbec?",
      answer: "Argentina"
    },
    {
      question: "Qual é o principal ingrediente da Sangria?",
      answer: "Vinho Tinto"
    },
    {
      question: "Qual é o vinho espumante mais famoso da Itália?",
      answer: "Prosecco"
    },
    {
      question: "Qual é o país que é o maior produtor de vinho do mundo?",
      answer: "Itália"
    },
    {
      question: "Qual é o nome da região produtora de vinho mais famosa da Espanha?",
      answer: "Rioja"
    },
    {
      question: "Qual é a diferença entre vinho tinto e vinho branco?",
      answer: "A cor da casca da uva usada na produção"
    },
    {
      question: "Qual é o processo usado para produzir vinho espumante?",
      answer: "Método Charmat"
    },
    {
      question: "Qual é o nome da uva usada para produzir vinho do Porto?",
      answer: "Touriga Nacional"
    },
    {
      question: "Qual é a temperatura ideal de serviço para vinho branco?",
      answer: "8-12 graus Celsius"
    }
]

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let answer = prompt(questions[i].question)

    if (answer.toLowerCase() === questions[i].answer.toLowerCase()) {
      score++
      alert("Resposta correta!")
    }else{
      alert("Resposta incorreta.")
    }
}

alert(`Seu resultado: ${score} de ${questions.length} perguntas corretas.`)
}