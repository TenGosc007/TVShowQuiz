const categoryGot = document.querySelector(".GameOfThrone");
const categoryRm = document.querySelector(".RickAndMorty");
const categoryBb = document.querySelector(".Breaking-Bad");

function goToQuiz(category) {
  localStorage.setItem("category", category);
  const page = window.location.pathname.split("/");
  page.pop();
  console.log("test2 ", page.join("/"));
  window.location.pathname = page + "/quiz-panel.html";
}

export function selectCategory() {
  categoryGot.addEventListener("click", () => {
    goToQuiz("got");
  });
  categoryRm.addEventListener("click", () => {
    goToQuiz("rm");
  });
  categoryBb.addEventListener("click", () => {
    goToQuiz("bb");
  });
}
