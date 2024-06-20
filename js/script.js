
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
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
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


