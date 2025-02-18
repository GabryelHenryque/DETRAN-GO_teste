const questions = [
    {
        question:"Gabriel é bonito?",
        alter_correct:"Gatão",
        alter_incorrect:[
            "lindo",
            "bonitão",
            "meio bonito"]
    },{
        question:" é bonita?",
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
    for (let _i = 0; _i < 2 ; _i++) {
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
newQuestions().forEach( (e,i) => {

    container_quest.insertAdjacentHTML ('afterbegin', `
    <div class="container shadow-sm mb-4  bg-light ">
        <p class="fs-5"><span>${i + 1} - </span>${e.question}</p>
        <!--questoes-->
        
        <div class="form-check ">
            <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioA_${i}">
            <label class="form-check-label" for="alterRadioA_${i}">A - ${e.alter[0]}
            
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioB_${i}" >
            <label class="form-check-label" for="alterRadioB_${i}">B - ${e.alter[1]}
                
            </label>
            </div>

            <div class="form-check">
            <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioC_${i}">
            <label class="form-check-label" for="alterRadioC_${i}">C - ${e.alter[2]}
            
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="alterRadio-${i}" id="alterRadioD_${i}" >
            <label class="form-check-label" for="alterRadioD_${i}">D - ${e.alter[3]}

            </label>
            </div>
    </div>
    ` )
});





console.log(newQuestions()[0].alter[0])




//-----------executa ao responder pegunta

// let a = newQuestions()
// console.log(a[0])
// console.log(a[0].alter.findIndex(i => i === a[0].alter_correct))




