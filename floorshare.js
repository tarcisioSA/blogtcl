


function calcular(){
  var tcl = document.getElementById("tcl")
  var semp = document.getElementById('semp')
  var lg = document.getElementById("lg")
  var ssg = document.getElementById("samsung")
  var philco = document.getElementById("philco")
  var toshiba = document.getElementById("toshiba")
  var vizzion = document.getElementById("vizzion")
  var philips = document.getElementById("philips")
  var aiwa = document.getElementById("aiwa")
  var aoc = document.getElementById('aoc')
  var resultado = document.getElementById("resultado")

  if(lg.value.length == " "){
    lg.value = 0 }
  if(ssg.value.length == " "){
    ssg.value = 0 }
  if(philco.value.length == " "){
    philco.value = 0 }
  if(tcl.value.length == " "){
    tcl.value = 0}
  if(toshiba.value.length == " "){
    toshiba.value = 0}
  if(vizzion.value.length == " "){
    vizzion.value = 0
  }
  if(philips.value.length == " "){
    philips.value = 0
  }
  if(aiwa.value.length == " "){
    aiwa.value = 0
  }
  if (aoc.value.length == " "){
    aoc.value = 0
  }
  if (semp.value.length == " "){
    semp.value = 0
  }

  var total = Number(lg.value) + Number(ssg.value) + Number(philco.value) + Number(tcl.value) + Number(toshiba.value) + Number(vizzion.value) + Number(philips.value) + Number(aiwa.value) + Number(aoc.value) + Number(semp.value)

  lgResultado = (lg.value*100) / total
  ssgResultado = (ssg.value*100) / total
  philcoResultado = (philco.value*100) / total
  tclResultado = (tcl.value*100) / total
  toshibaResultado = (toshiba.value*100) / total
  vizzionResultado = (vizzion.value*100) / total
  philipsResultado = (philips.value*100) / total
  aiwaResultado = (aiwa.value*100) / total
  aocResultado = (aoc.value*100) / total
  sempResultado = (semp.value*100) / total

  totalPorcetagem = lgResultado + ssgResultado + philcoResultado + tclResultado+toshibaResultado + vizzionResultado + philipsResultado + aiwaResultado + aocResultado + sempResultado

 
 
    resultado.innerHTML = 
    `TCL: ${tclResultado.toFixed(2)}% -  ${tcl.value} Peças</br>
    Semp: ${sempResultado.toFixed(2)}% = ${semp.value} Peças</br>
    Samsung: ${ssgResultado.toFixed(2)}% -  ${ssg.value} Peças</br>
    LG: ${lgResultado.toFixed(2)}% -  ${lg.value} Peças</br>
    Philips: ${philipsResultado.toFixed(2)}% - ${philips.value} Peças</br>
    Philco: ${philcoResultado.toFixed(2)}% -  ${philco.value} Peças</br>
    Toshiba: ${toshibaResultado.toFixed(2)}% - ${toshiba.value} Peças</br>
    AOC: ${aocResultado.toFixed(2)}% - ${aoc.value} Peças</br>
    Aiwa: ${aiwaResultado.toFixed(2)}% - ${aiwa.value} Peças</br>
    Vizzion: ${vizzionResultado.toFixed(2)}% -  ${vizzion.value} Peças</br>
    
    
    
    Total ${total} peças | ${totalPorcetagem.toFixed(2)}%`

    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
      type: 'pie',
      
      data: {
        labels: ['TCL', 'SEMP', 'SAMSUNG', 'PHILCO', 'LG', 'TOSHIBA','PHILIPS','VIZZION','AIWA', 'AOC'],
        
        datasets: [{
          label: '# QTD TVs',
          data: [tclResultado, ssgResultado, philcoResultado, lgResultado, toshibaResultado,philipsResultado, vizzionResultado, aiwaResultado, aocResultado],
          backgroundColor: ["#d00000","#3c096c", "#4361ee", "#293241", "#ff5a5f","#f77f00","#00009C", "#ffd60a", "#993399", "#d3d3d3 "],
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
function recarregar(){
  window.location.reload();
} 






  


