// Capture DOM elements
const jokeBtn = document.getElementById("jokeBtn");
const jokeOutput = document.querySelector(".joke");



jokeBtn.addEventListener("click", getJoke);


async function getJoke() {
  // Fetch joke from API
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  // Convert response from JSON object
  const data = await response.json();

  // Display Joke
  jokeOutput.innerHTML = data.joke;
}
