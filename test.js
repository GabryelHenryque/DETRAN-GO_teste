const questions = [
    {
        question:"A placa R-2 assinala ao condutor:",
        alter_correct:"Dê a preferência",
        alter_incorrect:[
            "Sentido obrigatório.",
            "Parada obrigatória.",
            "Uso obrigatório da luz de alerta."]  
    },
    {
        question:"A placa A-12 Adverte o condutor sobre:",
        alter_correct:"Intersecção em círculo.",
        alter_incorrect:[
            "Saliência ou lombada.",
            "Sentido circular da via.",
            "Sentido obrigatório."]  
    },
    {
        question:"A placa R-7 assinala ao condutor:",
        alter_correct:"Proibido ultrapassar.",
        alter_incorrect:[
            "Proibido ultrapassar pela direita.",
            "Proibido ultrapassar ciclista.",
            "Proibido ultrapassar pela esquerda."]  
    },
    {
        question:"A placa A-33b adverte o condutor sobre:",
        alter_correct:"Passagem sinalizada de escolares.",
        alter_incorrect:[
            "Passagem de pedestres.",
            "Área escolar.",
            "Passagem sinalizada de pedestres."]  
    },
    {
        question:"Os requisitos necessários, dentro outros, para obter a C.N.H. são:",
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
        alter_correct:"Rodobias.",
        alter_incorrect:[
            "Estradas.",
            "Vias coletoras.",
            "Vias de trânsito rápido."]  
    },
    {
        question:"A cada infração gravíssima são computados no protuário do condutor:",
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
        question:"Ao se aproximar de um cruzamento, uma forma de segura de agir do condutor é:",
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
        alter_correct:"Bombeiros: 193, SAMU:192, Polícia: 190.",
        alter_incorrect:[
            "Bombeiros: 190, SAMU: 192, Polícia: 191.",
            "Bombeiros: 193, SAMU: 191, Polícia: 190.",
            "Bombeiros; 190, SAMU: 193, Polícia: 191."]  
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
            "As usinas termelétrica.",
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
        alter_correct:"Tolerância",
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
        question:"A baixo calibragem dos pneus:",
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
        question:"De onde provém a eletricidade necessária para ocionar o motor de arranque?",
        alter_correct:"Da bateria.",
        alter_incorrect:[
            "Do alternador.",
            "Da ignição eletrônica",
            "Das velas"]  
    },
    
    
    //prova laranja
    {   
        question:"Para acionar a Polícia Rodoviária Federal, devemos ligar para o telefone:",
        alter_correct:"191",
        alter_incorrect:[
            "192",
            "195",
            "190"]  
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
            "Manter a velociade do seu veículo menos que a velocidade máxima permitida para a via.",
            "Dar sinal de luz para o veículo que vai à frente.",
            "Ultrapassá-lo no menos tempo possível."]  
    },
    {   
        question:"Em que tipo de refrigeração, o motor utiliza o termômetro?",
        alter_correct:"A água.",
        alter_incorrect:[
            "A ar condicionado.",
            "A ar.",
            "Elétrica."]  
    },
    {   
        question:"Em rodovias, sem local apropriado para retorno ou para entrar á esquerda, o condutor deverá aguardar a oportunidade para cruzar a pista, parando o veículo:",
        alter_correct:"No acostamento, à direita.",
        alter_incorrect:[
            "À esquerda da pista.",
            "No centro da pista, na faixa divisória dos fluxo.",
            "No local em que considerar como o mais seguro."]  
    },
    {   
        question:"Qual o nome técnico da placa R-38",
        alter_correct:"Proibido trânsito de ônibus.",
        alter_incorrect:[
            "Proibido trânsito de veículo de carga.",
            "Proibido trânsito de veículos de passageiros,",
            "Proibido trânsito de caminhões."]  
    },
    {   
        question:"Para trafegar com margem de segurança, a atitude correta do condutor depende de:",
        alter_correct:"Observação, previsão e decisão.",
        alter_incorrect:[
            "Conservação do veiculo, técnica, decisão e fones de ouvido.",
            "Conservação do veículo e da posição da cabeça.",
            "Do aumento da velocidade, das condiçães das vias e dos fatores externos."]  
    },
    {   
        question:"É proibudi a todo condutor de veículo:",
        alter_correct:"Usar a buzina entre vinte e duas e seis horas.",
        alter_incorrect:[
            "Dirigir com as duas mãos no volante.",
            "Usar o cinto de segurança.",
            "Transitar com farol baixo em vias com iluminação pública."]  
    },
    {   
        question:"De acordo com a Lesgislação de Trânsito em vígor, o tempo da parada do veiculo deve ser:",
        alter_correct:"O necessário para efetuar o embarque e desembarque de passageiros.",
        alter_incorrect:[
            "O necessário para a carga e descarga, e embarque e desembarque de passageiros.",
            "Depende do agente de trânsito.",
            "De acordo com a necessidade de condutor."]  
    },
    {   
        question:"Qual o nome técnico da placa S-3?",
        alter_correct:"Serviço mecânico.",
        alter_incorrect:[
            "Loja de ferragens.",
            "Oficina autorizada.",
            "Área de manutenção."]  
    },
    {   
        question:"Se houver perigo de incêndio em um veículo acidentado, que atitudes vocÊ deve tornar?",
        alter_correct:"Afastar curiosos e se for fácil e seguro, desligar o motor do veículo acidentado.",
        alter_incorrect:[
            "Ficar próximo do veículo acindentado com baldes de água.",
            "Caso estaja nervoso fumar no local, para aliviar a tensão.",
            "Aguardar junto ao veículos acidentado a chegada di corpo de bombeiros."]  
    },
    {   
        question:"O equipamento de segurança do veículo, cuja finalidade é limitar a movimentação dos ocupantes deste, em caso de acidentes ou em freadas bruscas é o:",
        alter_correct:"Cinto de segurança.",
        alter_incorrect:[
            "Sistema de travamento dos bancos de veículo.",
            "Freio de serviço.",
            "Cinto de árvore de transmissão."]  
    },
    {   
        question:"Qual o nome técnico da placa A-23?",
        alter_correct:"Ponte móvel.",
        alter_incorrect:[
            "Ponte estreita.",
            "Confluência ao centro.",
            "Divisão de pista."]  
    },
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
        alter_correct:"100 passos largos ou 100 metros",
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
        alter_correct:"A partir de cinquenta centímetros.",
        alter_incorrect:[
            "A partir de trinta centímetros.",
            "Somente a partir de um metro e cinquenta centímetros.",
            "A partir de quarenta centímetros."]  
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
        question:"Sobre a circulação de ciclimotor é correto afirmar.",
        alter_correct:"Este veículo deve ser conduzido pela direita da pista de rolamento.",
        alter_incorrect:[
            "A utilização do capacete não é obrigatória nestes veículos.",
            "É proibida sua circulação em vias arterials e coletoras.",
            "Não é permitido transportar passageiro neste veículo."]  
    },
    {   
        question:"Produtos perigosos são aqueles que:",
        alter_correct:"Apresentam risco ao meio ambiente.",
        alter_incorrect:[
            "Podemos consumr sem perigo para a vida.",
            "São preparados somente para tranquilizar.",
            "São recomendados pelos médicos."]  
    },
    {   
        question:"Se por motivo de força maior, o recurso interposto junto a JARI, não for julgado no prazo de 30 dias, a autoridade responsável pela penalidade, de oficio ou por solicitação do recrrente:",
        alter_correct:"Concederá efeito suspensivo.",
        alter_incorrect:[
            "Remeterá o recurso para instância superior.",
            "Julgará o registro do auto de infração.",
            "Arquivará o auto de infração."]  
    },
    {   
        question:"A carteira Nacional de Habilitação permite ao condutor.",
        alter_correct:"Dirigir veículos automotores para os quais foi habilitado, em tod o território nacional.",
        alter_incorrect:[
            "Dirigir veiculos automotor apenas até 3.500 kg.",
            "Dirigir veiculos automotores para os quais foi habilitado, apenas na localidade onde foi emitida.",
            "Dirigir qualquer tipo de veiculo automotor em todo o território nacional."]  
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
        alter_correct:"Os veiculos automotores.",
        alter_incorrect:[
            "As usinas termoelétricas.",
            "As queimadas.",
            "Os veículos elétricos."]  
    },
    {   
        question:"O condutor prudente deve:",
        alter_correct:"Manter o veiculo em perfeitas condições de uso.",
        alter_incorrect:[
            "Acelerar bruscamente ao efetuar as trocas de marcha.",
            "Transitar com os pneus abaixo de pressão recomendada pelo fabricante.",
            "Realizar aceleradas bruscas e frenagens com deslizamento de pneus."]  
    },
    {   
        question:"É dever de todo condutor de veiculo:",
        alter_correct:"transitar com velocidade máxima permitida para a vía, diante de escolar e onde haja grande movimentação de pedestres.",
        alter_incorrect:[
            "Trocar a placa do veículo por ocasião da transferência de proriedade.",
            "Guardar distância de segurança lateral e frontal entre o seu e os demais veículos, bem como em relação ao borda da pista.",
            "Nass  vias urbanas, posicionar-se mais à direita da via, quando for entrar para a esquerda em via de sentido único."]  
    },
    {   
        question:"Qual o nome técnico da placa R-6C?",
        alter_correct:"Proibido parar e estacionar.",
        alter_incorrect:[
            "Estacionamento regulamentado.",
            "Proibido parada.",
            "Proibido estacionar."]  
    },
    {   
        question:"A respeito da faixa horizontal dos veículos destinados ao transporte escolar, é correto afirmar que:",
        alter_correct:"Deverá ser de cor preta quando a carroceria do veiculo for pintada na cor amarela.",
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
        alter_correct:"Fazer uma manobra de emergência, quando houver necessidade, como frear ou desviar o veiculo de outro.",
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
    {   
        question:"Qual o nome técnico da placa S-4?",
        alter_correct:"Abastecimento.",
        alter_incorrect:[
            "Restaurante.",
            "Pronto Socorro.",
            "Serviço sanitário."]  
    },
    {   
        question:"Os meios de ação que são utilizados para atingir os objetivos da direção defensiva:",
        alter_correct:"Educação, fiscalização e engenharia.",
        alter_incorrect:[
            "Engenharia e policiamento.",
            "Engenharia e conhecimento.",
            "Meio defensivo."]  
    },
    {   
        question:"O veículo automotor de transporte coletivo com capacidade para ate vinte passageiros é o:",
        alter_correct:"Microônibus",
        alter_incorrect:[
            "ônibus bi-articulado.",
            "ônibus.",
            "Trem."]  
    },
    {   
        question:"Quais são os erros mais comuns que ocorrem ao dirigir um veiculo automor e que podem gerar acidente?",
        alter_correct:"Infrações do trânsito, atraso de horário e falta de cortesia.",
        alter_incorrect:[
            "Falta de cortesia e concentração.",
            "Direção agrssiva e habilidade.",
            "Direção defensiva e falta de cortesia."]  
    },
    {   
        question:"O movimento executado pelo condutor parar alterar a posição em que o veículo está no momento em relação à via, denomina-se:",
        alter_correct:"Manobra.",
        alter_incorrect:[
            "Estacionamento.",
            "Transposição de faixa.",
            "Conversão."]  
    },
    {   
        question:"Qual a distância recomendada para inciar a sinalização, em uma avenida com velocidade máxima permitida de 60 quilo",
        alter_correct:"",
        alter_incorrect:[
            "",
            "",
            ""]  
    },
]

