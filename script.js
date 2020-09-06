const jokeContainer = document.querySelector(".joke-container");
const jokeCategory = document.querySelector(".joke-category");
const refreshBtn = document.querySelector(".button-primary");




const url = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw&type=single';

const showLoading = () => {
    jokeCategory.textContent = "Loading...";
    jokeContainer.classList.add("hidden");
}

const showJoke = ({ category, joke }) => {
    jokeCategory.textContent = `Category : ${category}`;
    jokeContainer.classList.remove("hidden");
    jokeContainer.textContent = joke;
}
const getNewJoke = async () => {
    showLoading();
    const response = await fetch(url).then(res => res.json());
    showJoke(response);
}

window.addEventListener('load', getNewJoke);

refreshBtn.addEventListener("click", getNewJoke);