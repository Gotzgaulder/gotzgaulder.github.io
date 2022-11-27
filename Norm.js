function darkmode() {
  const body = document.body
  const wasDarkMode = localStorage.getItem('darkmode') === 'true'

  localStorage.setItem('darkmode', !wasDarkMode)
  body.classList.toggle('dark_mode', !wasDarkMode)
}

document.querySelector('.black_theme').addEventListener('click',darkmode)