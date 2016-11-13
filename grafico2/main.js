

var lang = getParameterByName('lang');


var textos = {
  "diana": "<h2>Identificar nuevas dianas bacterianas</h2>A pesar del gran número de posibles dianas bacterianas, la mayoría de antibióticos sólo inhiben cuatro vías: el ribosoma (la síntesis de proteínas), la síntesis de la pared celular, la membrana celular y el metabolismo del ADN.",
  "bacteriofagos":"<h2>Bacteriófagos:</h2>Son virus que sólo infectan a las bacterias, causando la ruptura de las mismas (fagos “líticos”). Son altamente específicos y seguros pero su eficacia clínica queda por demostrar.",
  "medio_ambiente":"<h2>Bacterias en el medio ambiente:</h2>Las bacterias que crecen en el suelo o en ambientes hostiles como el hielo o el fondo del mar no son fácilmente cultivables en el laboratorio. La metagenómica permite secuenciar el ADN completo de estas bacterias y descubrir nuevos genes que potencialmente producen compuestos con actividad antibiótica.",
  "microbiota":"<h2>Bacterias de la microbiota:</h2>La microbiota es la comunidad de microorganismos (virus, bacterias y hongos) que vive en nuestro cuerpo de forma natural. Algunas de estas bacterias comensales producen moléculas que impiden la colonización por bacterias patógenas.",
  "marinos":"<h2>Organismos marinos y terrestres:</h2>Algunas plantas, algas o esponjas son ejemplos de organismos que producen una gran variedad de productos químicos para defenderse, incluyendo compuestos con actividad antibacteriana.",

  "peptidos":"<h2>Péptidos naturales y sintéticos:</h2>A partir de bacterias, bacteriófagos y otros organismos, se han aislado varios péptidos (pequeñas cadenas de aminoácidos) naturales con actividad antimicrobiana. Se pueden también modificar o sintetizar en el laboratorio con el fin de encontrar nuevos antibacterianos.",
  "antivirulencia":"<h2>Moléculas antivirulencia:</h2>En lugar de matar a la bacteria, otra estrategia complementaria es la de “desarmarla” para hacerla menos agresiva.  La virulencia bacteriana se puede disminuir por ejemplo inhibiendo la producción de toxinas o bloqueando la adhesión a la célula huésped.  ",
  "antibioticos":"<h2>Nuevas generaciones o combinaciones de antibióticos conocidos:</h2>Algunos antibióticos se pueden modificar químicamente para eludir resistencias existentes. También se pueden combinar con otros antibióticos que actúan a través de otros mecanismos.",
  "intestinal":"<h2>Transplantes de microbiota:</h2>Consisten en reemplazar la microbiota intestinal de un paciente enfermo por la de una persona sana. Se realiza a través de la administración de extractos de materia fecal."
};
var textos_en = {
  "diana": "<h2>Identify new bacterial targets</h2>Despite the great number of potential bacterial targets, most antibiotics inhibit only a few proteins along four pathways: the ribosome (protein synthesis), cell wall synthesis, the cell membrane, and DNA metabolism.",
  "bacteriofagos":"<h2>Bacteriophages:</h2>These viruses only infect bacterias, causing their destruction. They are highly specific and safe, but their efficacy in the clinics remains to be determined.",
  "medio_ambiente":"<h2>Free-living bacteria:</h2>Bacteria that grow in the soil or in hostile environments like the ice or the deep sea are not easy to grow in the laboratory. Metagenomics allows the sequenciation of the entire DNA of these bacteria and the discovery of genes coding for molecules with potential antibiotic activity.",
  "microbiota":"<h2>Microbiota bacteria:</h2>The microbiota is the community of microorganisms (viruses, bacteria, fungi) that naturally lives in our body. Some of these commensal bacteria produce molecules that inhibit the colonization by pathogenic bacteria.",
  "marinos":"<h2>Marine and terrestrial organisms:</h2>Certain plants, algae and sponges are some examples of organisms that produce a great variety of chemical products to defend themselves, including compounds with antibacterial activity.",

  "peptidos":"<h2>Natural and synthetic peptides:</h2>Natural peptides (short aminoacidic chains) with antimicrobial activity have been isolated from bacteria, bacteriophages and other organisms. Peptides can also be modified or synthesized in the laboratory in order to produce new antibacterial agents.",
  "antivirulencia":"<h2>Natural and synthetic peptides:</h2>Natural peptides (short aminoacidic chains) with antimicrobial activity have been isolated from bacteria, bacteriophages and other organisms. Peptides can also be modified or synthesized in the laboratory in order to produce new antibacterial agents.",
  "antibioticos":"<h2>New generations or combinations of existing antibiotics:</h2>Some antibiotics can be chemically modified to evade existing resistance mechanisms. They can also be combined with other antibiotics that act through different mechanisms.",
  "intestinal":"<h2>Microbiota transplants:</h2>Fecal microbiota transplantation consists in replacing the gut microbiota of a patient with that of a healthy donor, through the administration of fecal matter."
};



d3.xml('ARMAS_ok.svg' , "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);

  if(lang=='en'){
    d3.select('svg g#TEXTOS_EN').style('display','block');
    d3.select('svg g#TEXTOS').style('display','none');
    d3.select('#dardo_txt_en').style('display','inherit');
    d3.select('#dardo_txt').style('display','none');
    txt = textos_en;
  }else{
    txt = textos;
    d3.select('svg g#TEXTOS_EN').style('display','none');
    d3.select('svg g#TEXTOS').style('display','block');
    d3.select('#dardo_txt_en').style('display','none');
    d3.select('#dardo_txt').style('display','inherit');
  }
  $( "#popup" ).css('display','inherit');
  $( "#popup" ).popup();

  d3.selectAll('.hover')
  .on('click', function(){
    var e = d3.select(this).attr("class").replace('hover','').trim();
    if (typeof txt[e] !== 'undefined') {
      $('#popup .content').text('');
      $('#popup .content').html(txt[e]);
      $( "#popup" ).popup( "open" );
    }
  })
  .on('mouseover', function(){
    if(d3.select(this).classed("diana")){
      d3.selectAll('#dardo,#dardo_shadow').classed('animate',true)
    }
    if(d3.select(this).classed("bacteriofagos")){
      d3.selectAll('#bacterif').classed('animate',true)
    }
    if(d3.select(this).classed("marinos")){
      d3.selectAll('#peix').classed('animate',true)
    }
  })
  .on('mouseout', function(){
      d3.selectAll('.animate').classed('animate', false);
  })

});
