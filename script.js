



//função para retornar para a página anterior
function goBack() {
  window.history.back()
}

//fim da função retornar.

var res = document.querySelector('div#res')
var bacenPadrao = document.querySelector('div#scriptBacen')
var geradorBacen = document.querySelector('div#gerBacen')


function formularioBacenAvista() {

  geradorBacen.innerHTML = `
  
  

<!-- Inicio Valor a vista-->
      <div class="input-group w-75">
        <div class="input-group-pretend">
          <span class="input-group-text">R$</span>
        </div>
        <input class="form-control" id="vTot" type="text" pattern="[0-9]*" inputmode="numeric" placeholder="Valor total">
        
      </div>
      <!-- Fim Valor a vista-->

      <!-- Inicio Desconto-->
      <div class="input-group w-75">

        <input class="form-control" id="desc" pattern="[0-9]*" inputmode="numeric" type="text" placeholder="Desconto">
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>

      <!-- Fim Desconto-->

      <!-- Inicio Pagamento a vista-->
      <div class="input-group w-75">
        <div class="input-group-pretend">
          <span class="input-group-text">R$</span>
        </div>
        <input class="form-control" id="vA" type="text" pattern="[0-9]*" inputmode="numeric" placeholder="Valor a vista">
        
      </div>

      <!-- Fim Pagamento a vista-->

      <!-- Inicio Vencimento-->
      <div class="form-outline w-75">

      <div class="form-outline">
  <input type="date" id="venc" class="form-control" />
  <label class="form-label" for="form1">Vencimento📆</label>
</div>
        
      
      </div>
      
      
      
      <!-- Fim Vencimento-->
      <!-- Inicio Taxa de Juros-->
      <div class="input-group w-75">

        <input class="form-control" id="tJuros" pattern="[0-9]*" inputmode="numeric" type="text" placeholder="Taxa de juros Mês">
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>

      <!-- Fim Taxa de juros-->

      <!-- Inicio porcentagem CET Mensal-->
      <div class="input-group w-75">

        <input class="form-control" id="cetMenPct" pattern="[0-9]*" inputmode="numeric" type="text" placeholder="CET Mensal">
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>
      <!-- Fim porcentagem CET Mensal-->
      <!-- Inicio valor CET Mensal-->
      <div class="input-group w-75">
        <div class="input-group-pretend">
          <span class="input-group-text">R$</span>
        </div>
        <input class="form-control" id="vCetMens" type="text" pattern="[0-9]*" inputmode="numeric" placeholder="Valor CET Mensal">
        
      </div>

      <!-- Fim valor CET Mensal-->

      <!-- Inicio porcentagem CET Anual -->
      <div class="input-group w-75">

        <input class="form-control" id="cetAnuPct" pattern="[0-9]*" inputmode="numeric" type="text" placeholder="CET Anual">
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>
      <!-- Fim porcentagem CET Anual -->

      <!-- Inicio valor CET Anual-->
      <div class="input-group w-75">
        <div class="input-group-pretend">
          <span class="input-group-text">R$</span>
        </div>
        <input class="form-control" id="vCetAnu" type="text" pattern="[0-9]*" inputmode="numeric" placeholder="Valor CET Anual">
        

      </div>


      <!-- Fim CET Anual-->
      <!-- Gerar Script-->
      <div class="btnAlign"><input class="btn btn-success  w-75 " type="submit" value="Gerar Script" onclick="gerarScriptBacenAvista()"></div>

      <!-- Fim Gerar Script-->

  </form>
  `


}
function gerarScriptBacenAvista() {
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
  //Vencimento
  var dataInput = document.getElementById('venc')
  dataInput = dataInput.value
  data = new Date(dataInput);
  dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  //Taxa de Juros
  var taxJur = document.getElementById('tJuros')
  var taxaDeJuros = Number(taxJur.value)
  //CET Mensal
  var cetMporcet = document.getElementById('cetMenPct')
  var cetPorcentagemMensal = Number(cetMporcet.value)
  //Valor CET Mensal
  var valorCetM = document.getElementById('vCetMens')
  valorCetM = Number(valorCetM.value)
  var valorCetMensal = valorCetM.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  // CET Anual
  var cetAporcet = document.getElementById('cetAnuPct')
  var cetPorcentagemAnual = Number(cetAporcet.value)
  //Valor CET Anual
  var valorCetA = document.getElementById('vCetAnu')
  valorCetA = Number(valorCetA.value)
  var valorCetAnual = valorCetA.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  res.innerHTML = `<h2 class="mt-2">Bacen A vista</h2>
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

        <button class="btn btn-danger  mt-5" onclick="goBack()">VOLTAR</button>
    </div>
`


}

