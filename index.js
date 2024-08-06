"use strict";
(function() {
  
  window.addEventListener("load", init);
  
  function init() {
    let modals = document.querySelectorAll(".modal");
    let projectCards = document.querySelectorAll(".project-card");
    console.log(projectCards)
    let projectNum = 0;
    for (const modal of modals) {
      // open modal button
      projectCards[projectNum].addEventListener("click", () => {
        modal.style.display = "block";
        console.log("modal added to projcard " + projectNum);
      });
      
      // close button
      let span = modal.querySelector(":scope span");
      span.addEventListener("click", () => {
        modal.style.display = "none";
      })
      
      // click outside modal, close
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      })
      projectNum++;
    }
    console.log("init");     
  }
})();