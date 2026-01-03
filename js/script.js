const buttons = document.querySelectorAll(".faq-question");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqAnswer = button.nextElementSibling;
    faqAnswer.classList.toggle("active");
    button.classList.toggle("active");
  });
});
