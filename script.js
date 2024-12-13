const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Innovation distinguishes between a leader and a follower. - Steve Jobs',
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  // Add more quotes as needed
]

const quoteElement = document.getElementById('quote')
const generateBtn = document.getElementById('generate-btn')

function generateRandomOuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  quoteElement.textContent = randomQuote
}

generateBtn.addEventListener('click', generateRandomOuote)
