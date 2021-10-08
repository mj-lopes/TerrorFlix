$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// Selecao do livro ativo na area principal
// seleciona o livro de acordo com o data-id do livro cover
function mainBookChange(id) {
  const mainBook = document.querySelectorAll(".mainBook");

  for (livro of mainBook) {
    livro.classList.remove("ativo");
  }

  document.querySelector(`[data-idBook='${id}']`).classList.add("ativo");
}

// seleciona todos os itens do carrosel e add o evento para alterar o slide principal
function seletorClasses() {
  const boxesLivros = document.querySelectorAll(".owl-item .item");

  function handleClick({ target }) {
    const id = target.dataset.boxlivro;
    mainBookChange(id);
  }

  for (livro of boxesLivros) {
    livro.addEventListener("click", handleClick);
  }
}

// Menu mobile
function menuMobile() {
  const botaoMobile = document.querySelector("button[data-menuMobile]");

  botaoMobile.addEventListener("click", handleClick);
  botaoMobile.addEventListener("touchstart", handleClick);

  function handleClick(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle("ativo");
  }
}

seletorClasses();
menuMobile();
