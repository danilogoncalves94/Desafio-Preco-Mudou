function clicou() {
    let precoAntes = prompt(`Qual era o preço anterior do produto?`)
    if (precoAntes.length == 0) {
        alert(`Por favor, insira um preço.`)
    } else {
        let precoAntesReal = Number(precoAntes)
        if (isNaN(precoAntesReal)) {
            alert(`Por favor, informe um valor válido.`)
        } else {
            let precoDepois = prompt(`Qual é o preço atual do produto?`)
            if (precoDepois.length == 0) {
                alert(`Por favor, insira um preço.`)
            } else {
                let precoDepoisReal = Number(precoDepois)
                if (isNaN(precoDepoisReal)) {
                    alert(`Por favor, informe um valor válido.`)
                } else {
                    let maiorValor
                    let diferenca
                    let porcentagem
                    let conteudo = document.getElementById('secao')

                    if (precoAntesReal > precoDepoisReal) {
                        maiorValor = precoAntesReal
                        diferenca = precoAntesReal - precoDepoisReal
                        porcentagem = (diferenca / precoAntesReal) * 100
                        conteudo.innerHTML = `<h2>Analisando os valores informados...</h2>`
                        conteudo.innerHTML += `<p class="paragrafos">O produto custava R$ ${precoAntesReal.toLocaleString()} e agora custa R$ ${precoDepoisReal.toLocaleString()}.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">Hoje o produto está mais barato.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">O preço caiu R$ ${diferenca.toLocaleString()} em relação ao preço anterior.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">Uma variação de ${porcentagem.toFixed(2)}% pra baixo.</p>`
                    } else {
                        maiorValor = precoDepoisReal
                        diferenca = precoDepoisReal - precoAntesReal
                        porcentagem = (diferenca / precoAntesReal) * 100
                        conteudo.innerHTML = `<h2>Analisando os valores informados...</h2>`
                        conteudo.innerHTML += `<p class="paragrafos">O produto custava R$ ${precoAntesReal.toLocaleString()} e agora custa R$ ${precoDepoisReal.toLocaleString()}.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">Hoje o produto está mais caro.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">O preço subiu R$ ${diferenca.toLocaleString()} em relação ao preço anterior.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">Uma variação de ${porcentagem.toFixed(2)}% pra cima.</p>`
                    }
                }
            }
        }
    }
}