function formularioBacenComEntrada() {
  geradorBacen.innerHTML = `
  
  <!--Valor total -->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vTot" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor total">

        </div>
        <!--Fim Valor total -->

        <!--Desconto -->
        <div class="input-group w-75">

            <input class="form-control" id="desc" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="Desconto">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--Fim desconto -->

        <!--Valor entrada -->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vE" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor Entrada">

        </div>
        <!--Fim valor entrada -->

        <!--Data entrada -->
        <div class="form-outline w-75">

            <div class="form-outline">
                <input type="date" id="venc" class="form-control" />
                <label class="form-label" for="form1">Data da entrada📆</label>
            </div>


        </div>
        <!--fim data entrada -->

        <!--quantidade de parcelas -->
        <div class="input-group w-75">

            <input class="form-control" id="qtP" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Quantidade de parcelas">

        </div>

        <!--Fim quantidade de parcelas -->

        <!--Valor parcelas -->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vP" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor das parcelas">

        </div>

        <!--fim valor parcelas -->

        <!--Primeiro vencimento -->
        <div class="form-outline w-100">

            <div class="form-outline">
                <input type="date" id="pVenc" class="form-control" />
                <label class="form-label" for="form1">Primeiro vencimento📆</label>
            </div>


        </div>

        <!--fim primeiro vencimento -->

        <!--demais parcelas -->

        <!--fim demais parcelas -->

        <!--taxa de juros mês -->
        <div class="input-group w-75">

            <input class="form-control" id="tJuros" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="Taxa de juros Mês">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--Fim taxa de juros mês -->

        <!--%CET mensal -->
        <div class="input-group w-75">

            <input class="form-control" id="cetMenPct" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="CET Mensal">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--fim % CET mensal -->

        <!--valor CET mensal -->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vCetMens" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor CET Mensal">

        </div>
        <!--fim valor Cet mensal -->

        <!--%CET anual -->
        <div class="input-group w-75">

            <input class="form-control" id="cetAnuPct" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="CET Anual">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--fim %CET anual-->

        <!--valor CET anual-->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vCetAnu" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor CET Anual">


        </div>
        <!--fim valor CET anual-->







        
       
        <!--Gerar Script-->
        <div class="btnAlign"><input class="btn btn-success  w-75 " type="submit" value="Gerar Script"
                onclick="gerarScriptBacenComEntrada()"></div>

        <!--Fim Gerar Script-->

        </form>




    

    </div>


  `
}

function gerarScriptBacenComEntrada() {
  //Valor total
  var vTot = document.getElementById('vTot')
  vTot = Number(vTot.value)
  var valorTotal = vTot.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


  //Desconto
  var descont = document.getElementById('desc')
  var desconto = Number(descont.value)
  //valor da entrada
  var valE = document.getElementById('vE')
  valE = Number(valE.value)
  var valorEntrada = valE.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  //Data

  var dataInput = document.getElementById('venc')
  dataInput = dataInput.value
  data = new Date(dataInput);
  dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  //Quantidade de parcelas.

  var quantP = document.getElementById('qtP')
  quantidadeParcela = Number(quantP.value)

  //Valor Parcela

  var valP = document.getElementById('vP')
  valP = Number(valP.value)
  var valorParcela = valP.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  //Primeiro vencimento
  var priV = document.getElementById('pVenc')
  primeVen = priV.value
  primeVenc = new Date(primeVen);
  primeiroVencimento = primeVenc.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  //Taxa de Juros
  var taxJur = document.getElementById('tJuros')
  var taxaDeJuros = Number(taxJur.value)
  //CET Mensal
  var cetMporcet = document.getElementById('cetMenPct')
  var cetPorcentagemMensal = Number(cetMporcet.value)
  //Valor CET Mensal
  var valorCetM = document.getElementById('vCetMens')
  valorCetM = Number(valorCetM.value)
  var valorCetMensal = valorCetM.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  // CET Anual
  var cetAporcet = document.getElementById('cetAnuPct')
  var cetPorcentagemAnual = Number(cetAporcet.value)
  //Valor CET Anual
  var valorCetA = document.getElementById('vCetAnu')
  valorCetA = Number(valorCetA.value)
  var valorCetAnual = valorCetA.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


  res.innerHTML = `

  <h1>Com Entrada</h1>

<p>"Sr. informo que o acordo refere-se ao valor total de seu cartão, que é de ${valorTotal}</p>

        <p>Com desconto de ${desconto}%.</p>

        <p>Assim, estou confirmando em sistema o ACORDO de seu cartão (NOME E BANDEIRA DO CARTÃO)</p>

        <p>Com entrada de ${valorEntrada} para dia ${dataFormatada} </p>

        <p>Mais ${quantidadeParcela} parcelas de ${valorParcela}</p>

        <p>
            Com o primeiro vencimento para o dia ${primeiroVencimento} e
            demais vencimentos para todo dia ${primeiroVencimento[0]}${primeiroVencimento[1]}."
        </p>

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

        <button class="btn btn-danger  mt-5" onclick="goBack()">VOLTAR</button>
    </div>
        
        `

}

