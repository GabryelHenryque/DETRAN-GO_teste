const questions = [
    // {
    //     question:"A placa R-2 assinala ao condutor:",
    //     alter_correct:"Dê a preferência",
    //     alter_incorrect:[
    //         "Sentido obrigatório.",
    //         "Parada obrigatória.",
    //         "Uso obrigatório da luz de alerta."]  
    // },
    // {
    //     question:"A placa A-12 Adverte o condutor sobre:",
    //     alter_correct:"Intersecção em círculo.",
    //     alter_incorrect:[
    //         "Saliência ou lombada.",
    //         "Sentido circular da via.",
    //         "Sentido obrigatório."]  
    // },
    // {
    //     question:"A placa R-7 assinala ao condutor:",
    //     alter_correct:"Proibido ultrapassar.",
    //     alter_incorrect:[
    //         "Proibido ultrapassar pela direita.",
    //         "Proibido ultrapassar ciclista.",
    //         "Proibido ultrapassar pela esquerda."]  
    // },
    // {
    //     question:"A placa A-33b adverte o condutor sobre:",
    //     alter_correct:"Passagem sinalizada de escolares.",
    //     alter_incorrect:[
    //         "Passagem de pedestres.",
    //         "Área escolar.",
    //         "Passagem sinalizada de pedestres."]  
    // },
    {
        question:"Os requisitos necessários, dentre outros, para obter a C.N.H. são:",
        alter_correct:"Saber ler e escrever.",
        alter_incorrect:[
            "Ter concluído o Ensino Médio.",
            "Ter concluído o Ensino fundamental.",
            "Estar matriculado no Ensino Fundamental."]  
    },
    {
        question:"O transporte de criança em motocicleta é permitido a partir de:",
        alter_correct:"10 anos de idade.",
        alter_incorrect:[
            "8 anos de idade.",
            "7 anos de idade.",
            "5 anos de idade."]  
    },
    {
        question:"Que tipo de veículo automotor os condutores habilitados na categoria 'A' podem conduzir?" ,
        alter_correct:"Motocicletas, triciclos e ciclomotores.",
        alter_incorrect:[
            "Ônibus e micro-ônibus.",
            "Camionetas.",
            "Trailers."]  
    },
    {
        question:"A velocidade máxima permitida em via urbana de trânsito rápido na qual não exista sinalização regulamentadora é de:",
        alter_correct:"80 km/h.",
        alter_incorrect:[
            "90 km/h.",
            "70 km/h.",
            "110 km/h."]  
    },
    {
        question:"As vias rurais pavimentadas são definidas como:",
        alter_correct:"Rodovias.",
        alter_incorrect:[
            "Estradas.",
            "Vias coletoras.",
            "Vias de trânsito rápido."]  
    },
    {
        question:"A cada infração gravíssima são computados no prontuário do condutor:",
        alter_correct:"7 pontos.",
        alter_incorrect:[
            "3 pontos.",
            "4 pontos.",
            "5 pontos."]  
    },
    {
        question:"Transitar em velocidade superior à máxima permitida em até 20% é uma infração:",
        alter_correct:"Média.",
        alter_incorrect:[
            "Grave.",
            "Leve.",
            "Gravíssima."]  
    },
    {
        question:"A visibilidade do condutor, que exige sua redobrada atenção, é mais reduzida:",
        alter_correct:"À noite, com chuva, garoa ou neblina.",
        alter_incorrect:[
            "Em túnel dotado de iluminação pública.",
            "Em via urbana dotada de iluminação pública.",
            "Em dia claro, com céu azul e sol."]  
    },
    {
        question:"Granito e chuva são classificados como condições adversas de:",
        alter_correct:"Tempo.",
        alter_incorrect:[
            "Veículo.",
            "Trânsito.",
            "Luz."]  
    },
    {
        question:"São condições adversas de via:",
        alter_correct:"Os desvios e os buracos.",
        alter_incorrect:[
            "O morro e o granizo.",
            "O granizo e a pista escorregadia.",
            "A chuva e a neblina."]  
    },
    {
        question:"Ao dirigir com chuva, o condutor deve manter, pelo menos:",
        alter_correct:"Luzes de posição acesas.",
        alter_incorrect:[
            "Pisca-alerta aceso.",
            "Faróis altos acesos.",
            "Luzes de posição apagadas."]  
    },
    {
        question:"Ao se aproximar de um cruzamento, uma forma segura de agir do condutor é:",
        alter_correct:"Reduzir a velocidade.",
        alter_incorrect:[
            "Acionar a buzina.",
            "Manter a mesma velocidade.",
            "Aumentar a velocidade."]  
    },
    {
        question:"Congestionamento é considerado condição adversa de:",
        alter_correct:"Trânsito.",
        alter_incorrect:[
            "Motorista.",
            "Rodovias.",
            "Vias."]  
    },
    {
        question:"Atos de imperícia de condutor são ocasionados por:",
        alter_correct:"Falta de habilidade.",
        alter_incorrect:[
            "Desobediência à sinalização.",
            "Dirigir com sono.",
            "Dirigir sob efeito de álcool."]  
    },
    {
        question:"Ao atender uma vítima de sinistro, o indivíduo que presta socorro tem como finalidade principal:",
        alter_correct:"Preservar a vida.",
        alter_incorrect:[
            "Diminuir as lesões.",
            "Transportar para o hospital.",
            "Aliaviar a dor."]  
    },
    {
        question:"As hemorragias são classificadas em:",
        alter_correct:"Interna e externa.",
        alter_incorrect:[
            "Arterial e venosa.",
            "Arterial e nasal.",
            "Interna e arterial."]  
    },
    {
        question:"O melhor local do corpo para se verificar a pulsação de vítima adulta inconsciente é:",
        alter_correct:"O pescoço.",
        alter_incorrect:[
            "A perna.",
            "O pulso.",
            "O peito."]  
    },
    {
        question:"Na maioria das regiões do Brasil, os telefones de Bombeiros, SAMU e Polícia são:",
        alter_correct:"Bombeiros: 193, SAMU: 192, Polícia: 190.",
        alter_incorrect:[
            "Bombeiros: 190, SAMU: 192, Polícia: 191.",
            "Bombeiros: 193, SAMU: 191, Polícia: 190.",
            "Bombeiros: 190, SAMU: 193, Polícia: 191."]  
    },
    {   
        question:"São fontes de poluição sonora veicular:",
        alter_correct:"Escapamento aberto e aparelhos de som.",
        alter_incorrect:[
            "Baterias com vazamentos.",
            "Combustível adulterado.",
            "Carcaça de pneus usados."]  
    },
    {   
        question:"Nos grandes centros urbanos, os principais causadores de poluição do ar são:",
        alter_correct:"Os veículos automotores e indústrias.",
        alter_incorrect:[
            "As fábricas.",
            "As usinas termelétricas.",
            "As queimadas."]  
    },
    {   
        question:"A proteção do meio ambiente:",
        alter_correct:"É o objetivo fundamental das leis e normas ambientais.",
        alter_incorrect:[
            "É de responsabilidade exclusiva das organizações internacionais.",
            "Não deve ser preocupação de condutores de veículos automotores.",
            "Não está relacionada com as normas de circulação no trânsito.",]  
    },
    {   
        question:"No trânsito, não basta ser bom condutor. É necessário adotar uma atitude pessoal que melhore a convivência no trânsito, inclusive diante dos erros cometidos por outros usuários da via, evitando, assim, possiveis sinistro. Essa atitude pessoal deve ser de:",
        alter_correct:"Tolerância.",
        alter_incorrect:[
            "Agressividade.",
            "Ousadia.",
            "Impaciência."]  
    },
    {   
        question:"O controle da temperatura de um motor é realizado pelo sistema de:",
        alter_correct:"Resfriamento ou arrefecimento.",
        alter_incorrect:[
            "Carburação e ventilação forçada.",
            "Ventilação forçada e freio.",
            "Velas e ventilação circulante"]  
    },
    {   
        question:"A baixa calibragem dos pneus:",
        alter_correct:"Reduz sua vida útil.",
        alter_incorrect:[
            "Aumenta a capacidade de frenagem.",
            "Favorecer a estabilidade em curvas.",
            "Aumenta sua vida útil."]  
    },
    {   
        question:"O excesso de fumaça eliminado pelos motores de combustão pode ser indentificado:",
        alter_correct:"Pelo escapamento.",
        alter_incorrect:[
            "Pelo ventilação do motor.",
            "Pelo silenciador.",
            "Pelo sistema de ventilação interna."]  
    },
    {   
        question:"De onde provém a eletricidade necessária para acionar o motor de arranque?",
        alter_correct:"Da bateria.",
        alter_incorrect:[
            "Do alternador.",
            "Da ignição eletrônica.",
            "Das velas."]  
    },
    
    
    //prova laranja
    {   
        question:"Para acionar a Polícia Rodoviária Federal, devemos ligar para o telefone:",
        alter_correct:"191.",
        alter_incorrect:[
            "192.",
            "195.",
            "190."]  
    },
    {   
        question:"O ofuscamento da visão do condutor do veículo pode ser evitado, tornando-se o seguinte cuidado:",
        alter_correct:"Desviando a visão para uma referência na faixa á direita da pista ao cruzar com veículo que esteja com luz alta à noite.",
        alter_incorrect:[
            "Acionando a luz alta ao entrar em túneis.",
            "Utilizando óculos escuros à noite.",
            "Posicionando a mão acima dos olhos para evitar a incidência da luz do sol."]  
    },
    {   
        question:"Gás sem sabor, sem cheiro e sem cor é perigoso porque reduz a capacidade de assimilação do oxigênio pelo sangue, é o:",
        alter_correct:"Monóxido de carbono.",
        alter_incorrect:[
            "Nitrogênio.",
            "Enxofre.",
            "Lixo doméstico."]  
    },
    {   
        question:"Qual das condutas abaixo se enquadra na previsão dos crimes de trânsito?",
        alter_correct:"Dirigir alcoolizado.",
        alter_incorrect:[
            "Dirigir veículo com CNH vencida.",
            "Avançar o sinal vermelho.",
            "Dirigir veículo de categoria diferente da CNH."]  
    },
    {   
        question:"Em hemorragia externa, se o sangue ensopar as primeiras compressas aplicadas, você deverá:",
        alter_correct:"Colocar mais compressas sobre as que já estão no local.",
        alter_incorrect:[
            "Cobrir as compressas ensopadas com plástico e recolocá-las.",
            "Colocar a mão sobre o ferimento para estancar a hemorragia.",
            "Retirar as já existentes e colocar novas compressas."]  
    },
    {   
        question:"Para evitar a colisão com o veículo que vai à frente, o motorista deverá:",
        alter_correct:"Manter distância de segurança.",
        alter_incorrect:[
            "Manter a velocidade do seu veículo menor que a velocidade máxima permitida para a via.",
            "Dar sinal de luz para o veículo que vai à frente.",
            "Ultrapassá-lo no menor tempo possível."]  
    },
    {   
        question:"Em que tipo de refrigeração, o motor utiliza o termômetro?",
        alter_correct:"A água.",
        alter_incorrect:[
            "O ar condicionado.",
            "O ar.",
            "A Elétrica."]  
    },
    {   
        question:"Em rodovias, sem local apropriado para retorno ou para entrar á esquerda, o condutor deverá aguardar a oportunidade para cruzar a pista, parando o veículo:",
        alter_correct:"No acostamento, à direita.",
        alter_incorrect:[
            "À esquerda da pista.",
            "No centro da pista, na faixa divisória dos fluxo.",
            "No local em que considerar como o mais seguro."]  
    },
    // {   
    //     question:"Qual o nome técnico da placa R-38",
    //     alter_correct:"Proibido trânsito de ônibus.",
    //     alter_incorrect:[
    //         "Proibido trânsito de veículo de carga.",
    //         "Proibido trânsito de veículos de passageiros,",
    //         "Proibido trânsito de caminhões."]  
    // },
    {   
        question:"Para trafegar com margem de segurança, a atitude correta do condutor depende de:",
        alter_correct:"Observação, previsão e decisão.",
        alter_incorrect:[
            "Conservação do veículo, técnica, decisão e fones de ouvido.",
            "Conservação do veículo e da posição da cabeça.",
            "Do aumento da velocidade, das condiçães das vias e dos fatores externos."]  
    },
    {   
        question:"É proibido a todo condutor de veículo:",
        alter_correct:"Usar a buzina entre vinte e duas(22h) e seis horas(6h).",
        alter_incorrect:[
            "Dirigir com as duas mãos no volante.",
            "Usar o cinto de segurança.",
            "Transitar com farol baixo em vias com iluminação pública."]  
    },
    {   
        question:"De acordo com a Lesgislação de Trânsito em vígor, o tempo da parada do veículo deve ser:",
        alter_correct:"O necessário para efetuar o embarque e desembarque de passageiros.",
        alter_incorrect:[
            "O necessário para a carga e descarga, e embarque e desembarque de passageiros.",
            "Depende do agente de trânsito.",
            "De acordo com a necessidade de condutor."]  
    },
    // {   
    //     question:"Qual o nome técnico da placa S-3?",
    //     alter_correct:"Serviço mecânico.",
    //     alter_incorrect:[
    //         "Loja de ferragens.",
    //         "Oficina autorizada.",
    //         "Área de manutenção."]  
    // },
    {   
        question:"Se houver perigo de incêndio em um veículo acidentado, que atitudes você deve tomar?",
        alter_correct:"Afastar curiosos e se for fácil e seguro, desligar o motor do veículo acidentado.",
        alter_incorrect:[
            "Ficar próximo do veículo acindentado com baldes de água.",
            "Caso estaja nervoso fumar no local, para aliviar a tensão.",
            "Aguardar junto ao veículos acidentado a chegada do corpo de bombeiros."]  
    },
    {   
        question:"O equipamento de segurança do veículo, cuja finalidade é limitar a movimentação dos ocupantes deste, em caso de acidentes ou em freadas bruscas é o:",
        alter_correct:"Cinto de segurança.",
        alter_incorrect:[
            "Sistema de travamento dos bancos de veículo.",
            "Freio de serviço.",
            "Cinto de árvore de transmissão."]  
    },
    // {   
    //     question:"Qual o nome técnico da placa A-23?",
    //     alter_correct:"Ponte móvel.",
    //     alter_incorrect:[
    //         "Ponte estreita.",
    //         "Confluência ao centro.",
    //         "Divisão de pista."]  
    // },
    {   
        question:"O veículo automotor, elétrico, articulado, reboque e semi-reboque, para transitar nas vias públicas, deverá ser licenciado:",
        alter_correct:"Anualmente, no DETRAN onde o veículo for registrado.",
        alter_incorrect:[
            "Semestralmente, no DETRAN onde o veículo for registrado.",
            "Semestralmente, desde que seu proprietário pague o IPVA anualmente.",
            "Somente quando mudar de proprietário."]  
    },
    {   
        question:"Qual a distância recomendada para iniciar a sinalização, em uma rodovia com velocidade máxima permitida de 100 quilômetros por hora, em caso de acidente?",
        alter_correct:"100 passos largos ou 100 metros.",
        alter_incorrect:[
            "60 passos largos ou 60 metros.",
            "50 passos largos ou 50 metros.",
            "30 passos largos ou 30 metros."]  
    },
    {   
        question:"São exemplos de condições adversas da via:",
        alter_correct:"Acostamento rebaixado e pista escorregadia.",
        alter_incorrect:[
            "Sinalização vertical adequada e pista irregular.",
            "Sinalização horizontal perfeita e pavimento em boas consiçães.",
            "Falta de vegetação próxima à pista e vento lateral."]  
    },
    {   
        question:"A que distância, estacionar um automóvel afastado da guia da calçada, configura infração de trânsito?",
        alter_correct:"A partir de cinquenta centímetros (50cm).",
        alter_incorrect:[
            "A partir de trinta centímetros (30cm).",
            "Somente a partir de um metro e cinquenta centímetros (1,50cm).",
            "A partir de quarenta centímetros (40cm)."]  
    },
    {   
        question:"Um silvo longo significa:",
        alter_correct:"Diminua a marcha.",
        alter_incorrect:[
            "Motoristas a postos.",
            "Siga.",
            "Pare."]  
    },
    {   
        question:"Um dos cuidados que devemos ter periodícamente com o veículo, como meio de diminuir a poluição do meio ambiente, é:",
        alter_correct:"Verificar o nivel de óleo do motor.",
        alter_incorrect:[
            "Lavar os pneus para evitar a derrapagem.",
            "Verificar a água do sistema de freio.",
            "Lavar os pára-brisas semanalmente."]  
    },
    {   
        question:"Sobre a circulação de ciclomotor é correto afirmar.",
        alter_correct:"Este veículo deve ser conduzido pela direita da pista de rolamento.",
        alter_incorrect:[
            "A utilização do capacete não é obrigatória nestes veículos.",
            "É proibida sua circulação em vias arteriais e coletoras.",
            "Não é permitido transportar passageiro neste veículo."]  
    },
    {   
        question:"Produtos perigosos são aqueles que:",
        alter_correct:"Apresentam risco ao meio ambiente.",
        alter_incorrect:[
            "Podemos consumir sem perigo para a vida.",
            "São preparados somente para tranquilizar.",
            "São recomendados pelos médicos."]  
    },
    {   
        question:"Se por motivo de força maior, o recurso interposto junto a JARI, não for julgado no prazo de 30 dias, a autoridade responsável pela penalidade, de oficio ou por solicitação do requerente:",
        alter_correct:"Concederá efeito suspensivo.",
        alter_incorrect:[
            "Remeterá o recurso para instância superior.",
            "Julgará o registro do auto de infração.",
            "Arquivará o autor de infração."]  
    },
    {   
        question:"A carteira Nacional de Habilitação permite ao condutor:",
        alter_correct:"Dirigir veículos automotores para os quais foi habilitado, em todo o território nacional.",
        alter_incorrect:[
            "Dirigir veículos automotor apenas até 3.500 kg.",
            "Dirigir veículos automotores para os quais foi habilitado, apenas na localidade onde foi emitida.",
            "Dirigir qualquer tipo de veículo automotor em todo o território nacional."]  
    },
    {   
        question:"Qual o nome do vínculo permanente de subordinação dos individuos à autoridade de um Estado, que lhes dá proteção e reconhece seus direitos?",
        alter_correct:"Nacionalidade",
        alter_incorrect:[
            "Naturalidade.",
            "Identidade.",
            "Patriotismo."]  
    },
    {   
        question:"Quais os componentes que fazem parte do sistema de alimentação do veículo?",
        alter_correct:"Todas as alternativas estão corretas.",
        alter_incorrect:[
            "Carburador",
            "Injeção eletrônica.",
            "Bomba de gasolina."]  
    },
    
    
    //Prova preta
    {   
        question:"Nos grandes centros urbanos, os principais causadores da poluição do ar são:",
        alter_correct:"Os veículos automotores.",
        alter_incorrect:[
            "As usinas termoelétricas.",
            "As queimadas.",
            "Os veículos elétricos."]  
    },
    {   
        question:"O condutor prudente deve:",
        alter_correct:"Manter o veículo em perfeitas condições de uso.",
        alter_incorrect:[
            "Acelerar bruscamente ao efetuar as trocas de marcha.",
            "Transitar com os pneus abaixo de pressão recomendada pelo fabricante.",
            "Realizar aceleradas bruscas e frenagens com deslizamento de pneus."]  
    },
    {   
        question:"É dever de todo condutor de veículo:",
        alter_correct:"transitar com velocidade máxima permitida para a vía, diante de escolar e onde haja grande movimentação de pedestres.",
        alter_incorrect:[
            "Trocar a placa do veículo por ocasião da transferência de proriedade.",
            "Guardar distância de segurança lateral e frontal entre o seu e os demais veículos, bem como em relação ao borda da pista.",
            "Nas vias urbanas, posicionar-se mais à direita da via, quando for entrar para a esquerda em via de sentido único."]  
    },
    // {   
    //     question:"Qual o nome técnico da placa R-6C?",
    //     alter_correct:"Proibido parar e estacionar.",
    //     alter_incorrect:[
    //         "Estacionamento regulamentado.",
    //         "Proibido parada.",
    //         "Proibido estacionar."]  
    // },
    {   
        question:"A respeito da faixa horizontal dos veículos destinados ao transporte escolar, é correto afirmar que:",
        alter_correct:"Deverá ser de cor preta quando a carroceria do veículo for pintada na cor amarela.",
        alter_incorrect:[
            "Deverá possuir o dístico escolar na cor azul.",
            "Deverá estar presente em toda a extensão da parte frontal, lateral e traseira do veículo.",
            "Deverá sempre ser de cor amarela a verde."]  
    },
    {   
        question:"Nas vias em que o estacionamento for proibido, a parada de veículos poderá ser feita:",
        alter_correct:"Restringindo-se ao tempo indispensável para embarque ou desembarque de passageiro, sem interrromper o trânsito.",
        alter_incorrect:[
            "Restringindo-se ao tempo necessário a carga e a descarga.",
            "Desde que o veículo esteja ligado e o condutor esteja fora dele.",
            "Sobre o passeio."]  
    },
    {   
        question:"A velocidade compativel com a segurança permite ao motorista:",
        alter_correct:"Fazer uma manobra de emergência, quando houver necessidade, como frear ou desviar o veículo de outro.",
        alter_incorrect:[
            "Chegar ao seu destino no menor tempo possível.",
            "Ter prioridade em situações de congestionamento sobre qualquer outro.",
            "Circula de acordo com sua coveniência."]  
    },
    {   
        question:"As repartições de trânsito deverão conservar os documentos relativos á habilitação de condutores, de registro e licenciamento de veículos por no mínimo:",
        alter_correct:"05 (cinco) anos.",
        alter_incorrect:[
            "07 (sete) anos.",
            "02 (dois) anos.",
            "06 (seis) anos."]  
    },
    // {   
    //     question:"Qual o nome técnico da placa S-4?",
    //     alter_correct:"Abastecimento.",
    //     alter_incorrect:[
    //         "Restaurante.",
    //         "Pronto Socorro.",
    //         "Serviço sanitário."]  
    // },
    {   
        question:"Os meios de ação que são utilizados para atingir os objetivos da direção defensiva:",
        alter_correct:"Educação, fiscalização e engenharia.",
        alter_incorrect:[
            "Engenharia e policiamento.",
            "Engenharia e conhecimento.",
            "Meio defensivo."]  
    },
    {   
        question:"O veículo automotor de transporte coletivo com capacidade para até vinte passageiros é o:",
        alter_correct:"Microônibus",
        alter_incorrect:[
            "ônibus biarticulado.",
            "ônibus.",
            "Trem."]  
    },
    {   
        question:"Quais são os erros mais comuns que ocorrem ao dirigir um veículo automotor e que podem gerar acidente?",
        alter_correct:"Infrações do trânsito, atraso de horário e falta de cortesia.",
        alter_incorrect:[
            "Falta de cortesia e concentração.",
            "Direção agrssiva e habilidade.",
            "Direção defensiva e falta de cortesia."]  
    },
    
    {   
        question:"O movimento executado pelo condutor para alterar a posição em que o veículo está no momento em relação à via, denomina-se:",
        alter_correct:"Manobra.",
        alter_incorrect:[
            "Estacionamento.",
            "Transposição de faixa.",
            "Conversão."]  
    },
    {   
        question:"Qual a distância recomendada para iniciar a sinalização, em uma avenida com velocidade máxima permitida de 60 quilômetros por hora, em caso de acidente?",
        alter_correct:"60 passos largos ou 60 metros.",
        alter_incorrect:[
            "40 passos largos ou 40 metros.",
            "50 passos largos ou 50 metros.",
            "30 passos largos ou 30 metros."]  
    },
    // {   
    //     question:"Qual o nome técnico da placa A-28?",
    //     alter_correct:"Pista escorregadia",
    //     alter_incorrect:[
    //         "Curva em nivel.",
    //         "Projeção de cascalho.",
    //         "Área com desmoronamento."]  
    // },
    {   
        question:"Existe, no Brasil, determinações que a indústria automobilística deve seguir para diminuir a emissão de gases de seus veículos.",
        alter_correct:"CONAMA.",
        alter_incorrect:[
            "DETRAN.",
            "CONTRAN.",
            "IBAMA."]  
    },
    {   
        question:"A vela de ignição tem como função:",
        alter_correct:"Fornecer a centelha elétrica na câmara de explosão.",
        alter_incorrect:[
            "Interromper a corrente elétrica.",
            "Aquecer o ar da câmara de explosão.",
            "Aquecer o combustivel."]  
    },
    {   
        question:"Quanto ao uso de torniquete, podemos afirmar que:",
        alter_correct:"É utilizado apenas por profissionais e, mesmo assim, em caráter de exceção.",
        alter_incorrect:[
            "Pode ser aplicado por um condutor que não seja um profissional de saúde.",
            "É contra-indicado para os casos de amputação, avulsão e esmagamento.",
            "É recomendado para queimaduras de 2° grau."]  
    },
    {   
        question:"Revolver os conflitos sobre circunscrição e competência de trânsito no âmbito dos municipios é atribuição do:",
        alter_correct:"Conselhos Estadual de trânsito (CETRAN).",
        alter_incorrect:[
            "Departamento Nacional de Trânsito (DENATRAN).",
            "Policia Rodoviária Federal (PRF).",
            "Conselho Nacional de trânsito (CONTRAN)."]  
    },
    {   
        question:"O agente da autoridade de trânsito competente para lavrar o auto de infração poderá ser:",
        alter_correct:"Servidor civil, estatutário ou celetista ou, ainda, policia militar designado pela autoridade de trânsito com jurisdição sobre a via no âmbito de sua competência.",
        alter_incorrect:[
            "Somente policial militar designado pela respectiva autoridade de trânsito.",
            "Somente servidor civil estatutário e o policial rodoviário federal.",
            "Somente servidor civil estatutário ou celetista."]  
    },
    {   
        question:"Entendemos a bioética como:",
        alter_correct:"Ramo do saber ético que se ocupa dos valores morais de respeito à pessoa humana no campo das ciências da vida.",
        alter_incorrect:[
            "Ramo da ciência que estuda o ser vivo.",
            "Ramo do saber que não tem relação com a ecologia.",
            "Ramo do saber que entende ser o homem o senhor dos recursos naturais."]  
    },
    {
        question:"Assinale a alternativa que não indica sinal de parada cardíaca:",
        alter_correct:"Áreas da pele com formação de bolhas.",
        alter_incorrect:[
            "Dilatação das pupilas.",
            "Ausência de ruídos respiratórios ou movimentos de ar pelo nariz ou ar pelo nariz ou boca.",
            "Ausência de pulsos e dos sons cardíacos audiveis.",
        ], 
    },
    {
        question:"A quem caberá interpor recursos contra as decisões da JARI:",
        alter_correct:"O responsável pela infração e a autoridade de trânsito que impôs a penalidade.",
        alter_incorrect:[
            "Somente a autoridade que impôs a penalidade.",
            "Somente o agente da autoridade de trânsito.",
            "O responsável pela via e o guarda mirim.",
        ], 
    },
    {
        question:"O condutor ao perceber antecipadamente a presença de buracos, depressões, lombadas ou alterações no piso da pista de rolamento, deve:",
        alter_correct:"Reduzir a velocidade.",
        alter_incorrect:[
            "Acelerar o veículo para livrar-se o mais rápido deste perigos.",
            "Não se preocupar com estas situações adversas.",
            "Acionar a embreagem para evitar desgaste excessivo do motor.",
        ], 
    },
    {
        question:"As linhas divisoras de fluxos seccionadas de cor amarela significam:",
        alter_correct:"Divisão de fluxos opostos e permissão de ultrapassagem.",
        alter_incorrect:[
            "Divisão de fluxos opostos e proibição de ultrapassagem.",
            "Divisão de fluxos semelhantes e permissão de ultrapassagem.",
            "Divisão de fluxos semelhantes e proibição de ultrapassagem.",
        ], 
    },
    {
        question:"Atirar lixo (papel, plástico, lata, etc.) de dentro do veículo, nas vias públicas, com relação á Lesgislação de Trânsito constitui:",
        alter_correct:"Infração de trânsito.",
        alter_incorrect:[
            "Falta de educação.",
            "Atitude indecorosa.",
            "Falta de higiene.",
        ], 
    },
    {
        question:"Os sinais sonoros executados por buzinas, deverão ser em toque breve e destinados para:",
        alter_correct:"Fazer advertências necessárias, a fim de evitar acidentes.",
        alter_incorrect:[
            "Apressar o pedestre para que ele conclua o mais rápido sua travessia.",
            "Apressar os outros veículos que se encontram na via.",
            "Advertir os demais usuários da via, em qualquer hora do dia ou da noite.",
        ], 
    },
    {
        question:"Assinale a principal recomendação para a conservação do motor do veículo:",
        alter_correct:"Verificar, frequentemente, o nivel de óleo do motor.",
        alter_incorrect:[
            "Reapertar as juntas de vedação.",
            "Trocar o óleo do motor diariamente.",
            "Lavar sempre o motor.",
        ], 
    },
    {
        question:"Ao dirigir sob neblina ou cerração, é procedimento correto do condutor:",
        alter_correct:"Acender a luz baixa do farou e reduzir a velocidade.",
        alter_incorrect:[
            "Aumentar a velocidade para se livrar do trecho sob neblina.",
            "Acionar a sinalização de emergência do veículo, juntamente com a luz alta do farol.",
            "Diminuir a distância em relação ao veículo da frente.",
        ], 
    },
    {
        question:"Para acionar o socorro especializado, ou seja, o Corpo de Bombeiros devemos ligar para o telefone:",
        alter_correct:"193.",
        alter_incorrect:[
            "192.",
            "191.",
            "195.",
        ], 
    },
    
    //prova azul
    {
        question:"Podemos considerar como um dos métodos para contenção de hemorragia externa:",
        alter_correct:"Aplicar compressão direta no ferimento, com uma gaze ou pano limpo.",
        alter_incorrect:[
            "Aplicar o torniquete em carotidea.",
            "Pressionar o ferimento até sentir o osso da área lesada.",
            "Abaixar o membro afetado.",
        ], 
    },
    {
        question:"Um motorista defensivo, ao perceber que pode ser prejudicado em seus direitos preferenciais no trânsito, deve;",
        ater_correct:"Ceder seu direito ao motorista errado e evitar o acidente.",
        alter_incorrect:[
            "Procurar o órgão de trânsito competente e realizar denúncia formal.",
            "Ceder o seu direito e, logo à frente, tentar advertir o motorista errado.",
            "Não se preocupar com o outro motorista, pois ele está errado.",
        ], 
    },
    {
        question:"A semana Nacional de trânsito é comemorada anualmente no periodo compreendido entre:",
        alter_correct:"18 e 25 de setembro.",
        alter_incorrect:[
            "16 e 24 de outubro.",
            "17 e 24 de julho.",
            "02 e 10 de agosto.",
        ], 
    },
    {
        question:"Qual dos procedimentos abaixo contribui para o aumento da poluição atmosférica:",
        alter_correct:"Transitar com veículo sem catalisador.",
        alter_incorrect:[
            "Evitar aceleradas bruscas e frenagens excessivas.",
            "Fazer a manutenção periódica do motor do veículo.",
            "Calibrar periodicamente os pneus.",
        ], 
    },
    {
        question:"É dever de todo condutor de veículo, antes de atravessar linha férrea:",
        alter_correct:"Parar o veículo obrigatoriamente, observar e atravessar com cautela.",
        alter_incorrect:[
            "Aumentar a velocidade.",
            "Aumentar a velocidade e buzinar.",
            "Observar atentamente e buzinar.",
        ], 
    },
    {
        question:"A distância de segurança é aquele que permite um tempo para reagir e acionar os freios do veículo de passeio ou leve de modo à pará-lo com segurança. Em condições normais, o tempo para manter a distância segura é de aproximadamente:",
        alter_correct:"Dois segundos.",
        alter_incorrect:[
            "Quarenta segundos.",
            "Cinquenta segundos.",
            "Sessenta segundos.",
        ], 
    },
    {
        question:"Para evitar o ofuscamento pelo excesso de luz solar, o condutor deverá:",
        alter_correct:"Utilizar as palas de proteção interna do veículo (quebra-sol).",
        alter_incorrect:[
            "Desvia a visão para o centro da via.",
            "Desviar a visão para o acostamento da direita ou da esquerda, dependendo da mão de direção em que o condutor se encontra.",
            "Acender os faróis do veículo em luz baixa.",
        ], 
    },
    // {
    //     question:"Qual o nome técnico da placa A-35?",
    //     alter_correct:"Animais.",
    //     alter_incorrect:[
    //         "Animais selvagens.",
    //         "Gado na pista.",
    //         "Cuidado, bovinos.",
    //     ], 
    // },
    {
        question:"Todo condutor de veículo deve dar preferência de passagem ao pedrestre:",
        alter_correct:"Quando ele estiver atravessando fora da faixa.",
        alter_incorrect:[
            "Quando ele estiver concluindo a travessia.",
            "Apenas nas faixas de segurança.",
            "Apenas quando for idoso ou criança.",
        ], 
    },
    {
        question:"Uma forma segura do condutor agir, ao se aproximar de um cruzamento é:",
        alter_correct:"Reduzir a velociade.",
        alter_incorrect:[
            "Aumentar a velocidade.",
            "Parar o veículo.",
            "Buzinar e seguir com atenção.",
        ], 
    },
    // {
    //     question:"Qual o nome técnico da placa R-39?",
    //     alter_correct:"Circulação exclusiva de caminhão.",
    //     alter_incorrect:[
    //         "Área de estacionamento de veículos de carga.",
    //         "Trânsito de veículo de carga.",
    //         "Circulação exclusiva de veículos pesados.",
    //     ], 
    // },
    {
        question:"Ocorrendo um choque com um poste, onde os cabos elétricos de alta voltagem se romperam e ficaram energizados sobre o veículo. Qual é o procedimento mais seguro a ser adotado pelas pessoas que se encontram no interior deste veículo, considerando que os pneus estajam intactos e não haja risco de vazamento de combustivel?",
        alter_correct:"Permanecer no interior do veículo até a chegada de socorro.",
        alter_incorrect:[
            "Sair do veículo, afastando-se imediatemente do local.",
            "Remover os cabos, utilizando-se de uma madeira molhada.",
            "Subir no teto do veículo mantendo-se calçado.",
        ], 
    },
    {
        question:"Nos motores atuais são utilizados dois sistemas de inflamação que são:",
        alter_correct:"Ignição e compressão.",
        alter_incorrect:[
            "Compressão e eletrificação.",
            "Ignição e eletrificação.",
            "Compressão e vaporização.",
        ], 
    },
    {
        question:"Para habilitar-se na categoria 'D', o condutor deverá:",
        alter_correct:"Estar habilitado, no mínimo, há dois anos na categoria 'B', ou há um ano na categoria 'C'.",
        alter_incorrect:[
            "Não ter cometido no último ano duas infrações gravíssimas ou duas graves.",
            "Ser maior de 18 (dezoito) anos.",
            "Estar habilitado no mínimo há um ano na categoria 'B'.",
        ], 
    },
    {
        question:"Poderá ser aplicada penalidade de cassação do documento de habilitação:",
        alter_correct:"Quando o condutor, estando com o direito de dirigir suspenso, conduzir qualquer veículo.",
        alter_incorrect:[
            "Quando o condutor for encontrado dirigindo sob efeito de substância tóxica ou alcoólica, pela primeira vez.",
            "Quando o condutor for encontrado dirigindo sem os documentos de habilitação.",
            "Se o condutor estiver dirigindo com o exame de saúde vencido há mais de 30 (trinta) dias.",
        ], 
    },
    {
        question:"A sinalização horizontal destinada a orientar os sentidos de trânsito, direcionando a circulação dos veículos é denominada de:",
        alter_correct:"Marca de cinalização.",
        alter_incorrect:[
            "Placa de regulamentação.",
            "Marcação da área de conflito.",
            "Quilométrica e de obstrução.",
        ], 
    },
    {
        question:"Tipo de via urbana destinada a coletar e distribuir o trânsito, que tenha necessidade de entrar ou sair das vias de maior fluxo, possibilitando o trânsito dentro das regiões da cidade:",
        alter_correct:"Via coletora.",
        alter_incorrect:[
            "Via arterial.",
            "Via de trânsito rápido.",
            "via local.",
        ], 
    },
    {
        question:"O condutor de veículo destinado à condução de escolares, deverá:",
        alter_correct:"Não ter cometido nenhuma infração grave ou gravíssima, ou ser reincidente em infrações médias durante os doze últimos meses.",
        alter_incorrect:[
            "Ter idade superior a 18 anos.",
            "Ser aprovado no curso destinado para condutores de veículo de transporte coletivo de passageiros.",
            "Ter concluido qualquer curso de nivel superior.",
        ], 
    },
    {
        question:"O sistema que tem a finalidade de alimentar o motor da mistura ar/combustivel, necessária ao seu funcionamento é o de:",
        alter_correct:"Alimentação.",
        alter_incorrect:[
            "Aquecimento.",
            "Lubrificação.",
            "Arrefecimento.",
        ], 
    },
    {
        question:"Para garantir a segurança de todos, em um acidente, o que não podemos fazer?",
        alter_correct:"Iniciar os procedimentos de socorro à vitima, independentemente, de ter sinalizado o local.",
        alter_incorrect:[
            "Sinalizar o local do acidente, a fim de que curiosos não parem seus veículos e obstruam a via.",
            "Manter, dentro do possível, as vias livres para o tráfego fluir.",
            "Iniciar a sinalização em um ponto em que os motoristas ainda não possam ver o acidente.",
        ], 
    },
    {
        question:"Os meios de ação que são utilizados para atingir os objetivos da direção defensiva:",
        alter_correct:"Educação, fiscalização e engenharia.",
        alter_incorrect:[
            "Habilidade e educação.",
            "Meio defensivo.",
            "Engenharia e policiamento.",
        ], 
    },
    // {
    //     question:"Qual o nome técnico da placa S-7?",
    //     alter_correct:"Restaurante.",
    //     alter_incorrect:[
    //         "Serviço sanitário.",
    //         "Hotel.",
    //         "Área de estacionamento.",
    //     ], 
    // },
    {
        question:"Qual a distância recomendada para inciar a sinalização, em uma rua com velocidade máxima permitida de 40 quilômetros por hora, em caso de acidente?",
        alter_correct:"40 passos largos ou 40 metros.",
        alter_incorrect:[
            "30 passos largos ou 30 metros.",
            "50 passos largos ou 50 metros.",
            "20 passos largos ou 20 metros.",
        ], 
    },
    {
        question:"A retenção do veículo, como medida admisnistrativa, é aplicada quando:",
        alter_correct:"o condutor ou passageiro deixar de usar o cinto de segurança, ou até colocá-lo.",
        alter_incorrect:[
            "O condutor dirigir sem atenção e sem os cuidaos indispensáveis à segurança do trânsito.",
            "O condutor deixa de preservar o local do acidente.",
            "O condutor atirar do veículo objetos na via.",
        ], 
    },
    {
        question:"Além de orientar os condutores e pedrestres para obedecerem às Leis de Trânsito, o agente de trânsito deve ainda:",
        alter_correct:"Atuar os infratores para garantir a fluidez e segurança no trânsito.",
        alter_incorrect:[
            "Criar áreas de estacionamento.",
            "Criar leis para os pedrestres e motociclistas.",
            "Criar e ordenar áreas para o estacionamento de veículos.",
        ], 
    },
    {
        question:"Resolver os conflitos sobre circunscrição e competência de trânsito no âmbito dos municípios é atribuição do:",
        alter_correct:"Conselho Estadual de Trânsito (CETRAN).",
        alter_incorrect:[
            "Departamento Estadual de Trânsito (DETRAN).",
            "Departamento Nacional de Trânsito (DENATRAN).",
            "Conselho Nacional de Trânsito (CONTRAN).",
        ], 
    },
    {
        question:"Entendemos a biética como:",
        alter_correct:"Ramo do saber ético que se ocupa dos valores morais de respeito à pessoa humana no campo das ciências da vida.",
        alter_incorrect:[
            "Ramos do saber, pertencente à química, que ocupa dos valores quânticos, no campo das ciências.",
            "Ramo da ciência que estuda o ser vivo.",
            "Ramo do saber que entende ser homem o senhor dos recursos naturais.",
        ], 
    },
    {
        question:"São órgãos de controle ambiental:",
        alter_correct:"IBAMA E CONAMA.",
        alter_incorrect:[
            "Polícia Militar e IBAMA.",
            "FUNAI e IBAMA.",
            "FUNAI, CONAMA e IBAMA.",
        ], 
    },
    {
        question:"O condutor do veículo, ao se deparar com trechos de rodovias onde são frequentes os ventos fortes, deve",
        alter_correct:"Reduzir a velocidade para não perder a estabilidade.",
        alter_incorrect:[
            "Acender a luz baixa do farol.",
            "Diminuir a distância em relação ao veículo da frente.",
            "Aumentar a velocidade para se livrar do trecho com ventos.",
        ], 
    },
        
   //prova cinza
    {
        question:"Sobre trânsito e cidadania, assinale a alternativa INCORRETA:",
        alter_correct:"O principal objetivo do Código de Trânsito Brasileiro é assegurar a aplicação de penalidades aos infratores.",
        alter_incorrect:[
            "E obrigação de todo condutor de veículo adotar um padrão civilizado e respeitar as deficiências de outro usuários da via.",
            "Conviver no trânsito é um exercicio de respeito a todos que circulam nas vias públicas.",
            "As multas são aplicadas quando há violação do direito a um trânsito seguro.",
        ], 
    },
    {
        question:"A sinalização horizontal de cor amarela, que assinala a área da pista, em que os condutores não devem parar e estacionar os veículos, plejudicando a circulação, é denominada de:",
        alter_correct:"Marcação de área de conflito.",
        alter_incorrect:[
            "Faixa de pedrestre tipo zebrada.",
            "Faixa de pedrestre tipo paralela.",
            "Linha de 'dê a preferência.'",
        ], 
    },
    {
        question:"Podemos considerar como um dos métodos para contenção de hemorragia externa:",
        alter_correct:"Aplicar compressão direta no ferimento, com uma gaze ou pano limpo.",
        alter_incorrect:[
            "Manter o torniquete bem apertado.",
            "Aplicar o torniquete em carotidea.",
            "Pressionar o ferimento até sentir o osso da área lesada.",
        ], 
    },
    {
        question:"O procedimento adequada do condutor, ao ser ultrapassado em uma rodivia, é:",
        alter_correct:"Facilitar a ultrapassagem.",
        alter_incorrect:[
            "Sinalizar, diminuir a velociade, deslocar para o acostamento, deixando livre a faixa da direita.",
            "Somente diminuir a velocidade.",
            "Sinalizar para a esquerda, deixando livre a faixa da direita.",
        ], 
    },
    {
        question:"Para evitar os riscos causados pela ofuscamento devido à inclinação da luz solar é adequado ao condutor do veículo:",
        alter_correct:"Todas as alternativas estão corretas.",
        alter_incorrect:[
            "Utilizar óculos protetor (óculos de sol).",
            "Utilizar o quebra-sol (pála de proteção interna).",
            "Reduzir a velocidade.",
        ], 
    },
    {
        question:"O condutor prudente deve:",
        alter_correct:"Manter o veículo em perfeitas condições de uso.",
        alter_incorrect:[
            "Transitar com o pneus abaixo da pressão recomendada pelo fabricante.",
            "Realizar aceleradas bruscas e frenagens com deslizamento de pneus.",
            "Aquecer o motor com o veículo parado.",
        ], 
    },
    {
        question:"Ocorrendo defeito mecânico ou esvaziamento do pneu, o condutor defensivo deve posicionar seu veículo:",
        alter_correct:"No acostamento ou faixa mais à direita, ainda que esteja sujeito a maiores danos no pneu furado, por exemplo.",
        alter_incorrect:[
            "Na faixa mais à direita, sem necessariamente ter que  sinalizar o local.",
            "Solicitar a imediata comunicação com a polícia daquele setor viário.",
            "No local exato onde o veículo foi imobilizado, bastando somente a adequada sinalização do local.",
        ], 
    },
    {
        question:"As faixas da esquerda deverão ser usadas, em uma pista de rolamento com várias faixas de trânsito no mesmo sentido, para:",
        alter_correct:"Veículos de maior velocidade e para ultrapassagem.",
        alter_incorrect:[
            "Circulação dos veículos de passageiro.",
            "Circulação de bicicletas.",
            "Veículos lentos e pesados circularem.",
        ], 
    },
    {
        question:"Quanto à aprendizagem de direção veicular, marque a alternativa correta:",
        alter_correct:"os veículos destinados á formação de condutores serão identificados por uma faixa amarela de vinte centímetros de largura, pintada ao logo da carroceria.",
        alter_incorrect:[
            "Poderá realizar-se em qualquer horário e local, excluindo as redovias.",
            "No veículos de CFC, durante a aula prática de direção, poderão esta o aprendiz, o instrutor e dois acompanhantes.",
            "A licença de aprendizagem será expedida automaticamente após aprovação na prática de direção veicular.",
        ], 
    },
    {
        question:"não se enquadra entre os efeitos danosos do excesso de ruídos:",
        alter_correct:"Relaxamento muscular.",
        alter_incorrect:[
            "Dores de cabeça.",
            "Agitação.",
            "Irritabilidade.",
        ], 
    },
    {
        question:"São consequências da poluição ambiental:",
        alter_correct:"Todas estão corretas.",
        alter_incorrect:[
            "Prejuizos aos solos.",
            "Prejuízos à flora e fauna.",
            "Prejuízos aos rios e aos mares.",
        ], 
    },
    // {
    //     question:"Se houver perigo de incêndio em um veículo acidentado, que atitudes você deve tomar?",
    //     alter_correct:"Afastar curiosos e se for fácil e seguro, desligar o motor do veículo acidentado.",
    //     alter_incorrect:[
    //         "Pegar o extintor e ficar próximo de veículo acidentado.",
    //         "Ficar próximo do veículo acidentado com baldes de água.",
    //         "Caso estaja nervoso fumar no local. para aliviar a tensão.",
    //     ], 
    // },
    {
        question:"Qual o percentual será depositado na conta do fundo de âmbito nacional, das multas de trânsito arrecadadas, administrados pelo DENATRAN, destinado à segurança e educação do trânsito?",
        alter_correct:"5%",
        alter_incorrect:[
            "15%",
            "20%",
            "10%",
        ], 
    },
    {
        question:"Sobre os candidatos á obtenção da CNH, podemos afirmar que:",
        alter_correct:"Os exames de sanidade física e mental, do candidato portador de necessidade especiais, serão realizados por uma junta médica.",
        alter_incorrect:[
            "O candidato com visão monocular poderá exercer atividade remunerada em um ônibus.",
            "O analfabeto com visão monocular poderá se habilitar em qualquer categoria.",
            "O analfabeto poderá obter a CNH, desde que saiba assinar.",
        ], 
    },
    {
        question:"Qual é a função especifica das velas de ignição?",
        alter_correct:"Distribuir centelhas elétricas na câmara de explosão.",
        alter_incorrect:[
            "Acionar os primeiros movimentos de rotação do motor.",
            "Manter a carga da bateria.",
            "Acionar os instrumentos do painel do veículo.",
        ], 
    },
    {
        question:"São tipos de cuidados com relação à direção defensiva:",
        alter_correct:"Previsão mediata ou a longo prazo e previsão imediata ou a curto prazo.",
        alter_incorrect:[
            "Previsão antecipada e previsão principal.",
            "Previsão curta e de extrema duração.",
            "Previsão analógica e sistêmica.",
        ], 
    },
    {
        question:"Qual a velocidade máxima permitida para um automóvel que circula, em uma via trânsio rápido, sem sinalização?",
        alter_correct:"80 km /h.",
        alter_incorrect:[
            "110 km /h.",
            "60 km /h.",
            "100 km /h.",
        ], 
    },
    // {
    //     question:"Qual o nome técnico da placa S-14?",
    //     alter_correct:"Ponto de parada.",
    //     alter_incorrect:[
    //         "Abastecimento.",
    //         "Transporte escolar.",
    //         "Rodoviária.",
    //     ], 
    // },
    {
        question:"De acordo com a Legislação de Trãnsito, os veículos quanto à categoria, classificam-se em:",
        alter_correct:"Oficial, missão diplomática, particular, aluguel e aprendizagem.",
        alter_incorrect:[
            "Oficial, aluguel, passageiro, carga, misto, de tração e competição.",
            "Carga, misto, reboque e sem-reboque.",
            "Oficial, missão diplomática, aluguel, passageiro, carga, misto e de polícia.",
        ], 
    },
    {
        question:"É INCORRETO afirmar que:",
        alter_correct:"O ser humano já domina as forças da natureza.",
        alter_incorrect:[
            "O ser humano pertence a um todo maior, sendo complexo.",
            "A luta pela preservação ambiental é missão de todos.",
            "os homens têm desprezado os seres que com ele convivem no meio ambiente.",
        ], 
    },
    {
        question:"Pneus carecas são um perigo á circulação dos veículos. Para evitar acidentes, os pneus devem ter os sulcos de 1,6 milímetros de profundidade. Qual é a função destes sulcos?",
        alter_correct:"Permitir o escoamento de água em superfícies molhadas.",
        alter_incorrect:[
            "Possibilitar a ventilação do pneus.",
            "Possibilitar o trânsito em superfícies irregulares.",
            "Facilitar as conversões e deslocamentos laterais do veículos.",
        ], 
    },
    // {
    //     question:"Qual o nome técnico da placa A-21e?",
    //     alter_correct:"Alargamento de pista à direita.",
    //     alter_incorrect:[
    //         "Estreitamento de pista à esquerda.",
    //         "Alargamento de pista à frente.",
    //         "Estreitamento de pista à direita.",
    //     ], 
    // },
    {
        question:"Quando receber uma chamada pelo telefone celular, estando com o veículo em movimento, o procedimento correto do condutor é:",
        alter_correct:"Parar o veículo em local seguro e atender a ligação.",
        alter_incorrect:[
            "Atender com a mão esquerda e em alta velocidade.",
            "Atender a ligação.",
            "Atender com a mão direita, segurando firme o volante com a esquerda.",
        ], 
    },
    {
        question:"A cassação do documento de habilitação, ocorrera quando o condutor:",
        alter_correct:"Conduzir qualquer veículo estando suspenso o seu direito de dirigir.",
        alter_incorrect:[
            "Dirigir ameaçando os pedestres, que estejam atravessando a via pública ou os demais veículos.",
            "Dirigir com velocidade superior a velocidade máxima, em mais cinquenta por cento (50%), em uma via coletora.",
            "Dirigir com a CNH vencida, há mais de trinta dias.",
        ], 
    },
    {
        question:"Qual o componente que possibilita a circulação da água entre o motor e o radiodor?",
        alter_correct:"Bomba d'água.",
        alter_incorrect:[
            "Bomba de combustível.",
            "Bomba de Óleo.",
            "Alternador.",
        ], 
    },
    // {
    //     question:"Qual o nome técnico da placa R-23?",
    //     alter_correct:"Conserve-se à direita.",
    //     alter_incorrect:[
    //         "Ónibus, caminhôes e veículos de grande porte mantenham-se à direita.",
    //         "Mantenha-se no acostamento.",
    //         "Circulação exclusiva de caminhões pela direita.",
    //     ], 
    // },
    {
        question:"Os sinais sonoros executados por buzinas, deverão ser em toque breve e destinados para:",
        alter_correct:"Fazer advertências necessárias, a fim de evitar acidentes.",
        alter_incorrect:[
            "Apressar o pedestre para que ele conclua o mais rápido sua travessia.",
            "Apressar os outros veículos que se encontram na via.",
            "Chamar pessoas conhecidas.",
        ], 
    },
    {
        question:"O condutor infrator será submetido a curso de reciclagem, quando:",
        alter_correct:"suspenso do direito de dirigir.",
        alter_incorrect:[
            "Quando absolvido judicialmente por delito de trânsito.",
            "Alterada a sua permissão para dirigir.",
            "Cometer qualquer infração de natureza grave.",
        ], 
    },
    {
        question:"Para ocionar o socorro especializado, ou seja, o Corpo de Bombeiros devemos ligar para o telefone:",
        alter_correct:"193",
        alter_incorrect:[
            "195",
            "190",
            "192",
        ], 
    },
]


