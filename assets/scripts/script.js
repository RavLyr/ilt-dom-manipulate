//TODO: import getAllMusics, generateMusicItemUsingTemplate, generateMusicItemUsingInnerHTML dari utils.js

const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#navList');

//TODO: dapatkan element tempat dimana music item akan ditampilkan
const musicListContainer = /* TODO: tambahkan logika untuk mendapatkan elemen '#musicList' */ null;

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

function showWithTemplate(musics) {
  //TODO: mapping setiap music di musics menggunakan generateMusicItemUsingTemplate
  //TODO: append elemen-elemen yang dihasilkan ke musicListContainer
}

function showWithInnerHTML(musics) {
  //TODO: mapping setiap music di musics menggunakan generateMusicItemUsingInnerHTML
  //TODO: gabungkan string-string HTML yang dihasilkan dan set sebagai innerHTML dari musicListContainer
}

function stopAnotherAudio(currentAudio) {
  //TODO: dapatkan semua elemen audio dari DOM
  //TODO: pause semua audio yang bukan currentAudio
}

function setupOnlyOneAudioIsPlaying() {
  // Function ini dimanfaatkan untuk mengaktifkan satu audio saja.

  //TODO: dapatkan semua audio element

  //TODO: tambahkan event listener 'play' pada setiap audio element untuk memanggil stopAnotherAudio saat audio diputar

  //TODO: dapatkan audio element yang sedang di play

  //TODO: pause audio element yang lain
}

function init() {
  //TODO: panggil setupDrawer untuk menginisiasi navigasi drawer

  //TODO: dapatkan data musics dengan memanggil getAllMusics

  //TODO: render musics ke DOM, pilih antara showWithInnerHTML atau showWithTemplate

  //TODO: panggil setupOnlyOneAudioIsPlaying untuk memastikan hanya satu audio yang dapat diputar sekaligus
}

init();
