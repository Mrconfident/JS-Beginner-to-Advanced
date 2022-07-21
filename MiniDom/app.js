const paras = document.querySelectorAll('p')

paras.forEach(para => {
  console.log(para.textContent)
  if (para.textContent.includes('Error')) {
    para.classList.add('error')
  }
  if (para.textContent.includes('Success')) {
    para.classList.add('success')
  }
  setTimeout(() => {
    para.classList.remove('error')
  }, 1000)
})