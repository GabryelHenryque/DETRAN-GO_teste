/*
    mostrar o resultado para o usuario verificando
    se esta certo ou errado e a questões
     -- recuperar seleção das questoes
     -- comparar com a questão correta
     -- separar em cores as corretas, erradas e selecionadas
     -- mostrar para o usuario se ele foi aprovado ou reprovado
     -- mostrar todas as questoes e alternativas com sua devida cor
*/
const getId = (id) => document.getElementById(id);

//recuperar dados -----------
const save_select = JSON.parse(localStorage.getItem('save_select'))
const questions = JSON.parse(localStorage.getItem('questions'))

//console.log(questions);


// gerar questoes ---------
let point = questions.length
const container_quest = getId("container_quests")

questions.forEach((e,i)=> {

    container_quest.innerHTML += 
    `
    <div class="container shadow-sm my-4 py-4  bg-body d-flex flex-column gap-4">
                    <!--perguntas-->
        <p class="fs-6 fw-bold">${i+1} - <span>${e?.question}</p>

        <!--questoes-->
         <div  class="mb-5 mx-2">
            <label class="w-100 mb-2" id="labelRadioA_${i}">(A) - ${e?.alter[0]} </label> <br>
            <label class="w-100 mb-2" id="labelRadioB_${i}">(B) - ${e?.alter[1]} </label> <br>
            <label class="w-100 mb-2" id="labelRadioC_${i}">(C) - ${e?.alter[2]} </label> <br>
            <label class="w-100 mb-2" id="labelRadioD_${i}">(D) - ${e?.alter[3]} </label> <br>
        </div>
    </div>
    `

 
    //verificar qual cor em cada label tem que entrar ------------------
    const correct_index = questions[i]?.alter.indexOf(questions[i]?.alter_correct)
    const correct = optionSelect(i,correct_index)
    if(save_select[i] === -1){
        correct.style.border = "solid 2px rgba(203, 169, 0, 0.63)"
    
        //return console.log("[",i,"]","default")
         
    }
    

    const id_label = optionSelect(i,save_select[i])
    
    if (questions[i]?.alter[save_select[i]] === questions[i]?.alter_correct){
        //console.log("[",i,"]","correto")
        id_label.style.backgroundColor = "rgba(1, 230, 47, 0.14)"
    
    }else{
        //console.log("[",i,"]","errado")
        if (id_label !== undefined){
            id_label.style.backgroundColor = "rgba(203, 0, 0, 0.14)"
         }
        correct.style.border = "solid 2px rgba(203, 169, 0, 0.63)"
        point -= 1
    }
    
     
     
});



const maxleng = questions.length
const contmax = Math.round((75/100) * maxleng);
const result_id_1 =  getId("result_1")
const result_id_2 =  getId("result_2")

//console.log(`resultado: ${point}/${maxleng}, ${contmax}`);
if(point < contmax){
    result_id_1.innerHTML = `Reprovou<br>${point}/${maxleng}`
    result_id_2.innerHTML = `Reprovou<br>${point}/${maxleng}`
 

    result_id_1.style.backgroundColor = "rgba(203, 0, 0, 0.14)"
    result_id_2.style.backgroundColor = "rgba(203, 0, 0, 0.14)"


}else{
    result_id_1.innerHTML = `Passou<br>${point}/${maxleng}`
    result_id_2.innerHTML = `Passou<br>${point}/${maxleng}`


    result_id_1.style.backgroundColor = "rgba(1, 230, 47, 0.14)"
    result_id_2.style.backgroundColor = "rgba(1, 230, 47, 0.14)"

}

//console.log(a)


function optionSelect(option,i) {

    const option_list = [
        getId(`labelRadioA_${option}`),
        getId(`labelRadioB_${option}`),
        getId(`labelRadioC_${option}`),
        getId(`labelRadioD_${option}`)
    ]
    return option_list[i]
}


/*esse sem duvida foi o codigo mais feio da minha vida. Algum dia volto 
e refatoro.
esta faltando fazer algumas coisas:
    - separar as questoes do codigo font
    - organizar as questoes  em topicos
    - adicionar questoes de placa e imagems
    - criar filtro de questoes
        - filtrar por topico
        - dificuldade de questões
        - 
    - criar tabela das questoes selecionadas
    */