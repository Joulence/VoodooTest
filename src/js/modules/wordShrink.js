export const wordShrinkOn = () => {
  const phrase = document.getElementById("phrase");
  const oldPhraseText = phrase.textContent;
  const newPhraseText = "Important info";

  window.addEventListener("resize", () => {
    if (innerWidth < 896) {
      phrase.textContent = newPhraseText;
    } else {
      phrase.textContent = oldPhraseText;
    }
  });
};
