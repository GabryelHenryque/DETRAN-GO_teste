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
            "Camionetas",
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
            "Grave",
            "Leve",
            "Gravíssima"]  
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
        alter_correct:"Tempo",
        alter_incorrect:[
            "Veículo",
            "Trânsito",
            "Luz"]  
    },
    {
        question:"São condições adversas de via:",
        alter_correct:"Os desvios e os buracos.",
        alter_incorrect:[
            "O morro e o granizo",
            "O granizo e a pista escorregadia",
            "A chuva e a neblina"]  
    },
    {
        question:"Ao dirigir com chuva, o condutor deve manter, pelo menos:",
        alter_correct:"Luzes de posição acesas",
        alter_incorrect:[
            "Pisca-alerta aceso",
            "Faróis altos acesos",
            "Luzes de posição apagadas"]  
    },
    {
        question:"Ao se aproximar de um cruzamento, uma forma de segura de agir do condutor é:",
        alter_correct:"Reduzir a velocidade",
        alter_incorrect:[
            "Acionar a buzina",
            "Manter a mesma velocidade",
            "aumentar a velocidade"]  
    },
    {
        question:"Congestionamento é considerado condição adversa de:",
        alter_correct:"Trânsito",
        alter_incorrect:[
            "Motorista",
            "Rodovias",
            "Vias"]  
    },
    {
        question:"Atos de imperícia de condutor são ocasionados por:",
        alter_correct:"falta de habilidade.",
        alter_incorrect:[
            "Desobediência à sinalização",
            "Dirigir com sono",
            "Dirigir sob efeito de álcool"]  
    },
    {
        question:"Ao atender uma vítima de sinistro, o indivíduo que presta socorro tem como finalidade principal:",
        alter_correct:"Preservar a vida",
        alter_incorrect:[
            "Diminuir as lesões.",
            "Transportar para o hospital",
            "Aliaviar a dor."]  
    },
    {
        question:"As hemorragias são classificadas em:",
        alter_correct:"Interna e externa.",
        alter_incorrect:[
            "Arterial e venosa",
            "Arterial e nasal",
            "Interna e arterial"]  
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
        alter_correct:"Escapamento aberto e aparelhos de som",
        alter_incorrect:[
            "Baterias com vazamentos",
            "Combustível adulterado.",
            "carcaça de pneus usados."]  
    },
    {   
        question:"Nos grandes centros urbanos, os principais causadores de polioção do ar são:",
        alter_correct:"Os veículos automotores e indústrias.",
        alter_incorrect:[
            "As fábricas.",
            "As usinas termelétricas.",
            "As queimadas."]  
    },
    {   
        question:"A proteção do meio ambiente:",
        alter_correct:"è o objetivo fundamental das leis e normas ambientais.",
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
            "Favorece a estabilidade em curvas.",
            "Aumenta sua vida útil."]  
    },
    {   
        question:"O excesso de fumaça eliminado pelos motores de combustão pode ser indentificado:",
        alter_correct:"Pelo escapamento",
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
    
    
]

const getId = (id) => document.getElementById(id);
//------------executa ao apertar play-------------- >

//randomiza as questão e seleciona a quantidade
let newQuestion = () =>{
    let newQuestions = []

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
        return temp_array
    }  
    i_quest = i_quest()

    //cria array atualizada
    for (let _i = 0; _i < (temp = questions.length <= 30 ? questions.length : 30); _i++) {
        //cria array
        const alter = []
        alter.push(questions[i_quest[_i]].alter_correct, ...questions[i_quest[_i]].alter_incorrect)
        randomArray(alter)
        //cria objeto
        const obj = {
            question:questions[i_quest[_i]].question,
            alter_correct:questions[i_quest[_i]].alter_correct,
            alter:alter
        }
        //adiciona tudo dentro de uma array
        newQuestions.push(obj)  
    }
 
   // newQuestions = randomArray(newQuestions)

    return newQuestions
}


const container_quest = getId("container_quests")
let correction = ""


newQuestion().forEach( (e,i) => {
    container_quest.innerHTML += `
    <div class="container shadow-sm mb-4  bg-light ">
        <p class="fs-5"><span>${i + 1} - </span>${e.question}</p>
        <!--questoes-->
        
            <div class="form-check" >
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioA_${i}" value="${e.alter[0]} ">
                <label class="form-check-label" for="alterRadioA_${i}" id="labelRadioA_${i}" >A - ${e.alter[0]} </label>
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
    newQuestion().forEach((e,i)=>{

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

        const checked = (radio,form,label) =>{
            let checkedd = radio.value
            radio.disabled = true
            if(radio.checked){
                if(checkedd === e.alter_correct){
                    form.innerText = "✓";
                    form.style.color = "green";
                    label.style.backgroundColor = "rgba(1, 230, 47, 0.14)";
                    point += 1
                }else{
                    label.style.backgroundColor = "rgba(203, 0, 0, 0.14)";
                }
            }else if(checkedd === e.alter_correct){ 
                form.innerText = "✕"
                form.style.color = "red"
            }else{
                  form.innerText = "-"
            }


        }

        checked(radion_A,form_A,label_A)
        checked(radion_B,form_B,label_B)
        checked(radion_C,form_C,label_C)
        checked(radion_D,form_D,label_D)

    })

     //texto
     const title = getId('title').textContent = "RESULTADO"
     const point_id = getId('point_id')
     point_id.textContent = `${point}/30`
     if(point <= 22){
        point_id.style.color = "red"
     }else {
        point_id.style.color = "green"
     }
}


