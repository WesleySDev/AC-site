/*

Tinkering around with a fixed nav bar, and changing it based on scroll


*/
document.getElementById("cotacaoForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o envio padrão do formulário

  // Coletar os dados
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const cep = document.getElementById("cep").value.trim();

  // Validação dos campos
  if (!nome || !email || !telefone || !idade || !cep) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Montar a mensagem
  const mensagem = `Olá! Gostaria de solicitar uma cotação:%0A
*Nome:* ${nome}%0A
*E-mail:* ${email}%0A
*Telefone:* ${telefone}%0A
*Idades:* ${idade}%0A
*CEP:* ${cep}`;

  // Número de destino (sem + ou espaços)
  const numeroDestino = "5511952189276"; // Altere para o número que vai receber

  // Montar link do WhatsApp
  const linkWhatsapp = `https://wa.me/${numeroDestino}?text=${mensagem}`;

  // Abrir o WhatsApp
  window.open(linkWhatsapp, "_blank");
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
      $("body").addClass("header-fixed");
    } else {
      $("body").removeClass("header-fixed");
    }
    // change the style of the navbar when the user scrolls into the next zone.
    // get the distance of the 2nd section from the top of the page - height of header.
    var topOffset = $("#demosection2").offset().top;
    var headerHeight = $("#topnav").height();
    var transitionPoint = topOffset - headerHeight;
    if (scrollTop > transitionPoint) {
      $("#topnav").addClass("alt-header");
    } else {
      $("#topnav").removeClass("alt-header");
    }
  });
});

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200, // desktops menores
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // celulares médios
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // celulares pequenos
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400, // telas muito pequenas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".Titulo1", { duration: 2000 });

sr.reveal(".btnSolicitar");
