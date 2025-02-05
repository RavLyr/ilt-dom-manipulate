//TODO : import get al musics, generateMusicItemUsingTemplate, generareMusicUsingInnerHTML dari utils.js
import {generateMusicItemUsingInnerHTML, generateMusicItemUsingTemplate, getAllMusics} from "./utils.js";
const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#navList');

//TODO : dapatkan element tempat dimana music item akan ditampilkan
const musicListContainer = document.querySelector("#musicList")

function setupDrawer() {
  drawerButton.addEventListener('click', () => {
    drawerNavigation.classList.toggle('open');
  });

  document.body.addEventListener('click', (event) => {
    if (!drawerNavigation.contains(event.target) && !drawerButton.contains(event.target)) {
      drawerNavigation.classList.remove('open');
    }
  });
}

function showWithTemplate(musics){
  const elements = musics.map(generateMusicItemUsingTemplate)
  musicListContainer.append(...elements)
}
function showWithInnerHTML(musics){
  //const elements = musics.map((music)=>generateMusicItemUsingInnerHTML(music))
  const elements = musics.map(generateMusicItemUsingInnerHTML)
  musicListContainer.innerHTML = elements.join('')

}
function stopAnotherAudio(currentAudio){
  const listOfAudioElement= document.querySelectorAll('audio')
  listOfAudioElement.forEach((audio)=>{
    if(audio!=currentAudio){
      audio.pause()
    }
  })
}
function setupOnlyOneAudioIsPlaying() {
  // Function ini dimanfaatkan untuk mengaktifkan satu audio saja.

  //TODO: dapatkan semua audio element
  const listOfAudioElement = document.querySelectorAll('audio')

  listOfAudioElement.forEach((audioElement)=>{
    audioElement.addEventListener('play',(event)=>{
      const currentAudio = event.target;
      stopAnotherAudio(currentAudio)
    })
  })

  //TODO: dapatkan audio element yang sedang di play

  //TODO: pause audio element yang lain
}

function init() {
  setupDrawer();

  // Lakukan get musics dan render ke DOM di sini
  const musics = getAllMusics()

  //TODO:show menggunakan innerHTML
  //showWithInnerHTML(musics)


  //TODO:show menggunakan template
  showWithTemplate(musics)

  setupOnlyOneAudioIsPlaying();
}

init();
