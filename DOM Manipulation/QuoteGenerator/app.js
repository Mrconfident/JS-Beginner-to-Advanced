
let quote = document.querySelector('.quote')
let x = document.querySelectorAll('div')
console.log(x)

let person = document.querySelector('.person')

let btn = document.querySelector('#new-quote')

let d = document.querySelector('#divA')
console.log(d.textContent) // difference between innertext, textContent, innerHtml

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://www.amazon.in/')
// link.innerText = 'Go to Amzon'


const quotesArray = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    person: 'Nelson Mandela'
  },
  {
    quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    person: 'Robert Louis Stevenson'
  },
  {
    quote: 'Whoever is happy will make others happy too',
    person: 'Anne Frank'
  },
  {
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    person: 'Oprah Winfrey'
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    person: 'John Lennon'
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    person: 'Eleanor Roosevelt'
  },
  {
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma which is living with the results of other people\'s thinking.',
    person: 'Steve Jobs'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    person: 'Walt Disney'
  }
]

btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * (quotesArray.length))
  quote.innerHTML = quotesArray[random].quote
  person.innerHTML = quotesArray[random].person
})