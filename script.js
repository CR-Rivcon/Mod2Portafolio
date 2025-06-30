// JavaScript para funcionalidades del portafolio
const $ = window.jQuery

// Esperar a que el DOM esté completamente cargado
$(document).ready(() => {
  console.log("Portafolio cargado correctamente")

  // Inicializar funcionalidades
  initNavigation()
  initHeroButtons()
  initContactCards()
  initContactForm()
})

// Navegación suave
function initNavigation() {
  $(".nav-link-custom").on("click", function (e) {
    e.preventDefault()

    const targetId = $(this).attr("href")
    const targetSection = $(targetId)

    if (targetSection.length) {
      const offsetTop = targetSection.offset().top - 70

      $("html, body").animate(
        {
          scrollTop: offsetTop,
        },
        800,
      )

      // Cerrar menú móvil
      $(".navbar-collapse").collapse("hide")
    }
  })
}

// Botones del hero
function initHeroButtons() {
  $("#btnProyectos").on("click", () => {
    const proyectosSection = $("#proyectos")
    const offsetTop = proyectosSection.offset().top - 70

    $("html, body").animate(
      {
        scrollTop: offsetTop,
      },
      1000,
    )
  })

  $("#btnCV").on("click", function () {
    $(this).html("Descargando...")

    setTimeout(() => {
      $(this).html("Descargar CV")
      alert("CV descargado correctamente")
    }, 2000)
  })
}

// Tarjetas de contacto
function initContactCards() {
  $("#linkedinCard").on("click", () => {
    console.log("Abriendo LinkedIn...")
    window.open("https://linkedin.com", "_blank")
  })

  $("#githubCard").on("click", () => {
    console.log("Abriendo GitHub...")
    window.open("https://github.com", "_blank")
  })

  $("#emailCard").on("click", () => {
    console.log("Abriendo email...")
    window.location.href = "mailto:cristopher.rivera@email.com"
  })
}

// Formulario de contacto
function initContactForm() {
  $("#contactForm").on("submit", (e) => {
    e.preventDefault()

    // Obtener datos del formulario
    const nombre = $("#nombre").val().trim()
    const email = $("#email").val().trim()
    const asunto = $("#asunto").val().trim()
    const mensaje = $("#mensaje").val().trim()

    // Validar formulario
    if (!nombre || !email || !asunto || !mensaje) {
      showMessage("Por favor completa todos los campos", "error")
      return
    }

    if (!isValidEmail(email)) {
      showMessage("Por favor ingresa un email válido", "error")
      return
    }

    // Mostrar estado de carga
    $("#btnEnviar").html("Enviando...")

    // Simular envío
    setTimeout(() => {
      $("#btnEnviar").html("Enviar Mensaje")
      showMessage("¡Mensaje enviado correctamente! Te responderé pronto.", "success")
      $("#contactForm")[0].reset()
    }, 2000)
  })
}

// Validar email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Mostrar mensajes
function showMessage(message, type) {
  const alertClass = type === "success" ? "alert-success" : "alert-danger"
  const icon = type === "success" ? "bi-check-circle" : "bi-exclamation-triangle"

  const messageHtml = `
    <div class="alert ${alertClass} alert-dismissible fade show">
      <i class="bi ${icon} me-2"></i>
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `

  $("#formMessage").html(messageHtml).removeClass("d-none")

  // Auto-ocultar después de 5 segundos
  setTimeout(() => {
    $("#formMessage .alert").alert("close")
  }, 5000)
}

// Cambiar navbar al hacer scroll
$(window).on("scroll", () => {
  const scrollTop = $(window).scrollTop()
  const navbar = $(".custom-navbar")

  if (scrollTop > 50) {
    navbar.css("background-color", "rgba(15, 23, 42, 0.98)")
  } else {
    navbar.css("background-color", "rgba(15, 23, 42, 0.95)")
  }
})

// Eventos adicionales para demostrar JavaScript
$(document).on("keydown", (e) => {
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault()
    $("#contacto").get(0).scrollIntoView({ behavior: "smooth" })
  }
})