//#region Codigo que randomiza questões, alternativas e verifica se acertou ou errou
const getId = (id) => document.getElementById(id);

//------------executa ao apertar play-------------- >
const maxQuests = 10

//randomiza as questão e seleciona a quantidade
let newquest = []
let maxleng = 0
let newQuestion = () =>{
    let new_array = []
    
    //randomiza array
    const randomArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const _rando = Math.floor(Math.random() * (i+1));
            [array[i], array[_rando]] = [array[_rando], array[i]]; //desestruturação de array
        }
        return array
    }

    //cria array randomizada
    let i_quest = function () {
        let temp_array = []
        for (let _t = 0; _t < questions.length; _t++) {
            temp_array.push(_t)
        }
        temp_array = randomArray(temp_array)
        return temp_array
    }  

    new_array = i_quest() //tranforma em array
    
    //console.log(new_array)
    maxleng = new_array.length < maxQuests ? new_array.length : maxQuests;

    //console.log(maxleng)
    for (let e = 0; e < maxleng; e++) {
        
        let alter = []
        alter.push(questions[new_array[e]].alter_correct, ...questions[new_array[e]].alter_incorrect)    

        //randomiza opçoes
        alter = randomArray(alter)

        //cria nova lista
        const obj = {
            question: questions[new_array[e]].question,
            alter_correct: questions[new_array[e]].alter_correct,
            alter: alter
        }
        newquest.push(obj)
    }
    return newquest
}

