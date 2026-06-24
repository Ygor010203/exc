function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {

        res.innerHTML = 'Contando:<br>'

        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👉 `
        }

        res.innerHTML += `🏁`
    }
}