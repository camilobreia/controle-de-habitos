const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form) // SERVE PARA INICIAR A BIBLIOTECA
const button = document.querySelector('header button')

button.addEventListener('click', add) //quando clicar no botão, executa a função add

form.addEventListener('change', save) //quando houver alteração no form irá executar a função save

function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) 
    //slice serve para recortar a string
    const dayExists = nlwSetup.dayExists(today) // true or false se o dia já existir

    if (dayExists) {
        alert('Dia já incluso')
        return
    }

    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) // para salvar os dados no browser => JSON.stringify serve para converver o OBJECT data em STRING
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

// || {} => serve para evitar erro no 1º uso, já que no 1º uso não há nenhum dado para ser pego do localStorage, então cria um objeto vazio

//JSON.parse serve para converter de volta em OBJECT => CONST DATA serve para pegar as informações do LocalStorage, transformar em Objeto e guardar na constante DATA

nlwSetup.setData(data)
nlwSetup.load()

// Load - carrega os dados internos e renderiza o layout

/* const data = {
    run: ['01-01', '01-02', '01-06'], 
    water: ['01-04', '01-05'],
    gym: ['01-01', '01-03'],
    sleep: ['01-05', '05-01'],
    dog: ['01-02', '05-01'],
    food: ['01-03', '05-01'],
}

ESTA PARTE DO CÓDIGO SOMENTE EXPLICATIVA - DESCONSIDERAR

*/
