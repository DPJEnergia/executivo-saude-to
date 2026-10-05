/* questoes-modulo1.js — complemento do Módulo I para o nível médio:
 * Informática Básica, Língua Portuguesa e Matemática e Raciocínio Lógico,
 * cobrindo os itens do Anexo I ainda não contemplados no banco.
 *
 * Questões INÉDITAS, 4 alternativas, no padrão da prova. */

export const QUESTOES_MODULO1 = [

  /* ---------------- Informática Básica ---------------- */

  {
    id: 'q501', disciplinaId: 'info', dificuldade: 'facil', tempoAlvo: 180,
    assunto: 'Sistemas operacionais Windows',
    palavras: ['windows', 'sistemas operacionais', 'arquivos', 'pastas', 'área de trabalho'],
    contexto: 'No Windows, um servidor precisa recuperar um arquivo que excluiu por engano há poucos minutos, usando a tecla Delete, a partir de uma pasta no disco local.',
    comando: 'A forma correta de recuperar o arquivo é',
    alternativas: [
      { k: 'A', texto: 'abrir a Lixeira, localizar o arquivo e usar a opção Restaurar, que o devolve à pasta de origem.', porqueErrada: '' },
      { k: 'B', texto: 'reinstalar o sistema operacional, única forma de recuperar arquivos apagados.', porqueErrada: 'Medida desproporcional e inútil: a reinstalação não recupera arquivos excluídos.' },
      { k: 'C', texto: 'buscar o arquivo no Painel de Controle, em Programas e Recursos.', porqueErrada: 'Esse item gerencia programas instalados, não arquivos do usuário.' },
      { k: 'D', texto: 'usar Ctrl + Z na área de trabalho, o que restaura qualquer arquivo excluído há qualquer tempo.', porqueErrada: 'O desfazer pode reverter a última ação no Explorador, mas não "qualquer arquivo a qualquer tempo": o caminho seguro é a Lixeira.' }
    ],
    correta: 'A',
    justificativa: 'Arquivos excluídos de discos locais com a tecla Delete vão para a Lixeira, de onde podem ser restaurados ao local de origem. A exclusão definitiva ocorre com Shift + Delete, ao esvaziar a Lixeira ou em unidades de rede e removíveis.',
    dicaFGV: 'A alternativa D cita um atalho verdadeiro com um alcance exagerado ("qualquer arquivo, a qualquer tempo"). Em informática, a banca costuma errar no alcance, não na existência do recurso.',
    tags: ['windows']
  },
  {
    id: 'q502', disciplinaId: 'info', dificuldade: 'media', tempoAlvo: 190,
    assunto: 'Editor de textos e planilhas',
    palavras: ['excel', 'planilhas', 'microsoft 365', 'libreoffice', 'calc'],
    contexto: 'Em uma planilha de controle de atendimentos, a célula B2 contém o número de atendimentos da manhã e B3 o da tarde. O servidor precisa somar os dois valores e, ao copiar a fórmula para a coluna C, manter fixa a referência à célula B2.',
    comando: 'A fórmula que atende a essa necessidade é',
    alternativas: [
      { k: 'A', texto: '=$B$2+B3', porqueErrada: '' },
      { k: 'B', texto: '=B2+B3', porqueErrada: 'Referência relativa: ao copiar para outra coluna, ambas as referências mudam.' },
      { k: 'C', texto: '=B$2+B3', porqueErrada: 'Fixa apenas a linha; ao copiar para a coluna C, a referência vira C2.' },
      { k: 'D', texto: '="B2"+B3', porqueErrada: 'Texto entre aspas não é referência de célula e gera erro de valor.' }
    ],
    correta: 'A',
    justificativa: 'O cifrão fixa a parte da referência que o precede. $B$2 é referência absoluta: nem a coluna nem a linha mudam ao copiar. B$2 fixa só a linha e $B2 fixa só a coluna.',
    dicaFGV: 'Decore a leitura do cifrão: ele trava o que vem logo depois. Com isso, C (só linha travada) e A (tudo travado) se distinguem em segundos.',
    tags: ['planilhas']
  },
  {
    id: 'q503', disciplinaId: 'info', dificuldade: 'media', tempoAlvo: 185,
    assunto: 'Correio eletrônico e organização de mensagens',
    palavras: ['correio eletrônico', 'outlook', 'webmail', 'mensagens', 'anexos'],
    contexto: 'Um servidor precisa enviar um comunicado a 40 pessoas de unidades diferentes, sem que os destinatários vejam os endereços uns dos outros.',
    comando: 'O campo que deve ser utilizado é',
    alternativas: [
      { k: 'A', texto: 'Cco (cópia oculta).', porqueErrada: '' },
      { k: 'B', texto: 'Cc (com cópia).', porqueErrada: 'No campo Cc todos os endereços ficam visíveis a todos os destinatários.' },
      { k: 'C', texto: 'Para, separando os endereços por ponto e vírgula.', porqueErrada: 'Também expõe todos os endereços.' },
      { k: 'D', texto: 'Responder a todos, após enviar a mensagem para si mesmo.', porqueErrada: 'Responder a todos amplia a exposição dos endereços, em vez de protegê-los.' }
    ],
    correta: 'A',
    justificativa: 'O campo Cco (cópia carbono oculta) envia a mensagem sem revelar os endereços aos demais destinatários. É a prática recomendada em comunicados a listas, inclusive por proteção de dados pessoais.',
    dicaFGV: 'Questão de e-mail quase sempre gira em torno de Para, Cc e Cco. Guarde: Cco protege a lista; Cc e Para expõem.',
    tags: ['e-mail']
  },
  {
    id: 'q504', disciplinaId: 'info', dificuldade: 'media', tempoAlvo: 195,
    assunto: 'Inteligência artificial e uso responsável',
    palavras: ['inteligência artificial', 'IA generativa', 'uso responsável', 'limitações'],
    contexto: 'Um servidor utiliza uma ferramenta de inteligência artificial generativa para redigir um relatório e recebe um texto com aparência técnica, contendo números e a citação de uma norma que ele não conhece.',
    comando: 'A conduta adequada é',
    alternativas: [
      { k: 'A', texto: 'conferir os dados e a norma citada em fontes oficiais antes de usar o texto, pois ferramentas generativas podem produzir informações incorretas com aparência plausível.', porqueErrada: '' },
      { k: 'B', texto: 'usar o texto como está, já que a ferramenta foi treinada com grande volume de dados confiáveis.', porqueErrada: 'Volume de treinamento não garante exatidão; o modelo pode gerar citações inexistentes.' },
      { k: 'C', texto: 'inserir dados pessoais de pacientes na ferramenta para obter um relatório mais preciso.', porqueErrada: 'Dados de saúde são pessoais sensíveis e não devem ser inseridos em ferramentas externas sem base legal e salvaguardas.' },
      { k: 'D', texto: 'descartar totalmente o uso dessas ferramentas, por serem proibidas no serviço público.', porqueErrada: 'Não há proibição geral; o que se exige é uso responsável, com verificação e proteção de dados.' }
    ],
    correta: 'A',
    justificativa: 'Ferramentas de IA generativa produzem texto por probabilidade linguística e podem gerar informações falsas com aparência convincente, inclusive normas e números inexistentes. O uso responsável exige verificação em fontes oficiais, revisão humana e proteção de dados pessoais.',
    dicaFGV: 'Nos itens de IA, a banca testa dois extremos: confiança cega (B) e proibição total (D). A resposta certa é o uso com verificação — e nunca inserindo dado sensível.',
    tags: ['IA', 'uso responsável']
  },
  {
    id: 'q505', disciplinaId: 'info', dificuldade: 'facil', tempoAlvo: 170,
    assunto: 'Teclas de atalho e produtividade',
    palavras: ['teclas de atalho', 'produtividade', 'acessibilidade', 'documentos'],
    contexto: 'Ao digitar um documento no editor de textos, o servidor quer copiar um trecho selecionado e colá-lo em outro parágrafo, usando apenas o teclado.',
    comando: 'Os atalhos utilizados para copiar e colar são, respectivamente,',
    alternativas: [
      { k: 'A', texto: 'Ctrl + C e Ctrl + V.', porqueErrada: '' },
      { k: 'B', texto: 'Ctrl + X e Ctrl + V.', porqueErrada: 'Ctrl + X recorta, removendo o trecho da origem, em vez de copiar.' },
      { k: 'C', texto: 'Ctrl + P e Ctrl + B.', porqueErrada: 'Ctrl + P abre a impressão e Ctrl + B aplica negrito.' },
      { k: 'D', texto: 'Ctrl + Z e Ctrl + Y.', porqueErrada: 'São desfazer e refazer.' }
    ],
    correta: 'A',
    justificativa: 'Ctrl + C copia a seleção para a área de transferência e Ctrl + V cola o conteúdo. Ctrl + X recorta, Ctrl + Z desfaz e Ctrl + Y refaz.',
    dicaFGV: 'Atalhos são pontos rápidos na prova. Vale decorar o bloco C/X/V (copiar, recortar, colar) e Z/Y (desfazer, refazer) para não perder tempo.',
    tags: ['atalhos']
  },
  {
    id: 'q506', disciplinaId: 'info', dificuldade: 'media', tempoAlvo: 190,
    assunto: 'Sistemas de informação em saúde e prontuário eletrônico',
    palavras: ['prontuário eletrônico', 'sistemas de informação', 'proteção de dados', 'informatização'],
    contexto: 'Ao final do atendimento, o profissional precisa se ausentar rapidamente do consultório, deixando o computador com o prontuário eletrônico aberto.',
    comando: 'A conduta correta é',
    alternativas: [
      { k: 'A', texto: 'bloquear a sessão do sistema e da estação de trabalho antes de sair, impedindo o acesso de terceiros ao prontuário.', porqueErrada: '' },
      { k: 'B', texto: 'deixar o sistema aberto, desde que a porta do consultório fique fechada.', porqueErrada: 'Porta fechada não é controle de acesso ao sistema; qualquer pessoa que entre acessa os dados com o login do profissional.' },
      { k: 'C', texto: 'pedir que outro profissional utilize o mesmo login enquanto estiver ausente.', porqueErrada: 'O compartilhamento de credenciais é vedado: o registro é pessoal e intransferível.' },
      { k: 'D', texto: 'desligar o monitor, o que encerra a sessão do usuário no sistema.', porqueErrada: 'Desligar o monitor não encerra sessão alguma; apenas apaga a imagem.' }
    ],
    correta: 'A',
    justificativa: 'O prontuário eletrônico contém dados pessoais sensíveis. O acesso é individual, identificado e rastreável, e a sessão deve ser bloqueada sempre que o profissional se afastar da estação, sendo vedado o compartilhamento de credenciais.',
    dicaFGV: 'A alternativa D é a mais tentadora para quem confunde interface com sessão. Desligar tela, fechar tampa ou minimizar janela não encerram autenticação.',
    tags: ['prontuário', 'segurança']
  },

  /* ---------------- Língua Portuguesa ---------------- */

  {
    id: 'q507', disciplinaId: 'port', dificuldade: 'media', tempoAlvo: 180,
    assunto: 'Classes de palavras',
    palavras: ['classes de palavras', 'flexões', 'substantivo', 'adjetivo', 'advérbio'],
    contexto: 'Considere o período: "A equipe trabalhou arduamente durante o plantão noturno, apesar do cansaço evidente."',
    comando: 'As palavras "arduamente", "noturno" e "apesar de" pertencem, respectivamente, às classes',
    alternativas: [
      { k: 'A', texto: 'advérbio, adjetivo e locução prepositiva.', porqueErrada: '' },
      { k: 'B', texto: 'adjetivo, advérbio e conjunção.', porqueErrada: 'Inverte as duas primeiras e classifica mal a locução: advérbio modifica o verbo, adjetivo caracteriza o substantivo.' },
      { k: 'C', texto: 'advérbio, substantivo e preposição simples.', porqueErrada: '"Noturno" caracteriza "plantão", logo é adjetivo, e "apesar de" é locução, não preposição simples.' },
      { k: 'D', texto: 'conjunção, adjetivo e advérbio.', porqueErrada: '"Arduamente" modifica o verbo trabalhar, sendo advérbio de modo.' }
    ],
    correta: 'A',
    justificativa: '"Arduamente" modifica o verbo "trabalhou", sendo advérbio de modo; "noturno" caracteriza o substantivo "plantão", sendo adjetivo; "apesar de" é locução prepositiva, que introduz ideia concessiva.',
    dicaFGV: 'Identifique primeiro o que cada palavra modifica: se modifica verbo, é advérbio; se caracteriza substantivo, é adjetivo. Esse teste resolve a maior parte das questões de classes de palavras.',
    tags: ['morfologia']
  },
  {
    id: 'q508', disciplinaId: 'port', dificuldade: 'dificil', tempoAlvo: 190,
    assunto: 'Colocação pronominal',
    palavras: ['colocação pronominal', 'próclise', 'ênclise', 'pronomes'],
    contexto: 'Considere os períodos: I. "Não me informaram o resultado." II. "Informaram-me o resultado." III. "Quem me informou foi o enfermeiro." IV. "Me informaram o resultado ontem."',
    comando: 'Assinale a opção que indica os períodos em que a colocação pronominal está adequada à norma-padrão.',
    alternativas: [
      { k: 'A', texto: 'Apenas I, II e III.', porqueErrada: '' },
      { k: 'B', texto: 'Apenas I e II.', porqueErrada: 'O item III também está correto: o pronome relativo "quem" atrai o pronome oblíquo.' },
      { k: 'C', texto: 'Apenas II e IV.', porqueErrada: 'O item IV inicia período com pronome oblíquo átono, o que a norma-padrão não admite na escrita formal.' },
      { k: 'D', texto: 'I, II, III e IV.', porqueErrada: 'O item IV está inadequado à norma-padrão.' }
    ],
    correta: 'A',
    justificativa: 'Palavras atrativas — advérbio de negação (I) e pronome relativo/interrogativo (III) — exigem próclise. Sem atração, a ênclise é a colocação natural (II). Iniciar período com pronome oblíquo átono (IV) é aceito na oralidade, mas não na norma-padrão escrita.',
    dicaFGV: 'Guarde os três atrativos mais cobrados: negação, advérbio e pronome relativo. E a regra de ouro da escrita formal: não se começa frase com pronome oblíquo átono.',
    tags: ['colocação pronominal']
  },
  {
    id: 'q509', disciplinaId: 'port', dificuldade: 'media', tempoAlvo: 175,
    assunto: 'Significação das palavras',
    palavras: ['sinônimos', 'antônimos', 'sentido próprio', 'sentido figurado', 'significação'],
    contexto: 'Leia: "Depois da reunião tensa, o clima na unidade finalmente esfriou, e a equipe retomou o trabalho."',
    comando: 'No contexto, a expressão "o clima esfriou" está empregada em sentido',
    alternativas: [
      { k: 'A', texto: 'figurado, indicando redução da tensão entre as pessoas.', porqueErrada: '' },
      { k: 'B', texto: 'próprio, indicando queda da temperatura ambiente.', porqueErrada: 'O contexto trata da relação entre as pessoas após uma reunião tensa, não da temperatura.' },
      { k: 'C', texto: 'figurado, indicando aumento do conflito entre os profissionais.', porqueErrada: 'Acerta o sentido figurado, mas inverte o significado: esfriar indica diminuição da tensão.' },
      { k: 'D', texto: 'próprio, indicando o funcionamento do ar-condicionado da unidade.', porqueErrada: 'Extrapola o texto, que não menciona equipamento algum.' }
    ],
    correta: 'A',
    justificativa: 'A expressão é usada em sentido conotativo (figurado): "clima" designa o estado das relações no ambiente de trabalho e "esfriou" indica o arrefecimento da tensão, confirmado pela retomada do trabalho.',
    dicaFGV: 'A alternativa C acerta a classificação e erra o significado — armadilha típica em questões de sentido figurado. Depois de identificar a conotação, confirme para que lado ela aponta.',
    tags: ['semântica']
  },
  {
    id: 'q510', disciplinaId: 'port', dificuldade: 'media', tempoAlvo: 180,
    assunto: 'Concordância nominal e verbal',
    palavras: ['concordância', 'nominal', 'verbal', 'flexões'],
    contexto: 'Em um mural da unidade, foram afixados os avisos: I. "É proibido entrada de pessoas não autorizadas." II. "É necessária a apresentação do documento." III. "Seguem anexas as orientações." IV. "Bastante pacientes aguardaram o atendimento."',
    comando: 'Assinale a opção que indica os avisos corretos quanto à concordância nominal.',
    alternativas: [
      { k: 'A', texto: 'Apenas II e III.', porqueErrada: '' },
      { k: 'B', texto: 'Apenas I e II.', porqueErrada: 'Em I, com o substantivo determinado por artigo ausente, a construção correta seria "É proibida a entrada"; sem determinante, admite-se "É proibido entrada", mas a redação do aviso mistura as duas formas.' },
      { k: 'C', texto: 'Apenas III e IV.', porqueErrada: 'Em IV, "bastante" antes de substantivo funciona como pronome indefinido e deve concordar: "bastantes pacientes".' },
      { k: 'D', texto: 'I, II, III e IV.', porqueErrada: 'Dois avisos apresentam erro de concordância.' }
    ],
    correta: 'A',
    justificativa: 'Em II, o sujeito "a apresentação" está determinado pelo artigo, exigindo "é necessária". Em III, "anexas" é adjetivo e concorda com "orientações". Em IV, "bastante" quantifica o substantivo e deve ir para o plural: "bastantes pacientes".',
    dicaFGV: 'Dois pontos resolvem a questão: expressões como "é proibido" e "é necessário" só variam quando há determinante, e "anexo" e "bastante" concordam quando funcionam como adjetivo ou pronome.',
    tags: ['concordância']
  },
  {
    id: 'q511', disciplinaId: 'port', dificuldade: 'media', tempoAlvo: 185,
    assunto: 'Emprego da pontuação',
    palavras: ['pontuação', 'vírgula', 'aposto', 'vocativo'],
    contexto: 'Considere: "O enfermeiro responsável pela escala João Carlos comunicou a mudança aos técnicos do plantão noturno."',
    comando: 'Para que "João Carlos" seja entendido como aposto explicativo do sujeito, a pontuação correta é',
    alternativas: [
      { k: 'A', texto: '"O enfermeiro responsável pela escala, João Carlos, comunicou a mudança aos técnicos do plantão noturno."', porqueErrada: '' },
      { k: 'B', texto: '"O enfermeiro responsável pela escala João Carlos, comunicou a mudança aos técnicos do plantão noturno."', porqueErrada: 'A vírgula isolada separa sujeito de predicado, o que a norma não admite.' },
      { k: 'C', texto: '"O enfermeiro, responsável pela escala João Carlos comunicou a mudança, aos técnicos do plantão noturno."', porqueErrada: 'As vírgulas ficam em posições que desfazem o sentido e separam o verbo do complemento.' },
      { k: 'D', texto: '"O enfermeiro responsável, pela escala, João Carlos comunicou a mudança aos técnicos do plantão noturno."', porqueErrada: 'Isola um adjunto de forma incorreta e não marca o aposto.' }
    ],
    correta: 'A',
    justificativa: 'O aposto explicativo é isolado por vírgulas (ou travessões), entre o termo a que se refere e o restante da oração. Uma vírgula só, entre sujeito e predicado, é erro de pontuação.',
    dicaFGV: 'Aposto explicativo pede par de vírgulas: se a alternativa traz só uma, ela separou sujeito e predicado — erro clássico que a banca repete todo ano.',
    tags: ['pontuação']
  },

  /* ---------------- Matemática e Raciocínio Lógico ---------------- */

  {
    id: 'q512', disciplinaId: 'mat', dificuldade: 'media', tempoAlvo: 195,
    assunto: 'Mínimo múltiplo comum e máximo divisor comum',
    palavras: ['mínimo múltiplo comum', 'máximo divisor comum', 'conjuntos numéricos'],
    contexto: 'Em uma unidade de saúde, a manutenção dos equipamentos de ar-condicionado é feita a cada 12 dias e a limpeza terminal dos consultórios, a cada 18 dias. As duas tarefas foram realizadas hoje.',
    comando: 'As duas coincidirão novamente daqui a',
    alternativas: [
      { k: 'A', texto: '36 dias.', porqueErrada: '' },
      { k: 'B', texto: '6 dias.', porqueErrada: 'Corresponde ao máximo divisor comum, usado para dividir, não para encontrar coincidências futuras.' },
      { k: 'C', texto: '30 dias.', porqueErrada: 'Resulta de somar os dois intervalos, o que não corresponde ao ciclo comum.' },
      { k: 'D', texto: '216 dias.', porqueErrada: 'É o produto 12 × 18, que é múltiplo comum, mas não o menor deles.' }
    ],
    correta: 'A',
    justificativa: 'Coincidência de ciclos é mínimo múltiplo comum. Decompondo: 12 = 2² × 3 e 18 = 2 × 3². O MMC toma os fatores com maior expoente: 2² × 3² = 36 dias.',
    dicaFGV: 'A banca oferece o MDC (6) e o produto (216) como distratores. Regra prática: "quando os eventos coincidem de novo" é sempre MMC; "em quantos grupos iguais posso dividir" é MDC.',
    tags: ['MMC']
  },
  {
    id: 'q513', disciplinaId: 'mat', dificuldade: 'media', tempoAlvo: 190,
    assunto: 'Média aritmética e ponderada',
    palavras: ['média aritmética', 'média ponderada', 'estatística'],
    contexto: 'Um candidato obteve 8,0 na prova de conhecimentos gerais, com peso 1, e 6,0 na prova de conhecimentos específicos, com peso 2.',
    comando: 'A média ponderada obtida por ele foi de',
    alternativas: [
      { k: 'A', texto: '6,67.', porqueErrada: '' },
      { k: 'B', texto: '7,00.', porqueErrada: 'É a média aritmética simples, que ignora os pesos.' },
      { k: 'C', texto: '6,00.', porqueErrada: 'Considera apenas a nota de peso maior, descartando a outra.' },
      { k: 'D', texto: '7,33.', porqueErrada: 'Inverte os pesos, atribuindo 2 à primeira nota e 1 à segunda.' }
    ],
    correta: 'A',
    justificativa: 'Média ponderada = (8,0 × 1 + 6,0 × 2) ÷ (1 + 2) = (8 + 12) ÷ 3 = 20 ÷ 3 ≈ 6,67. A média simples seria 7,00, valor que aparece como distrator.',
    dicaFGV: 'A alternativa D é o resultado de inverter os pesos — erro comum de quem lê rápido. Anote qual peso pertence a qual nota antes de calcular; neste concurso, o Módulo II também tem peso 2.',
    tags: ['média']
  },
  {
    id: 'q514', disciplinaId: 'mat', dificuldade: 'media', tempoAlvo: 195,
    assunto: 'Equações e sistemas do 1º grau',
    palavras: ['equações', 'sistemas de equações', 'função do 1º grau', 'problemas'],
    contexto: 'Em um plantão, foram atendidos 90 pacientes entre adultos e crianças. O número de adultos foi o dobro do número de crianças.',
    comando: 'O número de crianças atendidas foi',
    alternativas: [
      { k: 'A', texto: '30.', porqueErrada: '' },
      { k: 'B', texto: '45.', porqueErrada: 'Corresponde à divisão em partes iguais, ignorando a proporção de dobro.' },
      { k: 'C', texto: '60.', porqueErrada: 'É o número de adultos, não o de crianças.' },
      { k: 'D', texto: '22.', porqueErrada: 'Não satisfaz a soma de 90 com a relação indicada.' }
    ],
    correta: 'A',
    justificativa: 'Sendo c o número de crianças, os adultos são 2c. Então c + 2c = 90, ou seja, 3c = 90 e c = 30. Confere: 30 crianças e 60 adultos somam 90.',
    dicaFGV: 'A alternativa C é a resposta da outra pergunta — o número de adultos. Depois de resolver a equação, releia o comando para ver qual incógnita foi pedida.',
    tags: ['equações']
  },
  {
    id: 'q515', disciplinaId: 'mat', dificuldade: 'media', tempoAlvo: 200,
    assunto: 'Diagramas lógicos',
    palavras: ['diagramas lógicos', 'conjuntos', 'lógica', 'argumentação'],
    contexto: 'Em uma unidade, sabe-se que todos os técnicos de enfermagem fizeram o treinamento de biossegurança e que algumas pessoas que fizeram esse treinamento são administrativos.',
    comando: 'A partir dessas informações, conclui-se necessariamente que',
    alternativas: [
      { k: 'A', texto: 'existe pelo menos uma pessoa que fez o treinamento e não é técnico de enfermagem, ou todos os que fizeram o treinamento são técnicos — não se pode afirmar que algum administrativo é técnico.', porqueErrada: '' },
      { k: 'B', texto: 'algum administrativo é técnico de enfermagem.', porqueErrada: 'As premissas não estabelecem interseção entre administrativos e técnicos; ambos apenas fizeram o mesmo treinamento.' },
      { k: 'C', texto: 'nenhum administrativo fez o treinamento.', porqueErrada: 'Contraria diretamente a segunda premissa.' },
      { k: 'D', texto: 'todos os que fizeram o treinamento são técnicos de enfermagem.', porqueErrada: 'Inverte a primeira premissa: "todo técnico fez o treinamento" não significa "todo treinado é técnico".' }
    ],
    correta: 'A',
    justificativa: 'A primeira premissa coloca o conjunto dos técnicos dentro do conjunto dos treinados. A segunda garante interseção entre treinados e administrativos, mas não diz onde ela ocorre. Logo, não se pode concluir que algum administrativo seja técnico.',
    dicaFGV: 'Desenhe os conjuntos: técnicos dentro de treinados, e administrativos cruzando treinados em posição indefinida. A conclusão que "parece óbvia" (B) é justamente a que o diagrama não autoriza.',
    tags: ['diagramas', 'lógica']
  },
  {
    id: 'q516', disciplinaId: 'mat', dificuldade: 'media', tempoAlvo: 190,
    assunto: 'Grandezas e medidas',
    palavras: ['grandezas', 'medidas', 'tempo', 'capacidade', 'massa'],
    contexto: 'Um frasco de soro tem capacidade de 0,5 litro. A prescrição indica a infusão de 250 mililitros.',
    comando: 'A fração do frasco correspondente ao volume prescrito e o volume restante são, respectivamente,',
    alternativas: [
      { k: 'A', texto: 'metade do frasco e 250 mililitros.', porqueErrada: '' },
      { k: 'B', texto: 'um quarto do frasco e 250 mililitros.', porqueErrada: 'Erra a fração: 250 mL é metade de 500 mL, não um quarto.' },
      { k: 'C', texto: 'metade do frasco e 0,25 litro restantes, o que equivale a 25 mililitros.', porqueErrada: 'A conversão está errada: 0,25 litro corresponde a 250 mL, não a 25 mL.' },
      { k: 'D', texto: 'dois terços do frasco e 150 mililitros.', porqueErrada: 'Não corresponde aos valores do enunciado.' }
    ],
    correta: 'A',
    justificativa: '0,5 litro equivale a 500 mililitros. A infusão de 250 mL corresponde à metade do frasco, restando 250 mL, ou 0,25 litro.',
    dicaFGV: 'A alternativa C acerta a fração e erra a conversão de unidade, que é onde a banca costuma pegar o candidato. Converta tudo para a mesma unidade antes de comparar.',
    tags: ['unidades']
  },
  {
    id: 'q517', disciplinaId: 'mat', dificuldade: 'dificil', tempoAlvo: 205,
    assunto: 'Análise combinatória e probabilidade',
    palavras: ['probabilidade', 'combinatória', 'conjuntos'],
    contexto: 'Em uma caixa há 5 máscaras cirúrgicas e 3 máscaras N95, idênticas ao toque. Uma máscara é retirada ao acaso e, sem reposição, outra é retirada em seguida.',
    comando: 'A probabilidade de as duas retiradas serem máscaras N95 é',
    alternativas: [
      { k: 'A', texto: '3/28.', porqueErrada: '' },
      { k: 'B', texto: '9/64.', porqueErrada: 'Calcula como se houvesse reposição: (3/8) × (3/8).' },
      { k: 'C', texto: '3/8.', porqueErrada: 'É apenas a probabilidade da primeira retirada.' },
      { k: 'D', texto: '1/28.', porqueErrada: 'Resulta de erro na multiplicação das frações.' }
    ],
    correta: 'A',
    justificativa: 'São 8 máscaras no total. Na primeira retirada, a probabilidade de N95 é 3/8. Sem reposição, restam 2 N95 em 7 máscaras: 2/7. Multiplicando: (3/8) × (2/7) = 6/56 = 3/28.',
    dicaFGV: 'A expressão "sem reposição" muda o denominador e o numerador da segunda retirada. A alternativa B existe para quem ignora essa expressão — sublinhe-a no enunciado.',
    tags: ['probabilidade']
  }
];
