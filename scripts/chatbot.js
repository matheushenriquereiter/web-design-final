const questions = [
  "Qual a localização do parque Vila Germânica?",
  "Quando acontece o Natal em Blumenau?",
  "Quando acontece a Noite de Open Mic no Porão Comedy Club?",
  "Quando acontece o Festival Brasileiro da Cerveja?",
  "Quando acontece a Temporada de Exposições do MAB?",
  "Quando acontece a Experiência ProWay?",
  "Quando acontece o show do Roberto Carlos?",
  "Quando acontece o Sommer Fest?",
  "Quando acontece a Festitália?",
  "Quando acontece o Workshop: Networking Estratégico?",
  "Quando acontece o Tributo ao Linkin Park e Charlie Brown Jr?",
  "Quando acontece o Amazing Tenors?",
  "Quando acontece o show da Maiara e Maraisa + Hugo e Guilherme?",
  "Quando acontece o show do Ney Matogrosso?",
  "Quando acontece a Feira Mostra Casa?",
  "Quando acontece a Fenahabit?",
  "Onde acontece o Natal em Blumenau?",
  "Onde acontece a Noite Open Mic?",
  "Onde acontecerá o Festival Brasileiro da Cerveja?",
  "Onde acontece a Temporada de Exposições do MAB?",
  "Onde acontecerá a Experiência ProWay?",
  "Onde acontecerá o show do Roberto Carlos?",
  "Onde acontecerá o Sommer Fest?",
  "Onde acontecerá a Festitália?",
  "Onde acontecerá o Workshop: Networking Estratégico?",
  "Onde acontecerá o Tributo ao Linkin Park e Charlie Brown Jr?",
  "Onde acontecerá o show do Amazing Tenors?",
  "Onde acontecerá o show Maiara e Maraisa + Hugo e Guilherme?",
  "Onde acontecerá o show do Ney Matogrosso?",
  "Onde acontecerá a Feira Mostra Casa?",
  "Onde acontecerá a Fenahabit?",
  "O Natal em Blumenau tem entrada gratuita?",
  "A Noite Open Mic tem entrada gratuita?",
  "O Festival Brasileiro da Cerveja tem entrada gratuita?",
  "A Temporada de Exposições do MAB tem entrada gratuita?",
  "A Experiência ProWay: Tech Explorers tem entrada gratuita?",
  "O show do Roberto Carlos tem entrada gratuita?",
  "A Sommer Fest tem entrada gratuita?",
  "A Festitália tem entrada gratuita?",
  "O Workshop: Networking Estratégico tem entrada gratuita?",
  "O Tributo ao Linkin Park e Charlie Brown Jr tem ingressos gratuitos?",
  "O show do Amazing Tenors tem entrada gratuita?",
  "O show da Maiara e Maraisa + Hugo e Guilherme tem entrada gratuita?",
  "O show do Ney Matogrosso tem entrada gratuita?",
  "A Feira Mostra Casa tem entrada gratuita?",
  "A Fenahabit tem entrada gratuita?",
];

const responses = [
  "O parque Vila Germânica fica na rua Alberto Stein, 199",
  "O evento começou em 7 de dezembro e irá até 19 de janeiro",
  "Acontecerá no dia 26 de janeiro",
  "Acontecerá entre os dias 9 a 11 de março",
  "Acontece entre os dias 7 de novembro e 30 de janeiro",
  "Acontecerá no dia 29 de janeiro",
  "Acontecerá no dia 12 de abril",
  "Acontecerá entre os dias 31 de janeiro e 1° de fevereiro",
  "Acontecerá entre os dias 13 e 23 de junho",
  "Acontecerá no dia 30 de janeiro",
  "Acontecerá no dia 31 de fevereiro",
  "Acontecerá no dia 9 de fevereiro",
  "Acontecerá no dia 28 de março",
  "Acontecerá no dia 20 de março",
  "Acontecerá entre os dias 11 a 13 de abril",
  "Acontecerá entre 22 e 25 de maio",
  "O evento acontece no parque Vila Germânica",
  "Acontecerá no Porão Comedy Club, localizado no Shopping Park Europeu - Rodovia Paul Fritz Kuehnrich, 1600",
  "Acontecerá no parque Vila Germânica",
  "Acontece no Museu de Arte de Blumenau, localizado na rua XV de Novembro, 161",
  "Acontecerá no Auditório da ProWay, rua 7 de setembro, 1600",
  "Acontecerá no parque Vila Germânica",
  "Acontecerá no parque Vila Germânica",
  "Acontecerá no parque Vila Germânica",
  "Acontecerá na ACIB Associação Empresarial de Blumenau, localizada na Rua Antônio Treis, 607",
  "Acontecerá na Ahoy! Tavern Club, localizada na Rua São Paulo, 2083",
  "Acontecerá no Teatro Carlos Gomes, Rua XV de Novembro, 1181",
  "Acontecerá no parque Vila Germânica",
  "Acontecerá no parque Vila Germânica",
  "Acontecerá no parque Vila Germânica",
  "Sim, esse evento tem entrada gratuita",
  "Não, esse evento tem ingressos a partir de R$12,50",
  "Não, esse evento tem ingressos a partir de R$25,00",
  "Sim, esse evento tem entrada gratuita",
  "Sim, esse evento tem entrada gratuita",
  "Não, esse evento tem ingressos a partir de R$400,00",
  "Não, esse evento tem ingressos a partir de R$40,00",
  "A Festitália tem entrada gratuita nos sábados e domingos até as 19 horas. Fora destas datas o valor do ingresso é R$20,00",
  "Não, esse evento tem ingressos a partir de R$250,00",
  "Não, esse evento tem ingressos a partir de R$44,00",
  "Não, esse evento tem ingressos a partir de R$75,00",
  "Não, esse evento tem ingressos a partir de R$100,00",
  "Não, esse evento tem ingressos a partir de R$132,00",
  "Sim, esse evento tem entrada gratuita",
  "Sim, esse evento tem entrada gratuita",
];

