// document.addEventListener("DOMContentLoaded", function() {
//     const loadingScreen = document.getElementById("loading-screen");
//     const header = document.getElementById("header");
//     const welcomeText = document.querySelector(".welcome-text");

//     const messages = ["Welcome", "To", "My World!"];
//     let index = 0;

//     const changeText = () => {
//         welcomeText.innerText = messages[index];
//         index = (index + 1) % messages.length;
//     };

//     changeText();

//     let messageInterval = setInterval(changeText, 2000);


//     setTimeout(() => {
//         clearInterval(messageInterval);
//         loadingScreen.style.opacity = '0';

//         setTimeout(() => {
//             loadingScreen.style.display = 'none';
//             header.classList.add('show');
//         }, 800);
//     }, 6000);
//   });


  document.addEventListener('DOMContentLoaded', (event) => {
      const audio = document.getElementById('background-audio');
      const button = document.getElementById('audio-toggle');
      const icon = button.querySelector('i');
      const text = button.querySelector('.audio-text');

      button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
            text.textContent = 'Mute Audio';
            button.setAttribute('aria-label', 'Mute Audio');
        } else {
            audio.pause();
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
            text.textContent = 'Unmute Audio';
            button.setAttribute('aria-label', 'Unmute Audio');
        }
      });
  });


    function toggleLanguage() {
        var currentUrl = window.location.href;
        if (currentUrl.indexOf('index_de.html') !== -1) {
            window.location.href = currentUrl.replace('index_de.html', 'index.html');
        } else if (currentUrl.indexOf('index_ru.html') !== -1) {
            window.location.href = currentUrl.replace('index_ru.html', 'index.html');
        } else {
            window.location.href = currentUrl.replace('index.html', 'index_de.html');
        }
    }
    document.getElementById('lang-switcher').addEventListener('click', function() {
        var dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
    document.getElementById('lang-en').addEventListener('click', function() {
        window.location.href = window.location.href.replace(/index(_de|_ru)?\.html/, 'index.html');
    });
    document.getElementById('lang-de').addEventListener('click', function() {
        window.location.href = window.location.href.replace(/index(_ru)?\.html/, 'index_de.html');
    });
    document.getElementById('lang-ru').addEventListener('click', function() {
        window.location.href = window.location.href.replace(/index(_de)?\.html/, 'index_ru.html');
    });
