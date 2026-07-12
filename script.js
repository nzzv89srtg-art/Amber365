let i=0;
function render(){day.textContent=`Day ${i+1} of 365`;title.textContent=songs[i].title;artist.textContent=songs[i].artist;lyric.textContent='“'+songs[i].lyric+'”';localStorage.setItem('amber365',i);}
function next(){if(i<364)i++;render()}
function prev(){if(i>0)i--;render()}
i=+(localStorage.getItem('amber365')||0);render();
let sx=0;document.addEventListener('touchstart',e=>sx=e.touches[0].clientX);
document.addEventListener('touchend',e=>{let dx=e.changedTouches[0].clientX-sx;if(dx<-40)next();if(dx>40)prev();});
