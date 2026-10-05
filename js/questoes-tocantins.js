/* questoes-tocantins.js — História e Geografia do Tocantins (Módulo I, 6 questões na prova).
 * Questões INÉDITAS no padrão da prova: 4 alternativas e justificativa de cada erro. */

export const QUESTOES_TOCANTINS = [
  {
    id: 'q401', disciplinaId: 'to', dificuldade: 'facil', tempoAlvo: 170,
    assunto: 'Processo de criação do Estado do Tocantins',
    palavras: ['criação', 'processo histórico', 'estado', 'tocantins', 'constituição'],
    contexto: 'A reivindicação pela separação do norte goiano é antiga e ganhou força ao longo do século XX, com movimentos que defendiam a autonomia da região em razão do isolamento e da distância do centro político do estado.',
    comando: 'A criação do estado do Tocantins ocorreu',
    alternativas: [
      { k: 'A', texto: 'pela Constituição Federal de 1988, com instalação no ano seguinte.', porqueErrada: '' },
      { k: 'B', texto: 'por lei ordinária federal aprovada durante o regime militar, em 1979.', porqueErrada: 'Houve projetos e mobilização nesse período, mas a criação veio com a Constituição de 1988.' },
      { k: 'C', texto: 'por plebiscito estadual realizado em Goiás em 1985.', porqueErrada: 'A criação decorreu de ato constituinte, não de plebiscito estadual.' },
      { k: 'D', texto: 'por decreto presidencial assinado em 1990, junto com a inauguração de Palmas.', porqueErrada: 'Confunde o ato de criação com a instalação do estado e a inauguração da capital.' }
    ],
    correta: 'A',
    justificativa: 'O Tocantins foi criado pelo art. 13 do Ato das Disposições Constitucionais Transitórias da Constituição Federal de 1988, mediante desmembramento da porção norte de Goiás, sendo instalado em 1º de janeiro de 1989.',
    dicaFGV: 'Separe três datas que a banca embaralha: 1988 (criação pela Constituição), 1989 (instalação do estado) e 1990 (inauguração de Palmas como capital definitiva).',
    tags: ['história', 'criação']
  },
  {
    id: 'q402', disciplinaId: 'to', dificuldade: 'media', tempoAlvo: 180,
    assunto: 'Organização política e administrativa do Tocantins',
    palavras: ['organização política', 'administrativa', 'divisão política', 'capital', 'municípios'],
    contexto: 'Antes da construção da capital definitiva, o governo estadual funcionou provisoriamente em outra cidade, enquanto se erguia uma cidade planejada no centro do território.',
    comando: 'A capital provisória e a capital definitiva do Tocantins são, respectivamente,',
    alternativas: [
      { k: 'A', texto: 'Miracema do Tocantins e Palmas.', porqueErrada: '' },
      { k: 'B', texto: 'Araguaína e Palmas.', porqueErrada: 'Araguaína é o principal polo do norte do estado, mas não foi capital provisória.' },
      { k: 'C', texto: 'Porto Nacional e Palmas.', porqueErrada: 'Porto Nacional é município histórico vizinho à capital, sem ter exercido essa função.' },
      { k: 'D', texto: 'Gurupi e Miracema do Tocantins.', porqueErrada: 'Inverte a lógica: Gurupi é polo do sul e Miracema foi a provisória, não a definitiva.' }
    ],
    correta: 'A',
    justificativa: 'Miracema do Tocantins foi a capital provisória a partir da instalação do estado, em 1989, enquanto se construía Palmas, cidade planejada inaugurada em 1990 e que se tornou a capital definitiva.',
    dicaFGV: 'A banca mistura os polos regionais (Araguaína ao norte, Gurupi ao sul) com a capital provisória. Guarde Miracema como resposta a qualquer pergunta sobre o período de transição.',
    tags: ['geografia', 'capital']
  },
  {
    id: 'q403', disciplinaId: 'to', dificuldade: 'media', tempoAlvo: 185,
    assunto: 'Clima, vegetação, relevo e hidrografia',
    palavras: ['clima', 'vegetação', 'relevo', 'hidrografia', 'recursos naturais'],
    contexto: 'Um material didático descreve o território tocantinense como área de transição, com predomínio de um bioma de savana, invernos secos e verões chuvosos bem definidos.',
    comando: 'O bioma predominante e o tipo climático descritos são, respectivamente,',
    alternativas: [
      { k: 'A', texto: 'Cerrado e clima tropical com estação seca definida.', porqueErrada: '' },
      { k: 'B', texto: 'Amazônia e clima equatorial úmido.', porqueErrada: 'Há porções de transição amazônica ao norte, mas o predomínio é do Cerrado, e o clima não é equatorial úmido.' },
      { k: 'C', texto: 'Caatinga e clima semiárido.', porqueErrada: 'A Caatinga e o semiárido caracterizam o Nordeste interior, não o Tocantins.' },
      { k: 'D', texto: 'Mata Atlântica e clima subtropical.', porqueErrada: 'Nenhum dos dois ocorre no estado.' }
    ],
    correta: 'A',
    justificativa: 'O Tocantins é dominado pelo Cerrado, com áreas de transição para a Amazônia no norte e noroeste. O clima é tropical, com duas estações bem marcadas: chuvosa, de outubro a abril, e seca, de maio a setembro.',
    dicaFGV: 'A alternativa B usa uma verdade parcial — a transição amazônica — para generalizar. Transição não é predomínio: leia a palavra que o enunciado pede.',
    tags: ['geografia', 'clima']
  },
  {
    id: 'q404', disciplinaId: 'to', dificuldade: 'media', tempoAlvo: 180,
    assunto: 'Clima, vegetação, relevo e hidrografia',
    palavras: ['hidrografia', 'rios', 'recursos naturais', 'unidades de conservação'],
    contexto: 'No rio Araguaia, entre os estados do Tocantins, Mato Grosso, Goiás e Pará, forma-se uma extensa ilha fluvial que abriga um parque nacional e importante área de preservação.',
    comando: 'A ilha e a unidade de conservação citadas são, respectivamente,',
    alternativas: [
      { k: 'A', texto: 'Ilha do Bananal e Parque Nacional do Araguaia.', porqueErrada: '' },
      { k: 'B', texto: 'Ilha do Bananal e Parque Estadual do Jalapão.', porqueErrada: 'O Jalapão fica no leste do estado, em região de cerrado com dunas e fervedouros, e não na ilha.' },
      { k: 'C', texto: 'Ilha de Marajó e Parque Nacional do Araguaia.', porqueErrada: 'Marajó situa-se na foz do Amazonas, no Pará.' },
      { k: 'D', texto: 'Ilha do Bananal e Área de Proteção Ambiental Serra da Tabatinga.', porqueErrada: 'A APA citada existe em outra região; a unidade instalada na ilha é o Parque Nacional do Araguaia.' }
    ],
    correta: 'A',
    justificativa: 'A Ilha do Bananal, formada pela bifurcação do rio Araguaia, é considerada a maior ilha fluvial do mundo e abriga o Parque Nacional do Araguaia, além de terras indígenas.',
    dicaFGV: 'Em questões de "respectivamente" com dois nomes, confirme os dois: a alternativa B acerta a ilha e erra a unidade, que é o erro mais comum de quem lê rápido.',
    tags: ['geografia', 'unidades de conservação']
  },
  {
    id: 'q405', disciplinaId: 'to', dificuldade: 'media', tempoAlvo: 185,
    assunto: 'Povos indígenas e comunidades quilombolas',
    palavras: ['povos indígenas', 'quilombolas', 'patrimônio', 'cultural', 'população'],
    contexto: 'O território tocantinense é habitado por povos indígenas de diferentes troncos linguísticos e por comunidades quilombolas reconhecidas, cuja presença é anterior à criação do estado.',
    comando: 'Sobre esses povos e comunidades, é correto afirmar que',
    alternativas: [
      { k: 'A', texto: 'o estado abriga povos como os Karajá, Javaé, Xerente, Apinajé e Krahô, além de comunidades quilombolas reconhecidas, com direitos territoriais assegurados constitucionalmente.', porqueErrada: '' },
      { k: 'B', texto: 'os povos indígenas do estado pertencem todos a um único povo, os Karajá, concentrados na região sul.', porqueErrada: 'Há diversos povos, com línguas e territórios distintos, distribuídos por várias regiões.' },
      { k: 'C', texto: 'não há comunidades quilombolas reconhecidas no território tocantinense.', porqueErrada: 'O estado possui comunidades quilombolas reconhecidas e tituladas.' },
      { k: 'D', texto: 'o reconhecimento territorial dessas comunidades depende exclusivamente de lei estadual específica para cada caso.', porqueErrada: 'Os direitos territoriais têm fundamento constitucional e procedimento administrativo federal, não lei estadual caso a caso.' }
    ],
    correta: 'A',
    justificativa: 'O Tocantins abriga povos indígenas como Karajá e Javaé, na região da Ilha do Bananal, Xerente, próximos a Tocantínia, Apinajé, no norte, e Krahô, no nordeste do estado, além de comunidades quilombolas reconhecidas, com direitos assegurados pela Constituição Federal.',
    dicaFGV: 'Alternativas que uniformizam a diversidade ("todos pertencem a um único povo") ou negam a existência de um grupo costumam ser distratores. Diversidade é a regra nesse tema.',
    tags: ['povos indígenas', 'quilombolas']
  },
  {
    id: 'q406', disciplinaId: 'to', dificuldade: 'media', tempoAlvo: 185,
    assunto: 'Matriz produtiva e matriz energética',
    palavras: ['matriz produtiva', 'matriz energética', 'economia', 'desenvolvimento regional'],
    contexto: 'A economia tocantinense apoia-se fortemente no setor primário, com expansão recente de lavouras de grãos no sul e no sudoeste, além de pecuária extensiva. Na geração de energia, destacam-se grandes usinas instaladas em seus principais rios.',
    comando: 'A base da matriz produtiva e a principal fonte da matriz energética do estado são, respectivamente,',
    alternativas: [
      { k: 'A', texto: 'agropecuária, com destaque para soja e pecuária de corte, e geração hidrelétrica.', porqueErrada: '' },
      { k: 'B', texto: 'indústria de transformação de alta tecnologia e geração termelétrica a carvão.', porqueErrada: 'O estado não tem parque industrial de alta tecnologia nem base termelétrica a carvão.' },
      { k: 'C', texto: 'extração mineral de ferro e geração nuclear.', porqueErrada: 'Não há geração nuclear no estado, e a mineração não é a base da economia.' },
      { k: 'D', texto: 'turismo e geração eólica offshore.', porqueErrada: 'O turismo é relevante, sobretudo no Jalapão, mas não é a base produtiva; e não há geração eólica marítima em estado sem litoral.' }
    ],
    correta: 'A',
    justificativa: 'A economia do Tocantins tem base agropecuária, com expansão da soja, milho e algodão e forte pecuária de corte, além de produção de arroz irrigado. A matriz energética é predominantemente hidrelétrica, com usinas instaladas no rio Tocantins, como Luís Eduardo Magalhães (Lajeado) e Peixe Angical.',
    dicaFGV: 'A alternativa D é eliminada por um detalhe geográfico simples: o Tocantins não tem litoral, logo não há eólica offshore. Detalhes assim resolvem questões regionais sem decorar estatística.',
    tags: ['economia', 'energia']
  },
  {
    id: 'q407', disciplinaId: 'to', dificuldade: 'facil', tempoAlvo: 165,
    assunto: 'Organização política e administrativa do Tocantins',
    palavras: ['divisão política', 'regiões administrativas', 'municípios', 'organização'],
    contexto: 'Um levantamento apresenta os municípios mais populosos do estado, usados como referência para a regionalização de serviços públicos, inclusive na saúde.',
    comando: 'Entre os principais centros urbanos do Tocantins, além da capital, destacam-se',
    alternativas: [
      { k: 'A', texto: 'Araguaína, Gurupi, Porto Nacional e Paraíso do Tocantins.', porqueErrada: '' },
      { k: 'B', texto: 'Imperatriz, Marabá e Barreiras.', porqueErrada: 'Imperatriz é do Maranhão, Marabá do Pará e Barreiras da Bahia.' },
      { k: 'C', texto: 'Anápolis, Rio Verde e Catalão.', porqueErrada: 'São municípios goianos.' },
      { k: 'D', texto: 'Balsas, Bacabal e Caxias.', porqueErrada: 'São municípios maranhenses.' }
    ],
    correta: 'A',
    justificativa: 'Além de Palmas, destacam-se Araguaína, principal polo do norte, Gurupi, polo do sul, Porto Nacional e Paraíso do Tocantins — cidades que também sediam a aplicação da prova deste concurso.',
    dicaFGV: 'Os distratores reúnem cidades de estados vizinhos, aproveitando a proximidade geográfica. Ao estudar o estado, fixe a lista dos maiores municípios: ela aparece em várias questões.',
    tags: ['geografia', 'municípios']
  },
  {
    id: 'q408', disciplinaId: 'to', dificuldade: 'media', tempoAlvo: 180,
    assunto: 'Patrimônio histórico e cultural',
    palavras: ['patrimônio', 'histórico', 'cultural', 'turismo', 'unidades de conservação'],
    contexto: 'Uma região do leste tocantinense é conhecida por dunas de areia, cachoeiras, serras e pelos chamados fervedouros, nascentes de água que impedem o afundamento do corpo, tendo se tornado destino turístico nacional.',
    comando: 'A região descrita é',
    alternativas: [
      { k: 'A', texto: 'o Jalapão.', porqueErrada: '' },
      { k: 'B', texto: 'a Ilha do Bananal.', porqueErrada: 'É área de planície fluvial e alagados no oeste, com outras características.' },
      { k: 'C', texto: 'a Chapada dos Veadeiros.', porqueErrada: 'Situa-se em Goiás, não no Tocantins.' },
      { k: 'D', texto: 'a Serra da Capivara.', porqueErrada: 'Fica no Piauí e é conhecida pelos sítios arqueológicos.' }
    ],
    correta: 'A',
    justificativa: 'O Jalapão, no leste do estado, reúne dunas, serras, cachoeiras e fervedouros, além do capim dourado, matéria-prima do artesanato reconhecido como patrimônio cultural da região.',
    dicaFGV: 'Chapada dos Veadeiros e Serra da Capivara aparecem porque são atrativos naturais famosos de estados próximos. Em geografia regional, confira sempre em que unidade da federação fica o que a alternativa cita.',
    tags: ['patrimônio', 'turismo']
  },
  {
    id: 'q409', disciplinaId: 'to', dificuldade: 'media', tempoAlvo: 185,
    assunto: 'Dinâmica populacional e formação territorial',
    palavras: ['dinâmica populacional', 'migração', 'estrutura etária', 'aspectos demográficos', 'formação territorial'],
    contexto: 'Estudos sobre a ocupação do território tocantinense apontam que a construção de rodovias federais e, depois, a instalação da nova capital atraíram grande contingente populacional de outras regiões do país.',
    comando: 'Sobre a dinâmica populacional do estado, é correto afirmar que',
    alternativas: [
      { k: 'A', texto: 'a migração teve papel decisivo na formação da população, com fluxos vindos sobretudo do Nordeste, do Norte e do Centro-Oeste, e forte urbanização após a criação do estado.', porqueErrada: '' },
      { k: 'B', texto: 'a população manteve-se predominantemente rural após a criação do estado, sem urbanização relevante.', porqueErrada: 'Houve intensa urbanização, especialmente com o crescimento de Palmas e dos polos regionais.' },
      { k: 'C', texto: 'o crescimento populacional decorreu exclusivamente do aumento vegetativo, sem contribuição migratória.', porqueErrada: 'A migração foi fator central, sobretudo nas décadas seguintes à criação do estado.' },
      { k: 'D', texto: 'a construção da rodovia Belém-Brasília não influenciou a ocupação do território.', porqueErrada: 'A rodovia foi um dos principais vetores de ocupação do norte goiano, depois Tocantins.' }
    ],
    correta: 'A',
    justificativa: 'A ocupação do território foi impulsionada pela abertura da rodovia Belém-Brasília, a partir da década de 1960, e depois pela criação do estado e pela construção de Palmas, que atraiu migrantes de várias regiões, acelerando a urbanização.',
    dicaFGV: 'Palavras absolutas — "exclusivamente", "sem contribuição", "não influenciou" — marcam três das quatro alternativas aqui. Em dinâmica populacional, os fatores costumam se somar, não se excluir.',
    tags: ['demografia', 'migração']
  },
  {
    id: 'q410', disciplinaId: 'to', dificuldade: 'facil', tempoAlvo: 165,
    assunto: 'Símbolos e identidade do Estado',
    palavras: ['símbolos', 'estado', 'patrimônio', 'identidade'],
    contexto: 'Em cerimônia oficial, a bandeira do estado é hasteada ao lado da bandeira nacional, e o servidor precisa identificar corretamente os símbolos estaduais.',
    comando: 'São símbolos oficiais do Estado do Tocantins',
    alternativas: [
      { k: 'A', texto: 'a bandeira, o brasão e o hino do estado.', porqueErrada: '' },
      { k: 'B', texto: 'apenas a bandeira e o hino, pois o brasão é símbolo municipal.', porqueErrada: 'O brasão de armas é símbolo estadual, ao lado da bandeira e do hino.' },
      { k: 'C', texto: 'a bandeira, o hino e o selo de arrecadação estadual.', porqueErrada: 'O selo de arrecadação é instrumento tributário, não símbolo oficial.' },
      { k: 'D', texto: 'somente a bandeira, por ser o único símbolo previsto constitucionalmente.', porqueErrada: 'A Constituição estadual prevê mais de um símbolo oficial.' }
    ],
    correta: 'A',
    justificativa: 'São símbolos oficiais do Estado do Tocantins a bandeira, o brasão de armas e o hino, previstos na Constituição estadual, ao lado dos símbolos nacionais nas cerimônias oficiais.',
    dicaFGV: 'Itens fáceis como este existem para separar quem leu o conteúdo programático completo de quem estudou só os assuntos "importantes". Seis questões de Tocantins valem seis pontos do Módulo I.',
    tags: ['símbolos'],
    fonteNecessaria: true
  }
];