const container_quest = getId("container_quests")
let newQuestionn = newQuestion()
//console.log(newQuestionn)

let questIndex = 0


renderQuest()

function renderQuest() {
    const temp = questIndex + 1
    const calc = Math.floor((temp / maxQuests) * 100) 

     let progressBar = getId('progressBar')
        progressBar.style.width = `${calc}%`
        if(calc >= 10){
            progressBar.textContent = `${Math.floor(calc / 5) * 5}%`
        }
        


    const btn_next = getId("button_next")
    const btn_result = getId("button_result")  
     if(questIndex === newQuestionn.length-1){

        btn_next.className = "d-none"
        btn_result.className = "d-block btn text-center text-light w-25 bg-warning"
     }else{
         btn_result.className = "d-none"
          btn_next.className = "d-block btn text-center rounded-pill text-light w-25  bg-warning  material-symbols-outlined fs-4 "
         
     }
     
    /*
        total = 30%
        minimo = 2
        100%

    */

    container_quest.innerHTML = `
    <div class="container h-100  d-flex flex-column justify-content-between mb-3 my-10  gap-5 ">
        <!--perguntas-->
        <p class="fs-5 fw-bold"><span>${questIndex + 1} - </span>${newQuestionn[questIndex]?.question}</p>

        <!--questoes-->
         <div  class="mb-5">
            <label class="form-check-label" for="alterRadioA_${questIndex}" id="labelRadioA_${questIndex}">(A) - ${newQuestionn[questIndex]?.alter[0]} <label id="correctionA_${questIndex}"></label> </label> <br>
            <label class="form-check-label" for="alterRadioB_${questIndex}" id="labelRadioB_${questIndex}">(B) - ${newQuestionn[questIndex]?.alter[1]} <label id="correctionB_${questIndex}"></label> </label> <br>
            <label class="form-check-label" for="alterRadioC_${questIndex}" id="labelRadioC_${questIndex}">(C) - ${newQuestionn[questIndex]?.alter[2]} <label id="correctionC_${questIndex}"></label> </label> <br>
            <label class="form-check-label" for="alterRadioD_${questIndex}" id="labelRadioD_${questIndex}">(D) - ${newQuestionn[questIndex]?.alter[3]} <label id="correctionD_${questIndex}"></label> </label> <br>
        </div>

    </div>
        <!-- Botões  -->
        <div class="d-flex justify-content-center gap-2">
            <input type="radio" class="btn-check " name="alterRadio-${questIndex}" id="alterRadioA_${questIndex}" value="A" autocomplete="off">
            <label class="btn btn-outline-warning w-25" for="alterRadioA_${questIndex}">A</label>

            <input type="radio" class="btn-check" name="alterRadio-${questIndex}" id="alterRadioB_${questIndex}" value="B" autocomplete="off">
            <label class="btn btn-outline-warning w-25" for="alterRadioB_${questIndex}">B</label>

            <input type="radio" class="btn-check" name="alterRadio-${questIndex}" id="alterRadioC_${questIndex}" value="C" autocomplete="off">
            <label class="btn btn-outline-warning w-25" for="alterRadioC_${questIndex}">C</label>

            <input type="radio" class="btn-check" name="alterRadio-${questIndex}" id="alterRadioD_${questIndex}" value="D" autocomplete="off">
            <label class="btn btn-outline-warning w-25" for="alterRadioD_${questIndex}">D</label>
        </div>

    `
}

