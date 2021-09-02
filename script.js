
var res = document.querySelector('div#res')
function goBack() {
  window.history.back()
}

function gerarScript() {

  //Valor total
  var vTot = document.getElementById('vTot')
  vTot = Number(vTot.value)
  var valorTotal = vTot.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  
  //Desconto
  var desconto = document.getElementById('desc')
  
  

  //valor a vista
  var valA = document.getElementById('vA')
  valA = Number(valA.value)
  var valorVista = valA.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  //Data
  
  var dataInput = document.getElementById('venc')
  dataInput = dataInput.value
  data = new Date(dataInput);
  dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  res.innerHTML=`${dataFormatada}`
  //Taxa de Juros
  var taxJur = document.getElementById('tJuros')
  var taxaDeJuros = Number(taxJur.value)
  //CET Mensal
  var cetMporcet = document.getElementById('cetMenPct')
  var cetPorcentagemMensal = Number(cetMporcet.value)
  //Valor CET Mensal
  var valorCetM = document.getElementById('vCetMens')
  valorCetM = Number(valorCetM.value)
  var valorCetMensal = vTot.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  // CET Anual
  var cetAporcet = document.getElementById('cetAnuPct')
  var cetPorcentagemAnual = Number(cetAporcet.value)
  //Valor CET Anual
  var valorCetA = document.getElementById('vCetAnu')
  valorCetA = Number(valorCetA.value)
  var valorCetAnual = vTot.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })





  res.innerHTML = `O valor total será ${valorTotal}`
}
