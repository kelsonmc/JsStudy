

//seletor de Estado
function populateUFs (){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {

            for( const state of states){
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
           
        })
}
populateUFs()

//------------------------------------------------------------------

//seletor de Cidade
function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then ( res => res.json() )
        .then ( cities => {


            for(const city of cities){
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
            }
            citySelect.disabled = false;
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
//------------------------------------------------------------------

//itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")


for ( const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    //verificar se existem selecionados, se sim pega-los...
    const itemId = itemLi.dataset.id
    const alreadySelected = selectedItems.findIndex( item => item == itemId )

    //se ja estao tira fora
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter( item => item != itemId )
    
    //se nao bota
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)

    }
    //att o hidden
    collectedItems.value = selectedItems
    
}
//------------------------------------------------------------------