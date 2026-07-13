let currentDay = Number(localStorage.getItem("amber365-day")) || 1;

const welcome = document.getElementById("welcome");
const app = document.getElementById("app");

const beginButton = document.getElementById("beginButton");

const title = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const lyric = document.getElementById("lyric");

const dayNumber = document.getElementById("dayNumber");
const progress = document.getElementById("progress");

const previous = document.getElementById("previous");
const next = document.getElementById("next");

const card = document.getElementById("songCard");

function animateCard() {
    card.style.opacity = 0;
    card.style.transform = "translateX(20px)";

    setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateX(0)";
    }, 180);
}

function loadSong() {

    const song = songs[currentDay - 1];

    animateCard();

    setTimeout(() => {

        title.textContent = song.title;
        artist.textContent = song.artist;
        lyric.textContent = `"${song.lyric}"`;

        dayNumber.textContent = `Day ${song.day} of 365`;
        progress.textContent = `${song.day} / 365`;

        localStorage.setItem("amber365-day", currentDay);

    },150);

}

beginButton.onclick = () => {

    welcome.classList.remove("active");
    app.classList.add("active");

    loadSong();

}

next.onclick = () => {

    if(currentDay < songs.length){

        currentDay++;
        loadSong();

    }

}

previous.onclick = () => {

    if(currentDay > 1){

        currentDay--;
        loadSong();

    }

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight") next.click();

    if(e.key==="ArrowLeft") previous.click();

});

let startX = 0;

card.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

card.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>60){

        next.click();

    }

    if(endX-startX>60){

        previous.click();

    }

});

window.onload=()=>{

    if(localStorage.getItem("visited")){

        welcome.classList.remove("active");
        app.classList.add("active");

        loadSong();

    }

}

beginButton.addEventListener("click",()=>{

    localStorage.setItem("visited","true");

});
