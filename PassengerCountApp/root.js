let counter1 = document.getElementById('count-el')
let ent1 = document.getElementById('previous-entries')
let counter = 0
function inc() {
  counter++
  counter1.innerText = counter
}
function save() {
  ent1.innerHTML = ent1.innerHTML + " " + counter
  counter = 0
  counter1.innerText = counter
}