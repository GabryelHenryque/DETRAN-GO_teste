const questions = [
    {
        question:"Gabriel é bonito?",
        alter_correct:"Gatão",
        alter_incorrect:[
            "lindo",
            "bonitão",
            "meio bonito"]
    },{
        question:"Joyce é bonita?",
        alter_correct:"feia",
        alter_incorrect:[
            "fedida",
            "horrorosa",
            "um pouco"]
    }, 
]

//question[random].alter ==== [horrorosa,fedida,pouco,feia]




//------------executa ao apertar play-------------- >

//randomiza as questão e seleciona a quantidade
let newQuestions = () =>{
    let newQuestions = []

    //randomiza array
    const randomArray = (array) => {
        for (let i = array.length - 1; i >= 0; i--) {
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

    return newQuestions
}


//newQuestions()[0].question

const getId = (id) => document.getElementById(id);
const container_quest = getId("container_quests")
let correction = ""
newQuestions().forEach( (e,i) => {
    container_quest.innerHTML += `
    <div class="container shadow-sm mb-4  bg-light ">
        <p class="fs-5"><span>${i + 1} - </span>${e.question}</p>
        <!--questoes-->
        
            <div class="form-check" >
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioA_${i}" value="${e.alter[0]} ">
                <label class="form-check-label" for="alterRadioA_${i}">A - ${e.alter[0]} </label>
                <label id="correctionA_${i}"></label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioB_${i}" value="${e.alter[1]}">
                <label class="form-check-label" for="alterRadioB_${i}">B - ${e.alter[1]}</label>
                <label id="correctionB_${i}"></label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioC_${i}" value="${e.alter[2]}">
                <label class="form-check-label" for="alterRadioC_${i}">C - ${e.alter[2]}</label>
                <label id="correctionC_${i}"></label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioD_${i}" value="${e.alter[3]}">
                <label class="form-check-label" for="alterRadioD_${i}">D - ${e.alter[3]}</label>
                <label id="correctionD_${i}"></label>
            </div>
    </div>
    `

});
container_quest.innerHTML += `
    <div class="text-center">
        <input class="btn text-center text-light w-25" style="background-color: #EF7C00;" type="submit" value="Enviar" id="myInput" data-bs-toggle="modal" data-bs-target="#exampleModal">
    </div>`;


//executa clicar ver resultado

function startResult() {
    let array_corect = []
    let array_option = ["A","B","C","C"] 
    newQuestions().forEach((e,i)=>{

        const radion_A = getId(`alterRadioA_${i}`)
        const radion_B = getId(`alterRadioB_${i}`)
        const radion_C = getId(`alterRadioC_${i}`)
        const radion_D = getId(`alterRadioD_${i}`)

        const form_A = getId(`correctionA_${i}`)
        const form_B = getId(`correctionB_${i}`)
        const form_C = getId(`correctionC_${i}`)
        const form_D = getId(`correctionD_${i}`)

        let checkedd = null;
        const checked = (radio,form) =>{
            
            if(radio.checked){
                checkedd = radio.value
                radio.disabled = true
                if(checkedd === e.alter_correct){
                    form.innerText = "✓"
                    form.style.color = "green"
                }
            }else{
                radio.disabled = true  
                checkedd = radio.value
                if(checkedd === e.alter_correct){
                    form.innerText = "✕"
                    form.style.color = "red"
                }
            }
            
        }

        checked(radion_A,form_A)
        checked(radion_B,form_B)
        checked(radion_C,form_C)
        checked(radion_D,form_D)


       

    })
     //texto
     const title = getId('title')
     title.textContent = "RESULTADO"

    console.log(array_corect)
   
}




//console.log(newQuestions()[0].alter[0])




//-----------executa ao responder pegunta

// let a = newQuestions()
// console.log(a[0])
// console.log(a[0].alter.findIndex(i => i === a[0].alter_correct))




