
var lang = getParameterByName('lang');

var textos = {
  "genoma":"<h2>Secuenciación genoma completo</h2>Determinación del orden de los nucleótidos en la totalidad del ADN bacteriano. Esto permite determinar la especie causante de la infección así como identificar la presencia de genes de resistencia y virulencia.",
  "massas":"<h2>Espectrometría de masas:</h2>Permite identificar a las bacterias según la distribución y masa de sus moléculas. En algunos casos también se detectan específicamente factores de resistencia y factores de virulencia.",
  "moleculares":"<h2>Técnicas moleculares</h2>Amplificación de material genético de la bacteria por la técnica de PCR (de la cual derivan la PCR en tiempo real, la técnica LAMP, etc.)",
  "antigenos":"<h2>Detección de antígenos y serología</h2>Detección de antígenos (fragmentos de proteínas) bacterianos o de anticuerpos (contra la bacteria) producidos por el paciente como consecuencia de la infección.",
  "cultivo":"<h2>Cultivo</h2>Diagnóstico basado en el aislamiento y multiplicación de bacterias en el laboratorio. Según la composición del medio de cultivo, se puede seleccionar el crecimiento de bacterias con mecanismos de resistencia específicos.",
  "microscopia":"<h2>Microscopía</h2>Diagnóstico basado en la forma de las bacterias.",

  "rapidez":"<h2>Rapidez</h2>Tiempo requerido para la obtención del diagnóstico desde que se recibe la muestra.",
  "precision":"<h2>Precisión</h2>Capacidad de detección de la bacteria causante de la enfermedad (sensibilidad) y de obtención del diagnóstico correcto (especificidad). ",
  "viabilidad":"<h2>Viabilidad</h2>Necesidad de personal entrenado, equipo y materiales especiales para desarrollar la técnica, no siempre disponibles en países de renta media y baja",
  "accesibilidad":"<h2>Accesibilidad económica</h2>Coste económico de la técnica.",
  "deteccion":"<h2>Detección de resistencias</h2>Capacidad para identificar genes de resistencia a antibióticos en las bacterias causantes de la infección."
};
var textos_en={
  "genoma":"<h2>Whole genome sequentiation:</h2>Determination of the nucleotide sequence of the entire bacterial DNA. This allows identification of the species causing the infection as well as detecting the presence of resistance or virulence genes.",
  "massas":"<h2>Mass sprectrometry:</h2>Allows the identification of bacteria according to the distribution and mass of their molecules. In some cases it also detects factors contributing to resistance or virulence.",
  "moleculares":"<h2>Molecular techniques:</h2>Amplification of the bacteria’s genetic material by the PCR technique (and related techniques such as real-time PCR, LAMP, etc.)",
  "antigenos":"<h2>Antigen detection and serology.:</h2>Detection of bacterial antigens (protein antigens) or antibodies (against the bacteria) produced by the patient as a consequence of the infection.",
  "cultivo":"<h2>Bacterial culture:</h2>Diagnosis based on the isolation and growth of bacteria in the laboratory. Depending on the culture medium, it is possible to select the growth of bacteria with specific resistance mechanisms.",
  "microscopia":"<h2>Microscopy:</h2>Diagnosis based on morphology of the bacteria",

  "rapidez":"<h2>Speed</h2>The time it takes to have a diagnosis from the moment the sample is received.",
  "precision":"<h2>Precision</h2>Capacity to detect the bacteria causing the disease (sensitivity) and to give a correct diagnosis (specificity).",
  "viabilidad":"<h2>Viability</h2>The need of trained personnel and special equipment and materials to implement the technique often hinders its implementation in low and middle-income countries.",
  "accesibilidad":"<h2>Affordability</h2>Economic cost of the technique.",
  "deteccion":"<h2>Detection of resistance mechanisms</h2>Capacity to identify antibiotic-resistance genes in the bacteria causing the infection."
};

