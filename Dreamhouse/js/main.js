const accordionItems = document.querySelectorAll(".section8-1-house");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".section8-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".section8-1-house-p");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};


ScrollReveal({
  reset: true,
  origin: "top",
  distance: "5px",
  duration: 2500,
  delay: 100, 
})
ScrollReveal().reveal('.section-text, .section5-img, .section3-head,', {delay: 200, origin: 'left'});
ScrollReveal().reveal('.section1-img, .section5-text', {origin: 'right'});
ScrollReveal().reveal('.section6-head1, .section7, .Leasesection, .section9-house-child", .section8-content-house, .footer-section', {origin: 'bottom'});
ScrollReveal().reveal('.section2, .section6-head, .section7-head, .section8-img-house, .section9-content-house', {origin: 'top'});