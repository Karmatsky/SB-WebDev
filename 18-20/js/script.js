window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__nav-mobile-active')
  })
  document.querySelector('#burger-close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__nav-mobile-active')
  })
})
