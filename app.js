document.querySelectorAll(".section .sub-section").forEach((section) => {
  section.addEventListener("click", function () {
    //Event listner for section.
    const targetId = this.textContent.toLowerCase(); // We store which sub-section is clicked.
    const target = document.getElementById(targetId); //We select the sub-section clicked.
    if (target) {
      //If target exists then we do scroll event.
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

const emailId = document.querySelector(".email-id");

emailId.addEventListener("click", () => {
  const emailCopy = emailId.textContent;
  window.alert("Email Id Copied");
  navigator.clipboard.writeText(emailCopy);
});

const popUp = document.querySelector(".pop-up");
let popupTimer;

emailId.addEventListener("mouseenter", () => {
  popupTimer = setTimeout(() => {
    popUp.classList.add("pop-up-show");
  }, 200); // Adjust the delay as needed
});

emailId.addEventListener("mouseleave", () => {
  clearTimeout(popupTimer);
  popUp.classList.remove("pop-up-show");
});
