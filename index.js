/* Open and close the modal to add new books*/
//Defining Constants of the modal
const modal = document.querySelector("#add-new-book");
const modalStop = document.querySelector(".close");
const modalAppearNav = document.querySelector(".add-new-btn-nav");
const modalAppearBody = document.querySelector(".add-new-btn-body");
//Adding the functionalities
modalStop.addEventListener("click", function () {
  modal.style.display = "none";
});
modalAppearNav.addEventListener("click", function () {
  modal.style.display = "block";
});
modalAppearBody.addEventListener("click", function () {
  modal.style.display = "block";
});

/*End of Open and close the modal to add new books*/
