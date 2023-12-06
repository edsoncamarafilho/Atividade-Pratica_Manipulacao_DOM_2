let cards = document.querySelectorAll('.cards')
let textCards = document.querySelectorAll('.titulo-card');
let descriptionCards =  document.querySelectorAll('.descricao-card')
let editButton = document.querySelectorAll(".botao-editar") 
let deleteButton = document.querySelectorAll('.botao-apagar')

function editarCard() {
    alert('Clicou em Editar :)')
}

function apagarCard () {
    let perguntar = confirm('Você tem certeza que quer apagar o card?')

    if (perguntar) {
        alert('Confirmado')
    } else {
        alert ('Cancelou')
    }
}


textCards.forEach(function(textCard) {
    textCard.innerHTML = 'Meu card';
});


descriptionCards.forEach(card =>{
    card.innerHTML = 'Descrição modificada pelo JavaScript';
    card.style.margin = '30px'
    card.style.textAlign = 'center'
    card.style.color = 'white'
})

editButton.forEach(card =>{
    card.style.color = 'white';
    card.style.backgroundColor = 'green'
    card.style.borderRadius = '20px'
    card.style.padding = '10px'
    card.style.cursor = 'pointer'
    card.setAttribute('onclick', 'editarCard()')

})

deleteButton.forEach(card =>{
    card.style.color = 'white';
    card.style.backgroundColor = 'red'
    card.style.borderRadius = '20px'
    card.style.padding = '10px'
    card.style.cursor = 'pointer'
    card.setAttribute('onclick', 'apagarCard()')
})