
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
  var descont = document.getElementById('desc')
  var desconto = Number(descont.value)

  
  

  //valor a vista
  var valA = document.getElementById('vA')
  valA = Number(valA.value)
  var valorVista = valA.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  //Data
  
  var dataInput = document.getElementById('venc')
  dataInput = dataInput.value
  data = new Date(dataInput);
  dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  
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

res.innerHTML=`<h2 class="mt-2">Bacen A vista</h2>

<p>"Sr. informo que o acordo refere-se ao valor total de seu cartão, que é de ${valorTotal} </p>

<p>Com desconto de ${desconto}% (por cento - quando houver).</p>

<p>"Assim, estou confirmando em sistema o ACORDO de seu cartão (nome e bandeira do cartão)</p>

<p>Com pagamento á vista de ${valorVista}</p>
<p>Com vencimento para o dia ${dataFormatada}</p>

<p>"Neste acordo está inclusa a ${taxaDeJuros}% por cento ao mês." </p>



<h3 class="mt-2">Custo Efetivo Total</h3>

<p>Com Custo Efetivo Total mensal de ${cetPorcentagemMensal}% , sendo ${valorCetMensal}</p>

<p>E Custo Efetivo Total anual ${cetPorcentagemAnual}% sendo ${valorCetAnual}</p>

<em>- Se o CET estiver zerado (0,00%) ou estiver negativo: "para esta renegociação não gerou Custo Efetivo Total
    Anual e Mensal"</em>



<p>"Os pagamentos devem ser efetuados sempre em dias úteis, exatamente do valor acordado em reais e centavos,
    (sem arredondar) para evitar a quebra do acordo; não sendo possível fazer o cancelamento.”</p>



<p>O Sr. (a) me autoriza a confirmar em sistema?</p>




<p>Informo que as restrições EXTERNAS são retiradas em até 5 dias úteis após o pagamento do valor combinado.</p>



<p>
    Seu cartão ficará bloqueado até o termino do acordo, sendo necessário retornar o contato com a Central de
    Atendimento 5 (cinco) dias úteis após o último pagamento para verificar as condições de seu cartão.
</p>



<div class="btnAlign">

    <button class="btn btn-primary  mt-5" onclick="goBack()">VOLTAR</button>
</div>`

/*
res.innerHTML=`Sr. informo que o acordo refere-se ao valor total de seu cartão, que é de ${valorTotal}

 Com desconto de ${desconto}(por cento - quando houver).

"Assim, estou confirmando em sistema o ACORDO de seu cartão (nome e bandeira do cartão)

Com pagamento á vista de ${valorVista}

Com vencimento para o dia ${dataFormatada}

"Neste acordo está inclusa a taxa de ${taxaDeJuros}% por cento ao mês."
<h2>
  
  Custo Efetivo Total
</h2>
Com Custo Efetivo Total mensal de ${cetPorcentagemMensal}% , sendo ${valorCetMensal}

E Custo Efetivo Total anual de ${cetPorcentagemAnual}% sendo ${valorCetAnual}

- Se o CET estiver zerado (0,00%) ou estiver negativo: "para esta renegociação não gerou Custo Efetivo Total Anual e Mensal"
"Os pagamentos devem ser efetuados sempre em dias úteis, exatamente do valor acordado em reais e centavos, (sem arredondar) para evitar a quebra do acordo; não sendo possível fazer o cancelamento.”

O Sr. (a) me autoriza a confirmar em sistema?

Informo que as restrições EXTERNAS são retiradas em até 5 dias úteis após o pagamento do valor combinado.

Seu cartão ficará bloqueado até o termino do acordo, sendo necessário retornar o contato com a Central de Atendimento 5 (cinco) dias úteis após o último pagamento para verificar as condições de seu cartão.`

  */
}
