var lang = getParameterByName('lang');

var textos = {
  'disminucion':"1. La bacteria disminuye la cantidad de canales a través de los cuales entra el antibiótico a la célula.",
  "destruccion":"2. Una vez adentro, el antibiótico es inactivado o destruido por proteínas llamadas enzimas.",
  "modificacion":"3. La bacteria modifica la molécula diana sobre la cual actúa el antibiótico.",
  "expulsion":"4. El antibiótico es expulsado hacia el exterior de la bacteria, a través de bombas de flujo."
}
var textos_en = {
  'disminucion':"1. The bacterium decreases the amount of channels through which the antibiotics enter the cell.",
  "destruccion":"2. Once inside, the antibiotic is inactivated or destroyed by proteins called enzymes.",
  "modificacion":"3. The bacterium modifies the molecule that is targeted by the antibiotic.",
  "expulsion":"4. The antibiotic is pumped out of the bacterium by efflux pumps."
}
d3.xml('RESISTENCIA_1_ok.svg' , "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);

  if(lang=='en'){
    d3.select('svg g#TEXTOS_EN').style('display','block');
    d3.select('svg g#TEXTOS').style('display','none')
    txt = textos_en;
  }else{
    d3.select('svg g#TEXTOS_EN').style('display','none');
    d3.select('svg g#TEXTOS').style('display','block')
    txt = textos;
  }

  $( "#popup" ).css('display','inherit');
  $( "#popup" ).popup();

  d3.selectAll('#hover rect')
  .on('mouseover',function(){
    // console.log(d3.select(this))
    d3.selectAll('.animate').classed('animate', false);
    if(d3.select(this).classed("disminucion")){
      d3.selectAll('#pastilleta_entrada_1').classed('animate',true)
    }
    if(d3.select(this).classed("destruccion")){
      d3.selectAll('#pastilleta_destruccion_1').classed('animate',true)
    }
    if(d3.select(this).classed("modificacion")){
      d3.selectAll('#pastilleta_modificacion_1').classed('animate',true)
    }
  })
  .on('mouseout',function(){
    d3.selectAll('.animate').classed('animate', false);
  })
  .on('click',function(){
      var e=d3.select(this).attr('class');

      if (typeof txt[e] !== 'undefined') {
        $('#popup .content').text('');
        $('#popup .content').html(txt[e]);
        $( "#popup" ).popup( "open" );
      }
  })
  // d3.selectAll('.hover').on('mouseover', tip.show)
  // .on(  'mouseout', tip.hide);

});