const potentialQuestions = document.querySelector(".potential-questions");
const form = document.querySelector("form");
const input = document.querySelector("input");
const messages = document.querySelector(".messages");
const firstMessage = document.querySelector(".message");
const askButton = document.querySelector(".ask-button");

const date = new Date();
const messageDate = `${("0" + date.getHours()).slice(-2)}:${(
  "0" + date.getMinutes()
).slice(-2)}`;

firstMessage.innerHTML += `<span>${messageDate}</span>`;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const potentialQuestion = potentialQuestions.children[0];

  if (potentialQuestion) {
    const responseIndex = questions.indexOf(potentialQuestion.textContent);

    const userMessage = document.createElement("li");
    userMessage.innerHTML =
      potentialQuestion.textContent +
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${messageDate}</span>`;
    userMessage.classList.add("message", "user");

    const botMessage = document.createElement("li");
    botMessage.innerHTML =
      responses[responseIndex] +
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${messageDate}</span>`;
    botMessage.classList.add("message", "bot");

    messages.insertAdjacentElement("beforeend", userMessage);
    messages.insertAdjacentElement("beforeend", botMessage);

    form.reset();
    potentialQuestions.innerHTML = "";
  }
});

input.addEventListener("input", () => {
  potentialQuestions.innerHTML = "";

  const userQuestion = input.value.trim();

  if (!userQuestion) {
    return;
  }

  const matchedQuestions = questions.filter((question) => {
    const userQuestionWords = userQuestion.split(" ");

    for (let i = 0; i < userQuestionWords.length; i++) {
      if (
        !question.toLowerCase().includes(userQuestionWords[i].toLowerCase())
      ) {
        return false;
      }
    }

    return true;
  });

  const questionsAsElements = matchedQuestions.map((matchedQuestion) => {
    const element = document.createElement("li");
    element.textContent = matchedQuestion;

    return element;
  });

  if (questionsAsElements[0]) {
    potentialQuestions.insertAdjacentElement(
      "afterbegin",
      questionsAsElements[0]
    );
  }

  if (questionsAsElements[1]) {
    potentialQuestions.insertAdjacentElement(
      "afterbegin",
      questionsAsElements[1]
    );
  }

  if (questionsAsElements[2]) {
    potentialQuestions.insertAdjacentElement(
      "afterbegin",
      questionsAsElements[2]
    );
  }
});

potentialQuestions.addEventListener("click", (event) => {
  const date = new Date();
  const messageDate = `${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;

  const responseIndex = questions.indexOf(event.target.textContent);

  const userMessage = document.createElement("li");
  userMessage.innerHTML =
    event.target.textContent +
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${messageDate}</span>`;
  userMessage.classList.add("message", "user");

  const botMessage = document.createElement("li");
  botMessage.innerHTML =
    responses[responseIndex] +
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${messageDate}</span>`;
  botMessage.classList.add("message", "bot");

  messages.insertAdjacentElement("beforeend", userMessage);
  messages.insertAdjacentElement("beforeend", botMessage);

  form.reset();
  potentialQuestions.innerHTML = "";
});

askButton.addEventListener("click", () => {
  const potentialQuestion = potentialQuestions.children[0];

  if (potentialQuestion) {
    const responseIndex = questions.indexOf(potentialQuestion.textContent);

    const userMessage = document.createElement("li");
    userMessage.innerHTML =
      potentialQuestion.textContent +
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${messageDate}</span>`;
    userMessage.classList.add("message", "user");

    const botMessage = document.createElement("li");
    botMessage.innerHTML =
      responses[responseIndex] +
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${messageDate}</span>`;
    botMessage.classList.add("message", "bot");

    messages.insertAdjacentElement("beforeend", userMessage);
    messages.insertAdjacentElement("beforeend", botMessage);

    form.reset();
    potentialQuestions.innerHTML = "";
  }
});
