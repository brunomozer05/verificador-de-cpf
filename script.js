function validar() {
    const cpfInput = document.getElementById('cpf').value
    const numeros = cpfInput.match(/\d/g)
    numeros && numeros.length === 11 
    let [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11] = numeros

    document.getElementById('res').innerText = `cpf numeros ${d1}, ${d2}, ${d3}, ${d4}, ${d5}, ${d6}, ${d7}, ${d8}, ${d9}, ${d10}, ${d11}`

}