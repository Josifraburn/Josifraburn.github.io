window.moveTo = function(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
  })
}
