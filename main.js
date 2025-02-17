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

    //cria array randomizada
    let i_quest = function () {
        let temp_array = []
        for (let _t = 0; _t < questions.length; _t++) {
            temp_array.push(_t)
        }
        return temp_array
    }  
    i_quest = i_quest()


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
//randomiza array
function randomArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const _rando = Math.floor(Math.random() * (i+1));
        [array[i], array[_rando]] = [array[_rando], array[i]]; //desestruturação de array
    }
    return array
}

//-----------executa ao responder pegunta

// let a = newQuestions()
// console.log(a[0])
// console.log(a[0].alter.findIndex(i => i === a[0].alter_correct))




