
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

resetButtonElement.addEventListener('click', function(event){
//when reset button is clicked
if (listElement.firstChild){
return listElement.removeChild(listElement.firstChild)
}
})


//practice again from scratch