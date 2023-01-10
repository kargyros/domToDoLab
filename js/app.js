
// --==Cached element references==--

const itemElement = document.getElementById('firstId')
const buttonElement = document.getElementById('submit-button')
const listElement = document.getElementById('todo-list')
const resetButtonElement = document.getElementById('reset-button')

// --==Event Listeners==--

buttonElement.addEventListener('click', function (event){ 
  if (itemElement.value === "") 
  return null //disallows empty items to be added
  const newLi = document.createElement('li')
  newLi.textContent = itemElement.value
  listElement.appendChild(newLi)
  itemElement.value = ''
})

// --==Reset Button(remove all)==--

resetButtonElement.addEventListener('click', function(event){
  //when reset button is clicked
  listElement.innerHTML = ''
  itemElement.value = ''
  })

// --==remove item by click==--

listElement.addEventListener('click', function (event){
  const parentNode = event.target.parentNode
  parentNode.removeChild(event.target)
})



// resetButtonElement.addEventListener('click', function(event){
// when reset button is clicked
// if (listElement.firstChild){
// return listElement.removeChild(listElement.firstChild)
// }
// }) // this removes one li per click of reset button


//practice again from scratch