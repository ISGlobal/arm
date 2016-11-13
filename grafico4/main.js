var lang = getParameterByName('lang');

d3.xml('RESISTENCIA_2_ok.svg' , "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);

  if(lang=='en'){
    d3.select('svg g#TEXTOS_EN').style('display','block');
    d3.select('svg g#LETRERO_EN').style('display','block');
    d3.select('svg g#TEXTOS').style('display','none')
    d3.select('svg g#LETRERO').style('display','none')
    txt = "<h2>How do bacteria acquire resistance genes</h2>Plasmids (small circles of DNA) that contain resistance genes can be passed from one bacterium to another. This horizontal gene transfer is one of the mechanisms by which bacteria can acquire antibiotic resistance.";
  }else{
    d3.select('svg g#TEXTOS_EN').style('display','none');
    d3.select('svg g#LETRERO_EN').style('display','none');
    d3.select('svg g#TEXTOS').style('display','block')
    d3.select('svg g#LETRERO').style('display','block')
    txt = "<h2>¿Cómo se adquieren las resistencias?</h2>La transmisión horizontal de genes a través del intercambio de plásmidos (pequeños círculos de ADN) que contienen genes de resistencia, es uno de los mecanismos por los cuales las bacterias pueden adquirir resistencias.";
  }

  $( "#popup" ).css('display','inherit');
  $( "#popup" ).popup();

  d3.selectAll('svg').on('mouseover',function(){

    d3.selectAll('#plasmido,#pastilleta').classed('animate',true)
  })
  .on('mouseout',function(){

    d3.selectAll('#plasmido,#pastilleta').classed('animate',false)
  })
  .on('click',function(){
    $('#popup .content').text('');
    $('#popup .content').html(txt);
    $( "#popup" ).popup( "open" );
    // d3.selectAll('#plasmido,#pastilleta').classed('animate',false)
  })


});
