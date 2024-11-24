/* Crear el botón y la lista de chistes*/
const fetchJokeButton = document.getElementById('fetchJoke');
const jokeList = document.getElementById('jokeList');

/*obtener chistes de la API*/
function getJoke() {
 
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      
      const li = document.createElement('li');
      li.textContent = data.value;

     
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', () => {
        
        jokeList.removeChild(li);
        updateLocalStorage();
      });

      li.appendChild(deleteButton);
      jokeList.appendChild(li);

      let jokes = JSON.parse(localStorage.getItem('jokes')) || [];
      jokes.push(data.value);
      localStorage.setItem('jokes', JSON.stringify(jokes));
    });
}
function loadJokes() {
  const jokes = JSON.parse(localStorage.getItem('jokes')) || [];
  jokes.forEach(joke => {
    const li = document.createElement('li');
    li.textContent = joke;
    jokeList.appendChild(li);
  });
}
loadJokes();

fetchJokeButton.addEventListener('click', getJoke);

/* ocultar la lista al inicio
jokeList.style.display = 'none';
*/