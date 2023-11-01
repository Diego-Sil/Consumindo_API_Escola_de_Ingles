import {
  pegaPessoaPorId,
  pegaTodasAsPessoas,
  criaPessoa,
  atualizaPessoa,
  apagaPessoa,
  pegaUmaMatricula,
} from "./req/pessoas.js";
pegaPessoaPorId(14);
pegaUmaMatricula(14,8)

btnBuscaPorId.addEventListener("click", function () {
  const id = iptId.value;
  pegaPessoaPorId(id);
});

btnBuscaTodos.addEventListener("click", function (event) {
  event.preventDefault();
  pegaTodasAsPessoas();
});

btnAdiciona.addEventListener("click", function (event) {
  event.preventDefault();
  criaPessoa();
});

btnAtualiza.addEventListener("click", function (event) {
  event.preventDefault();
  const id = iptId.value;
  atualizaPessoa(id);
});

btnExclui.addEventListener("click", function (event) {
  event.preventDefault();
  const id = iptId.value;
  apagaPessoa(id);
});

btnBuscaPorMatricula.addEventListener("click", function (event) {
  event.preventDefault();
  const estudanteId = iptId.value;
  const matriculaId = iptIdMatricula.value;
  pegaUmaMatricula(estudanteId, matriculaId);
});
