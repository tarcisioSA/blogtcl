


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
    lg.value = 0 
  }
  if(ssg.value.length == " "){
    ssg.value = 0 
  }
  if(philco.value.length == " "){
    philco.value = 0 
  }
  if(tcl.value.length == " "){
    tcl.value = 0
  }
  if(toshiba.value.length == " "){
    toshiba.value = 0
  }
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

    var tclInner = `TCL: ${tclResultado.toFixed(2)}% -  ${tcl.value} Peças</br>`
    var sempInner = `Semp: ${sempResultado.toFixed(2)}% - ${semp.value} Peças</br>`
    var aocInner = `AOC: ${aocResultado.toFixed(2)}% - ${aoc.value} Peças</br>`
    var samsungInner = `Samsung: ${ssgResultado.toFixed(2)}% -  ${ssg.value} Peças</br>`
    var lgInner = `LG: ${lgResultado.toFixed(2)}% -  ${lg.value} Peças</br>`
    var philipsInner = `Philips: ${philipsResultado.toFixed(2)}% - ${philips.value} Peças</br>`
    var philcoInner = `Philco: ${philcoResultado.toFixed(2)}% -  ${philco.value} Peças</br>`
    var toshibaInner = `Toshiba: ${toshibaResultado.toFixed(2)}% - ${toshiba.value} Peças</br>`
    var aiwaInner = `Aiwa: ${aiwaResultado.toFixed(2)}% - ${aiwa.value} Peças</br>`
    var vizzionInner = `Vizzion: ${vizzionResultado.toFixed(2)}% -  ${vizzion.value} Peças</br>`


    if(tcl.value == '0'){
      tclInner = ' '
    } 
    if(semp.value == '0'){
      sempInner = ' '
    }
    if(aoc.value == '0'){
      aocInner = ' '
    }
    if(ssg.value == '0'){
      samsungInner = ' '
    }
    if(lg.value == '0'){
      lgInner = ' '
    }
    if(philips.value == '0'){
      philipsInner = ' '
    }
    if(philco.value  == '0'){
      philcoInner = ' '
    }
    if(toshiba.value == '0'){
      toshibaInner = ' '
    }
    if(aiwa.value == '0'){
      aiwaInner = ' '
    }
    if(vizzion.value == '0'){
      vizzionInner = ' '
    }
    
    resultado.innerHTML = 
    `${tclInner} 
    ${sempInner}
    ${samsungInner}
    ${lgInner}
    ${philipsInner}
    ${philcoInner}
    ${toshibaInner}
    ${aocInner}
    ${aiwaInner}
    ${vizzionInner}
    
    Total ${total} peças | ${totalPorcetagem.toFixed(2)}%`

    const ctx = document.getElementById('myChart');

    
    const labels = ['TCL', 'SEMP', 'SAMSUNG', 'PHILCO', 'LG', 'TOSHIBA', 'PHILIPS', 'VIZZION', 'AIWA', 'AOC'];
    const dados = [tclResultado, sempResultado, ssgResultado, philcoResultado, lgResultado, toshibaResultado, philipsResultado, vizzionResultado, aiwaResultado, aocResultado];
    const cores = ["#d00000", "#3c096c", "#4361ee", "#293241", "#ff5a5f", "#f77f00", "#00009C", "#ffd60a", "#993399", "#d3d3d3"];
    
    
    const labelsAjustados = labels.map((label, index) => (dados[index] > 0 ? label : null));
    
    
    if (dados.some(valor => valor > 0)) {
      
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labelsAjustados,
          datasets: [{
            label: '# QTD TVs',
            data: dados,
            backgroundColor: cores,
            borderWidth: 1
          }]
        },
        options: {
          events: ['click'],
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              labels: {
                
                filter: function (item, chart) {
                  return item.text !== null;
                }
              }
            }
          }
        }
      });
    } else {
      
      console.log("Nenhum dado para exibir.");
      
      ctx.style.display = 'none';
    }
  




  

 

  

}
function recarregar(){
  window.location.reload();
} 






  


