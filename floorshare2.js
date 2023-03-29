function aplicar(){
    var quantidade = document.getElementById("quantidade")
    var res = document.getElementById("resultado")
    
    var qtd = Number(quantidade.value)
    
    
        
    
    count = 1
    do {
        
        count++
    } while (qtd < count);

    res.innerHTML = '<input type="number" id="quantidade"></input>'.repeat(qtd)
}