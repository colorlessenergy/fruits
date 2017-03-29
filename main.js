var smallNav = document.getElementById("small");
var displayN = document.getElementById("displayN");
var close = document.getElementById("close");
smallNav.addEventListener("click", function () {
  displayN.style.display = "flex";
  document.getElementsByTagName("body")[0].style.height = "100%";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";

});

close.addEventListener("click", function () {
  displayN.style.display = "none";
  document.getElementsByTagName("body")[0].style.height = "";
  document.getElementsByTagName("body")[0].style.overflow = "";
})
