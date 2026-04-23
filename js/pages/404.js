// pages/404.js
// Renderiza a tela de página não encontrada.

function renderNotFound() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="not-found">
      <p class="not-found-code">404</p>
      <p>Página não encontrada.</p>
      <a href="#" id="back-btn">← Voltar para home</a>
    </div>
  `;

  document.title = "404 | grcodev/blog";

  document.getElementById("back-btn").onclick = (e) => {
    e.preventDefault();
    navigate('/');
  };
}