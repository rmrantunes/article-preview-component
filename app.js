function shareIt() {
  const shareBtn = document.querySelector(".card__share-btn");
  const share = document.querySelector(".card__share")

  shareBtn.addEventListener("click", () => {
    share.classList.toggle("card__share--active");
  });
}

shareIt();
