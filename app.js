function shareIt() {
  const shareBtn = document.querySelector(".card__share-btn");

  shareBtn.addEventListener("click", () => {
    shareBtn.classList.add("card__share-btn--active");
  });
}

shareIt();
