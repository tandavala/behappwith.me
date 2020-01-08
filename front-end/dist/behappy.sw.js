var identificador = "behappy.sw";
var versao = 1;
var idAtual = identificador + "-" + versao;
var idAnterior = identificador + "-" + (versao - 1);

var ulrs = [
  "/",
  "bundle.js",
  "style.css",
  "img/avatars.png",
  "img/botoes.png",
  "img/logo.png"
];

function ativarServiceWOrker() {
  caches.open(idAtual).then(cache => {
    console.log("Cache Storage " + idAtual + " foi ativado com sucesso!");
    cache.addAll(urls).then(function() {
      caches.delete(idAnterior);
      console.log("Cache Storage " + idAnterior + " foi axcluido");
    });
  });
}