//botão
let radio_select ;
let save_select = []  //salva seleção do radio

const PreviousQuest = () => {
    //guarda o indice
    radio_select = radioSelect(questIndex)

    
    if(save_select[questIndex] !== undefined ){
        save_select[questIndex] = radio_select
    }else{
        save_select.push(radio_select)
    }
    // console.log("save select:",save_select)
    // console.log("save:",radio_select,"i:",questIndex)


    //atualiza indice
  if(questIndex > 0)questIndex -= 1
    renderQuest()
    
    //recupera o indice

    const radion_option = [
        getId(`alterRadioA_${questIndex}`),
        getId(`alterRadioB_${questIndex}`),
        getId(`alterRadioC_${questIndex}`),
        getId(`alterRadioD_${questIndex}`)
    ]
    
    if(save_select[questIndex] !== -1){
        radion_option[save_select[questIndex]].checked = true
    }

}

const NextQuest = () => {
    //guarda o indice
    radio_select = radioSelect(questIndex)

    
    if(save_select[questIndex] !== undefined ){
        save_select[questIndex] = radio_select
    }else{
        save_select.push(radio_select)
    }
   

    //atualiza indice
    if(questIndex < newQuestionn.length-1 ){
        questIndex += 1
        renderQuest()

        //recupera o indice    
        if(save_select[questIndex]  !== undefined ){
            const radion_option = [
                getId(`alterRadioA_${questIndex}`),
                getId(`alterRadioB_${questIndex}`),
                getId(`alterRadioC_${questIndex}`),
                getId(`alterRadioD_${questIndex}`)
            ]    
            if(save_select[questIndex] !== -1){
            radion_option[save_select[questIndex]].checked = true
            }
        }
    }
    

}

