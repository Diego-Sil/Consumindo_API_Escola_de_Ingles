import {pegaRegistroPorId,pegaTodosOsRegistros,criaRegistro,atualizaRegistro,apagaRegistro} from "../services/index.js"

const url ='http://localhost:3000/pessoas'

function pegaPessoaPorId(id){
  pegaRegistroPorId(url,id)
}

function pegaTodasAsPessoas(){
  pegaTodosOsRegistros(url)
}

function criaPessoa(){
  const novaPessoa = {
    "nome": iptNome.value,
    "ativo": true,
    "email": iptEmail.value,
    "role": iptRole.value
  }
  criaRegistro(url,novaPessoa)
}

function atualizaPessoa(id){
  const pessoaAtualizada = {
    "nome": iptNome.value,
    "ativo": true,
    "email": iptEmail.value,
    "role": iptRole.value
  }
  atualizaRegistro(url,id,pessoaAtualizada)
}

function apagaPessoa(id){
  apagaRegistro(url,id)
}

function pegaUmaMatricula(estudanteId,matriculaId) {
  const id = `${estudanteId}/matricula/${matriculaId}`
  const data  = pegaRegistroPorId(url,id)


  // adicionaItem(data,tabelaLista)


}


// atualizaRegistros
// restauraRegistro
// consultaRegistroApagado
// .get('/pessoas/:estudanteId/matricula/:matriculaId',  MatriculaController.pegaUmaMatricula)
// .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
// .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
// .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
// .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)
// .put('/pessoas/:estudanteId/matricula/:matriculaId',  MatriculaController.atualizaMatricula)
// .delete('/pessoas/:estudanteId/matricula/:matriculaId',  MatriculaController.apagaMatricula)

export {pegaPessoaPorId,pegaTodasAsPessoas,criaPessoa,atualizaPessoa,apagaPessoa,pegaUmaMatricula}