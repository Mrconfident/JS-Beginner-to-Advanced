const paras = document.querySelector('p')
console.log(paras)

paras[0].addEventListener('click', () => {
  
})

console.log(document)
for(var i=0; i<paras.length;i++) {
  paras[i]
  if (paras[i].textContent.includes('Error')) {
    paras[i].style.padding = '10px'
    paras[i].style.border = '1px dotted aqua'
    paras[i].style.color = 'blue'
    // paras[i].classList.add('error')
  }
}

// paras.forEach((para) => {
//   console.log(para.textContent)
//   if (para.textContent.includes('Error')) {
//     // para.style.backgroundColor = '10px'
//     // para.style.border = '1px dotted blue'
//     // para.style.color = 'crimson'
//     para.classList.add('error')
//   }
//   if (para.textContent.includes('Success')) {
//     para.classList.add('success')
//   }
//   // setTimeout(() => {
//   //   para.classList.remove('error')
//   // }, 1000)
// })