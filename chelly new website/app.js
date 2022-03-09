const divs = Array.from(document.getElementsByClassName("imagename"));

divs.forEach((div) => {
  div.addEventListener("click", myFunction);
  function myFunction(e) {
    console.log("clicked");

    e.target.classList.toggle("active");
  }
});
