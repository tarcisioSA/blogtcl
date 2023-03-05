


function calcular(){
  var lg = document.getElementById("lg")
  var ssg = document.getElementById("samsung")
  var philco = document.getElementById("philco")
  var tcl = document.getElementById("tcl")
  var outros = document.getElementById("outros")
  var resultado = document.getElementById("resultado")

  

  var total = Number(lg.value) + Number(ssg.value) + Number(philco.value) + Number(tcl.value) + Number(outros.value)

  lgResultado = (lg.value*100) / total
  ssgResultado = (ssg.value*100) / total
  philcoResultado = (philco.value*100) / total
  tclResultado = (tcl.value*100) / total
  outrosResultado = (outros.value*100) / total

  if(lg.value.length == 0 || ssg.value.lenght == 0 || philco.value.lenght == 0 || tcl.value.lenght == 0 || outros.value.lenght == 0){
    window.alert("Erro, preencha um dos espaços abaixo: ")
  }else{
    resultado.innerHTML = `LG: ${lgResultado.toFixed(2)}%</br>Samsung: ${ssgResultado.toFixed(2)}%</br>Philco: ${philcoResultado.toFixed(2)}%</br>TCL: ${tclResultado.toFixed(2)}%</br>Outros: ${outrosResultado.toFixed(2)}%`

    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['LG', 'SAMSUNG', 'PHILCO', 'TCL', 'OUTROS'],
        
        datasets: [{
          label: '# QTD TVs',
          data: [lgResultado, ssgResultado, philcoResultado, tclResultado, outrosResultado],
          backgroundColor: ["red", "blue", "black", "green", "orange"],
          borderWidth: 1
        }]
      },
      options: {
        events: ['click'],
        scales: {
          y: {
            beginAtZero: true
          }
        }
        
      }
    });
  }




  

 

  

}
function recarregar(){
  window.location.reload();
} 






  