/*
   criar uma função para saber qual letra foi selecionada
   - pegar cada letra de cada indice
   - verificar qual que esta marcado
   - retornar qual é o indice que esta marcado e os outros que não esta
*/
function radioSelect(i) {

    const radion_option = [
        getId(`alterRadioA_${i}`).checked,
        getId(`alterRadioB_${i}`).checked,
        getId(`alterRadioC_${i}`).checked,
        getId(`alterRadioD_${i}`).checked
    ]
    // console.log(radion_option)
    // console.log("radion",radion_option.indexOf(true))
    const value = radion_option.indexOf(true)
   return value

}
//#endregion

// resultados ----------------------------------------

/*
    mostrar todos as questoes e resultados na tela
    - atualizar o ultimo valor adiconado
    - enviar resultado para outra tela
    - mudar de tela
*/
function startResult(){

    let nulo_quest = 0
    save_select.forEach((e,i) => {
        if(save_select[i] === -1){ nulo_quest +=1}
    });

    if(nulo_quest >= 3){ return console.debug("Falta questoes para serem respondidas");}

    console.log(save_select)
    console.log(nulo_quest)

    NextQuest()
    localStorage.setItem('questions',JSON.stringify(newQuestionn))
    localStorage.setItem('save_select', JSON.stringify(save_select))
    window.location.href = "./result.html"
}


//executa clicar ver resultado
function refresh() {
    location.reload();
    window.scrollTo({ top: 0, behavior: "instant" });
}

