import {adicionaItem} from "../createTable.js";

async function pegaRegistroPorId(url,id) {
  await axios.get(`${url}/${id}`)
 .then((response)=>{
   const data = response.data
   adicionaItem(data,tabelaLista)
 })
 .catch((error)=>{console.log(error)})
}

function pegaTodosOsRegistros(url){
  axios.get(`${url}/`)
  .then((response)=>{
   const data = response.data
   data.forEach((element)=>{adicionaItem(element,tabelaLista)
   })

 })
 .catch((error)=>{console.log(error)})
}

function criaRegistro(url,data){
  axios.post(`${url}/`, data)
  .then(function (response) {
    window.alert("Cadastro realizado");
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
}

function atualizaRegistro(url,id,data){
  axios.put(`${url}/${id}`,data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
}

function apagaRegistro(url,id){
  axios.delete(`${url}/${id}`)
 .then(function (response){
  window.alert("Cadastro excluido");
 })
 .catch(function(error) {
  console.log(error)})
}

export {pegaRegistroPorId,pegaTodosOsRegistros,criaRegistro,atualizaRegistro,apagaRegistro}