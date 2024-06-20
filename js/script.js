
function sendMessage() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#subject").value;
  var message = document.querySelector("#message").value;

  // Para verificar si algún campo está vacío
  if (!name || !email || !subject || !message) {
    alert("Por favor complete todos los campos.");
    return;
  }

  (function () {
    emailjs.init("wpXqdH21THOWaW59s"); // Account Public Key
  })();
  var serviceID = "service_mr14mef";
  var templateID = "template_i0prtn8";

  var params = {
    sendername: name,
    senderemail: email,
    subject: subject,
    message: message,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("¡Gracias, " + name + "! Su mensaje ha sido enviado.");
    })
    .catch();
}

// Burger menus
document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
      for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  

  function toggleTheme() {
    if (localStorage.theme !== 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  const images = [
  
    {
      url: '../images/travel.png',
    },

    {
      url: '../images/card.png',
    },
    {
      url: '../images/card.jpeg',
    },
    {
      url: '../images/phone.jpg',
    }
  ];

const imageContainer = document.getElementById('image-container');

let chosenImage = 0;

imageContainer.style.backgroundImage = `url(${images[chosenImage].url})`;

const botonAtras = document.getElementById('prev');
const botonAdelante = document.getElementById('next');

botonAtras.addEventListener('click', () => {
  chosenImage -= 1;
  if (chosenImage < 0) {
    chosenImage = images.length - 1;
  }
  imageContainer.style.backgroundImage = `url(${images[chosenImage].url})`;
}
);

botonAdelante.addEventListener('click', () => {
  chosenImage += 1;
  if (chosenImage > images.length - 1) {
    chosenImage = 0;
  }
  imageContainer.style.backgroundImage = `url(${images[chosenImage].url})`;
}
);

function changeImage() {
  chosenImage++;
  if (chosenImage >= images.length) {
    chosenImage = 0;
  }
  imageContainer.style.backgroundImage = `url(${images[chosenImage].url})`;
}

// Call changeImage initially to set the first image
changeImage();

// Start an interval to call changeImage every second
const intervalId = setInterval(changeImage, 4000);


