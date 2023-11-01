function montaTd(dado = "null", atribut) {
  var td = document.createElement("td");
  td.classList.add(`${atribut}-js`);
  td.textContent = dado;
  return td;
}

function montaTr(itemDaLista) {
  var itemDaListaTr = document.createElement("tr");
  const atributos = Object.keys(itemDaLista);

  const thElements = document.querySelectorAll("table th");
  const idsArray = [];
  thElements.forEach((thElement) => {
    idsArray.push(thElement.getAttribute("id"));
  });

  for (let j = 0; j < idsArray.length; j++) {
    const data = atributos.find((element) => idsArray[j] === element);
    itemDaListaTr.appendChild(montaTd(itemDaLista[data], idsArray[j]));
  }

  return itemDaListaTr;
}

function adicionaItem(itemDaLista, tabela) {
  var itemTr = montaTr(itemDaLista);
  tabela.appendChild(itemTr);
}

export { montaTd, montaTr, adicionaItem };