function formularioBacenSemEntrada() {

  geradorBacen.innerHTML = `
    <!--Valor total-->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vTot" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor total">

        </div>
        <!--Fim Valor total-->

        <!--Desconto-->
        <div class="input-group w-75">

            <input class="form-control" id="desc" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="Desconto">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--Fim desconto-->

        <!--Valor Primeira parcela-->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vP" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor Primeira parcela">

        </div>
        <!--Fim valor Primeira parcela-->
        

        <!--Data Primeira parcela-->
        <div class="form-outline w-75">

            <div class="form-outline">
                <input type="date" id="venc" class="form-control" />
                <label class="form-label" for="form1">Data da Primeira📆</label>
            </div>


        </div>
        <!--fim data Primeira parcela-->

        <!--quantidade de parcelas-->
        <div class="input-group w-75">

            <input class="form-control" id="qtP" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Quantidade de parcelas">

        </div>

        <!--Fim quantidade de parcelas-->

               <!--taxa de juros mês-->
        <div class="input-group w-75">

            <input class="form-control" id="tJuros" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="Taxa de juros Mês">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--Fim taxa de juros mês-->

        <!--% CET mensal-->
        <div class="input-group w-75">

            <input class="form-control" id="cetMenPct" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="CET Mensal">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--fim % CET mensal-->

        <!--valor CET mensal-->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vCetMens" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor CET Mensal">

        </div>
        <!--fim valor Cet mensal-->

        <!--% CET anual-->
        <div class="input-group w-75">

            <input class="form-control" id="cetAnuPct" pattern="[0-9]*" inputmode="numeric" type="text"
                placeholder="CET Anual">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
        <!--fim % CET anual-->

        <!--valor CET anual-->
        <div class="input-group w-75">
            <div class="input-group-pretend">
                <span class="input-group-text">R$</span>
            </div>
            <input class="form-control" id="vCetAnu" type="text" pattern="[0-9]*" inputmode="numeric"
                placeholder="Valor CET Anual">


        </div>
        <!--fim valor CET anual-->


        
       
        <!--Gerar Script-->
        <div class="btnAlign"><input class="btn btn-success  w-75 " type="submit" value="Gerar Script"
                onclick="gerarScriptBacenSementrada()"></div>

        <!--Fim Gerar Script-->

        </form>

    `
}

function gerarScriptBacenSementrada() {
  //Valor total
  var vTot = document.getElementById('vTot')
  vTot = Number(vTot.value)
  var valorTotal = vTot.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


  //Desconto
  var descont = document.getElementById('desc')
  var desconto = Number(descont.value)

  //Valor Parcela

  var valP = document.getElementById('vP')
  valP = Number(valP.value)
  var valorParcela = valP.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  //Data

  var dataInput = document.getElementById('venc')
  dataInput = dataInput.value
  data = new Date(dataInput);
  dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  //Quantidade de parcelas.

  var quantP = document.getElementById('qtP')
  quantidadeParcela = Number(quantP.value)



  //Taxa de Juros
  var taxJur = document.getElementById('tJuros')
  var taxaDeJuros = Number(taxJur.value)
  //CET Mensal
  var cetMporcet = document.getElementById('cetMenPct')
  var cetPorcentagemMensal = Number(cetMporcet.value)
  //Valor CET Mensal
  var valorCetM = document.getElementById('vCetMens')
  valorCetM = Number(valorCetM.value)
  var valorCetMensal = valorCetM.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  // CET Anual
  var cetAporcet = document.getElementById('cetAnuPct')
  var cetPorcentagemAnual = Number(cetAporcet.value)
  //Valor CET Anual
  var valorCetA = document.getElementById('vCetAnu')
  valorCetA = Number(valorCetA.value)
  var valorCetAnual = valorCetA.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  res.innerHTML = `
<h2 class="mt-2">Sem entrada</h2>
        <p>Sr. informo que o acordo refere-se ao valor total de seu cartão, que é de R$ ${valorTotal}</p>

        <p>Com desconto de ${desconto}% (por cento - quando houver).</p>
        <p>Assim, estou confirmando em sistema o ACORDO de seu cartão (NOME E BANDEIRA DO CARTÃO)</p>
        <p>Com a primeira parcela de ${valorParcela} para dia ${dataFormatada}</p>

        <p>Mais ${quantidadeParcela} parcelas de ${valorParcela} com os demais vencimentos para todo dia ${dataFormatada[0]}${dataFormatada[1]}."</p>

        


        <p>"Neste acordo está inclusa a taxa ${taxaDeJuros}% por cento ao mês." </p>
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

        <button class="btn btn-danger  mt-5" onclick="goBack()">VOLTAR</button>
    </div>

`


}



