var valores = []
var num = document.getElementById(`fnum`)
var lista = document.getElementById("flista")
let res = document.getElementById("res")

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    var item = document.createElement("option")
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ""
  } else {
    window.alert("Valor inválido ou já encontrado na lista!")
  }
  num.value = ""
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!")
  } else {
    var tot = valores.length
    var ordem = valores.sort((a, b) => a - b)
    var soma = 0
    var media = 0
    for (var pos in valores){
      soma = soma + valores[pos]
    }
    media = soma / tot

    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O menor valor é ${ordem[0]}</p>`
    res.innerHTML += `<p>O maior valor é ${ordem[ordem.length - 1]}</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    res.innerHTML += `<p>A média de todos os valores é ${media}</p>`

  }
}