window.addEventListener('load', start)

function start(){
  pagePreloader()
  buttonContact()
}

// Page Preload
function pagePreloader(){
  var pagePreloader = document.querySelector('.jl-preloader')

  this.setTimeout(function(){
    pagePreloader.classList.add('jl-fade-out')
  }, 2000)
}

// Abrindo e fechando contato
function buttonContact(){
  var btnContact = document.querySelector('.jl-btn-contact')

  function handlerToggleButton(){
      var boxContact = document.querySelector('.jl-contact-info')
      boxContact.classList.toggle('jl-is-open')
      this.classList.toggle('jl-change-icon')
    }
  
    btnContact.addEventListener('click', handlerToggleButton)
  }
