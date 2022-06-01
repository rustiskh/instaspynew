document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-card");

  faqItems.forEach((faqItem) => {
    faqItem.addEventListener("click", function () {
      faqItems.forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("faq-card--active");
        } 
      });

      faqItem.classList.toggle("faq-card--active");
    });
  });
});
