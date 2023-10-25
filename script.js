//your code here

// Array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Led Zeppelin', 'Guns N Roses'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(?:the|a|an) /i, '');
}

// Remove articles and sort the band names
const sortedBandNames = bandNames.map(removeArticles).sort();

// Create an HTML list
const ul = document.getElementById('band');

sortedBandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});