//#region Codigo que randomiza questões, alternativas e verifica se acertou ou errou
const getId = (id) => document.getElementById(id);

//------------executa ao apertar play-------------- >

//randomiza as questão e seleciona a quantidade
let newquest = []
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
    
    for (let e = 0; e < 30; e++) {
        
        let alter = []
        alter.push(questions[e].alter_correct, ...questions[e].alter_incorrect)    

        //randomiza opçoes
        alter = randomArray(alter)
        //cria nova lista
        const obj = {
            question: questions[e].question,
            alter_correct: questions[e].alter_correct,
            alter: alter
        }
        newquest.push(obj)
    }
    return newquest
}

const container_quest = getId("container_quests")
let newQuestionn = newQuestion()

newQuestionn.forEach( (e,i) => {
    container_quest.innerHTML += `
    <div class="container shadow-sm mb-4  bg-light ">
        <p class="fs-5"><span>${i + 1} - </span>${e.question}</p>
        <!--questoes-->
        
            <div class="form-check" >
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioA_${i}" value="${e.alter[0]}">
                <label class="form-check-label" for="alterRadioA_${i}" id="labelRadioA_${i}">A - ${e.alter[0]}</label>
                <label id="correctionA_${i}"></label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioB_${i}" value="${e.alter[1]}">
                <label class="form-check-label" for="alterRadioB_${i}" id="labelRadioB_${i}">B - ${e.alter[1]}</label>
                <label id="correctionB_${i}"></label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioC_${i}" value="${e.alter[2]}">
                <label class="form-check-label" for="alterRadioC_${i}" id="labelRadioC_${i}">C - ${e.alter[2]}</label>
                <label id="correctionC_${i}"></label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioD_${i}" value="${e.alter[3]}">
                <label class="form-check-label" for="alterRadioD_${i}" id="labelRadioD_${i}">D - ${e.alter[3]}</label>
                <label id="correctionD_${i}"></label>
            </div>
    </div>
    `
});
container_quest.innerHTML += `
    <div class="text-center">
        <input class="btn text-center text-light w-25" style="background-color: #EF7C00;" type="submit" value="Enviar" id="myInput" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span id="point_id"><span>
    </div>`
    ;