function Avista() {

  bacenPadrao.innerHTML = `
  <p>"Sr. informo que o acordo refere-se ao valor total de seu cartão, que é de R$ XX,XX</p>

        <p>Com desconto de XX% (por cento - quando houver).</p>

        <p>"Assim, estou confirmando em sistema o ACORDO de seu cartão (nome e bandeira do cartão)</p>

        <p>Com pagamento á vista de R$ XXX,XX</p>
        <p>Com vencimento para o dia XX/XX/XX</p>

        <p>"Neste acordo está inclusa a taxa de XX,XX% por cento ao mês." </p>



        <h3 class="mt-2">Custo Efetivo Total</h3>

        <p>Com Custo Efetivo Total mensal de xx,xx% , sendo xx,xx</p>

        <p>E Custo Efetivo Total anual de xx,xx% sendo xx,xx</p>

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

  `

}

function comEntrada() {

  bacenPadrao.innerHTML = `
  <p>"Sr. informo que o acordo refere-se ao valor total de seu cartão, que é de R$ XX,XX</p>

        <p>Com desconto de XX% (por cento - quando houver).</p>

        <p>Assim, estou confirmando em sistema o ACORDO de seu cartão (NOME E BANDEIRA DO CARTÃO)</p>

        <p>Com entrada de R$ XX,XX para dia XX/XX/XX </p>

        <p>Mais XX parcelas de R$ XXX,XX</p>

        <p>
            Com o primeiro vencimento para o dia XX/XX/XX e
            demais vencimentos para todo dia XX."
        </p>

        <p>"Neste acordo está inclusa a taxa de XX,XX% por cento ao mês (quando houver).</p>



        <h3>Custo Efetivo Total</h3>

        <p>
            "Com Custo Efetivo Total mensal de xx,xx% , sendo xx,xx ; e Custo Efetivo Total
            anual de xx,xx% , sendo xx,xx ;"
        </p>

        <em>
            - Se o CET estiver zerado (0,00%) ou estiver negativo: "para esta renegociação não gerou Custo Efetivo Total
            Anual e Mensal"
        </em>



        <p>
            "Os pagamentos devem ser efetuados sempre em dias úteis, exatamente do valor acordado em reais e centavos,
            (sem
            arredondar) para evitar a quebra do acordo; não sendo possível fazer o cancelamento.”
        </p>



        <p>"O Sr. (a) me autoriza a confirmar em sistema?“</p>


        <p>"O Acordo foi registrado com sucesso."</p>

        <p>Informo que as restrições EXTERNAS são retiradas em até 5 dias úteis após o pagamento da entrada.</p>



        <p>
            “Seu cartão ficará bloqueado até o termino do acordo, sendo necessário retornar o contato com a Central de
            Atendimento 5 (cinco) dias úteis após o último pagamento para verificar as condições de seu cartão.”
        </p>

  `

}

function semEntrada() {
  bacenPadrao.innerHTML = `
  <p>Sr. informo que o acordo refere-se ao valor total de seu cartão, que é de R$ XX,XX</p>

        <p>Com desconto de XX% (por cento - quando houver).</p>
        <p>Assim, estou confirmando em sistema o ACORDO de seu cartão (NOME E BANDEIRA DO CARTÃO)</p>
        <p>Com a primeira parcela de R$ XX,XX para dia XX/XX/XX</p>

        <p>Mais XX parcelas de R$ XXX,XX com os demais vencimentos para todo dia XX."</p>

        <p>Neste acordo está inclusa a taxa de XX,XX% por cento ao mês</p>

        <h3>Custo Efetivo Total</h3>

        <p>
            "Com Custo Efetivo Total mensal de xx,xx% , sendo xx,xx ; e Custo Efetivo Total
            anual de xx,xx% , sendo xx,xx ;"
        </p>

        <em>
            - Se o CET estiver zerado (0,00%) ou estiver negativo: "para esta renegociação não gerou Custo Efetivo Total
            Anual e Mensal"
        </em>



        <p>
            "Os pagamentos devem ser efetuados sempre em dias úteis, exatamente do valor acordado em reais e centavos,
            (sem
            arredondar) para evitar a quebra do acordo; não sendo possível fazer o cancelamento.”
        </p>



        <p>"O Sr. (a) me autoriza a confirmar em sistema?“</p>


        <p>"O Acordo foi registrado com sucesso."</p>

        <p>Informo que as restrições EXTERNAS são retiradas em até 5 dias úteis após o pagamento da entrada.</p>



        <p>
            “Seu cartão ficará bloqueado até o termino do acordo, sendo necessário retornar o contato com a Central de
            Atendimento 5 (cinco) dias úteis após o último pagamento para verificar as condições de seu cartão.”
        </p>



  `

}

