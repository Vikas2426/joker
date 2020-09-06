const jokeContainer = document.querySelector(".joke-container");
const jokeCategory = document.querySelector(".joke-category");
const refreshBtn = document.querySelector(".button-primary");
const footer = document.querySelector("footer");

const url = 'https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw';

const showLoading = () => {
    jokeCategory.textContent = "Loading...";
    jokeContainer.classList.add("hidden");
}

const showJoke = (category, joke) => {
    jokeCategory.textContent = `Category : ${category}`;
    jokeContainer.classList.remove("hidden");

    if (joke.length == 1)
        jokeContainer.textContent = joke;
    else
        jokeContainer.innerText = `${joke[0]}
        ${joke[1]}`;
}
const getNewJoke = async () => {
    showLoading();
    const response = await fetch(url).then(res => res.json());
    response.hasOwnProperty('joke') ? showJoke(response.category, [response.joke]) : showJoke(response.category, [response.setup, response.delivery]);
}

window.addEventListener('load', getNewJoke);

refreshBtn.addEventListener("click", getNewJoke);

const year = new Date().getFullYear();
footer.textContent = `Copyright @ Vikas Choubey, ${year}`;