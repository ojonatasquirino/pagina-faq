const faqs = [
 {
   question: "Como faço para redefinir minha senha?",
   answer:
     'Você pode redefinir sua senha clicando em "Esqueceu sua senha" na página de login.',
 },
 {
   question: "Quais são os métodos de pagamento aceitos?",
   answer: "Aceitamos pagamento via Pix e cartões Visa, Mastercard, American Express e Paypal. ",
 },
 {
   question: "Qual é a política de reembolso?",
   answer: "Oferecemos reembolso total até 30 dias após a compra.",
 },
 {
   question: "Como entro em contato com o suporte?",
   answer: "Você pode nos contatar pelo e-mail, telefone ou chat ao vivo.",
 },
];

function toggleAnswer(event) {
 const questionCard = event.currentTarget;

 const answer = questionCard.querySelector(".faq-container__answer");
 const icon = questionCard.querySelector(".faq-container__icon");

 if (answer.classList.contains("open")) {
   answer.classList.remove("open");
   icon.classList.remove("open");
 } else {
   answer.classList.add("open");
   icon.classList.add("open");
 }
}

function applyTheme(theme) {
 if (theme === "dark") {
   document.body.classList.add("dark");
 } else {
   document.body.classList.remove("dark");
 }
}

function toggleTheme() {
 const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
 const newTheme = currentTheme === "dark" ? "light" : "dark";
 applyTheme(newTheme);
 localStorage.setItem("theme", newTheme); // salva no LocalStorage
}

window.onload = function () {
 const faqContainerList = document.querySelector(".faq-container__list");
 const questionCardTemplate = document.querySelector("#question-card");

 // carrega o tema salvo ou aplica o tema padrão (light)
 const savedTheme = localStorage.getItem("theme") || "light";
 applyTheme(savedTheme);

 // configura o evento de clique no botão de alternância de tema
 document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

 faqs.forEach((faq) => {
   const newFaqItem = document.importNode(questionCardTemplate.content, true);

   newFaqItem.querySelector(".faq-container__question-text").textContent = faq.question;
   newFaqItem.querySelector(".faq-container__answer").textContent = faq.answer;

   newFaqItem
     .querySelector(".faq-container__question-card")
     .addEventListener("click", toggleAnswer);

   faqContainerList.appendChild(newFaqItem);
 });
};