//executa clicar ver resultado
function startResult() {
    point = 0;
    newQuestionn.forEach((e,i)=>{
        
        const radion_A = getId(`alterRadioA_${i}`)
        const radion_B = getId(`alterRadioB_${i}`)
        const radion_C = getId(`alterRadioC_${i}`)
        const radion_D = getId(`alterRadioD_${i}`)

        const form_A = getId(`correctionA_${i}`)
        const form_B = getId(`correctionB_${i}`)
        const form_C = getId(`correctionC_${i}`)
        const form_D = getId(`correctionD_${i}`)

        const label_A = getId(`labelRadioA_${i}`)
        const label_B = getId(`labelRadioB_${i}`)
        const label_C = getId(`labelRadioC_${i}`)
        const label_D = getId(`labelRadioD_${i}`)

        function checked(radion,form,label) {
            radion.disabled = true
            const check = radion.checked
            console.log("check",check)
            if(check){
                if(radion.value == e.alter_correct){
                    label.style.backgroundColor = "rgba(1, 230, 47, 0.14)";
                    form.innerText = "✓";
                    form.style.color = "green";
                    point ++
                }else{
                    label.style.backgroundColor = "rgba(203, 0, 0, 0.14)";
                  
                }
                console.log(e.alter_correct == radion.value, "id:",radion.value)
            }else if(radion.value == e.alter_correct){ 
                    form.innerText = "✕"
                    form.style.color = "red"
                }
        }

        checked(radion_A,form_A,label_A)
        checked(radion_B,form_B,label_B)
        checked(radion_C,form_C,label_C)
        checked(radion_D,form_D,label_D)

    })

     //texto
     getId('title').textContent = "RESULTADO"
     const point_id = getId('point_id')
     point_id.textContent = `${point}/30`
     if(point <= 22){
        point_id.style.color = "red"
     }else {
        point_id.style.color = "green"
     }
     console.log(point)
  
}

//#endregion