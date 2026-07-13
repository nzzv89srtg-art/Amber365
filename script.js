let currentDay = Number(localStorage.getItem("amber365-day")) || 1;

const intro = document.getElementById("intro");
const app = document.getElementById("app");

const openButton = document.getElementById("openButton");

const title = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const lyric = document.getElementById("lyric");

const dayNumber = document.getElementById("dayNumber");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progressFill");

const previous = document.getElementById("previous");
const next = document.getElementById("next");

const card = document.getElementById("songCard");

function loadSong() {

    const song = songs[currentDay - 1];

    title.textContent = song.title;
    artist.textContent = song.artist;
    lyric.textContent = `"${song.lyric}"`;

    dayNumber.textContent = `Day ${song.day} of 365`;
    progress.textContent = `${song.day} / 365`;

    if (progressFill) {
        progressFill.style.width = `${(song.day / 365) * 100}%`;
    }

    localStorage.setItem("amber365-day", currentDay);

    card.classList.remove("fade");
    void card.offsetWidth;
    card.classList.add("fade");
}

openButton.addEventListener("click", () => {

    intro.classList.remove("active");
    app.classList.add("active");

    localStorage.setItem("visited", "true");

    loadSong();

});

next.addEventListener("click", () => {

    if (currentDay < songs.length) {
        currentDay++;
        loadSong();
    }

});

previous.addEventListener("click", () => {

    if (currentDay > 1) {
        currentDay--;
        loadSong();
    }

});

let startX = 0;

card.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;

});

card.addEventListener("touchend", (e) => {

    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 60 && currentDay < songs.length) {
        currentDay++;
        loadSong();
    }

    if (endX - startX > 60 && currentDay > 1) {
        currentDay--;
        loadSong();
    }

});

window.addEventListener("load", () => {

    if (localStorage.getItem("visited") === "true") {

        intro.classList.remove("active");
        app.classList.add("active");

        loadSong();

    }

});