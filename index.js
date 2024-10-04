"use strict";
(function() {
  
  window.addEventListener("load", init);
  
  function init() {
    let modals = document.querySelectorAll(".modal");
    let projectCards = document.querySelectorAll(".project-card");
    console.log(projectCards)
    for (const modal of modals) {
      
      let modalId = modal.id.split("-")[1];
      
      let projectCard;
      // select appropriate project card
      for (const pCard of projectCards) {
        let projectNum = pCard.id.split("-")[1];
        if (projectNum === modalId) {
          projectCard = pCard;
          console.log(projectCard.id + " chosen for modal " + modalId);
        }
      }
      
      // open modal button
      projectCard.addEventListener("click", () => {
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
    }
    console.log("init");     
  }
})();