d3.xml('ICONOS_ok.svg' , "image/svg+xml", function(error, xml) {
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

  d3.select('#infos').on('click',function(){
    d3.select(this).style('display','none')
  })

  d3.selectAll('.hover')
  .on('click', function(){

    d3.select(this)
    .classed("clicked", function (d, i) {
      return !d3.select(this).classed("clicked");
    });



    // d3.selectAll('.tab').style("opacity",0)
    // if(d3.select(this).classed("genoma")){
    //   d3.selectAll('.tab.genoma').style("opacity",1)
    //   txt = ["<h2>Secuenciación genoma completo</h2>Determinación del orden de los nucleótidos en la totalidad del ADN bacteriano. Esto permite determinar la especie causante de la infección así como identificar la presencia de genes de resistencia y virulencia."];
    // }
    // if(d3.select(this).classed("massas")){
    //   d3.selectAll('.tab.massas').style("opacity",1)
    //   txt = ["<h2>Espectrofotometría de masas:</h2>Permite identificar a las bacterias según la distribución y masa de sus moléculas. En algunos casos también se detectan específicamente factores de resistencia y factores de virulencia."];
    // }
    // if(d3.select(this).classed("moleculares")){
    //   d3.selectAll('.tab.moleculares').style("opacity",1)
    //   txt = ["<h2>Técnicas moleculares</h2>Amplificación de material genético de la bacteria por la técnica de PCR (de la cual derivan la PCR en tiempo real, la técnica LAMP, etc.)"];
    // }
    // if(d3.select(this).classed("antigenos")){
    //   d3.selectAll('.tab.antigenos').style("opacity",1)
    //   txt = ["<h2>Detección de antígenos y serología</h2>Detección de antígenos (fragmentos de proteínas) bacterianos o de anticuerpos (contra la bacteria) producidos por el paciente como consecuencia de la infección."];
    // }
    // if(d3.select(this).classed("cultivo")){
    //   d3.selectAll('.tab.cultivo').style("opacity",1)
    //   txt = ["<h2>Cultivo</h2>Diagnóstico basado en el aislamiento y multiplicación de bacterias en el laboratorio. Según la composición del medio de cultivo, se puede seleccionar el crecimiento de bacterias con mecanismos de resistencia específicos."];
    // }
    // if(d3.select(this).classed("microscopia")){
    //   d3.selectAll('.tab.microscopia').style("opacity",1)
    //   txt = ["<h2>Microscopía</h2>Diagnóstico basado en la forma de las bacterias."];
    // }

    var e = d3.select(this).attr("class").replace('hover','').replace('clicked','').trim();
    console.log(e)
    console.log(txt[e])
    console.log(txt)
    if (typeof txt[e] !== 'undefined') {
      $('#popup .content').text('');
      $('#popup .content').html(txt[e]);
      $( "#popup" ).popup( "open" );
    }
    // d3.select('#infos').style('display','block')
    // d3.select('svg #infos .txt').selectAll('text').data(txt).enter().append("text")
  	// .attr('x', 25)
  	// .attr('y', function(d, i){console.log(d, this); return 30 + i * 90; })
    // .attr('dy',"1em")
  	// .text(function(d){ return d; })
  	// .call(wrap, 580);
    //
    // console.log(d3.select(this).classed("clicked"))
    // if(d3.select(this).classed("clicked")){
    //   d3.selectAll('.animate').classed('animate', false);
    // }else{
    //   d3.select('#infos .txt text').remove()
    // }

  })
  .on('mouseover', function(){
    d3.selectAll('.animate').classed('animate', false);
    if(d3.select(this).classed("genoma")){
      d3.selectAll('#line_1,#line_2,#line_3,#line_4').classed('animate',true)
    }
    if(d3.select(this).classed("massas")){
      d3.selectAll('#cuadre_1,#cuadre_2').classed('animate',true)
    }
    if(d3.select(this).classed("moleculares")){
      d3.selectAll('#molecu,#ma').classed('animate',true)
    }
    if(d3.select(this).classed("antigenos")){
      d3.selectAll('#estrella_1,#estrella_2').classed('animate',true)
    }
    if(d3.select(this).classed("cultivo")){
      d3.selectAll('#cell_1,#cell_2,#cell_3,#plaqueta_pal').classed('animate',true)
    }
    if(d3.select(this).classed("microscopia")){
      d3.selectAll('#roda,#m_plaqueta').classed('animate',true)
    }
  })
  .on('mouseout', function(){

    if(!d3.select(this).classed("clicked")){
      d3.selectAll('.animate').classed('animate', false);
    }
  })
  // .on('mouseleave', function(){
  //   console.log('mouseleave');
  //   d3.selectAll('animate').classed('.animate', false);
  // })
});

function wrap(text, width) {
  console.log(width)
  console.log(text)
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        console.log(text)
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      console.log(tspan.node().getComputedTextLength(),width,tspan.node().getComputedTextLength() > width)
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}
