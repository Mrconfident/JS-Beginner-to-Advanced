const paras = document.getElementsByTagName('p')
console.log(paras)
for(var i=0; i<paras.length;i++) {
  if (paras[i].textContent.includes('Error')) {
    paras[i].style.padding = '10px'
    paras[i].style.border = '1px dotted crimson'
    paras[i].style.color = 'crimson'
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