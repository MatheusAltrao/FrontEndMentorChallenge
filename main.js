function darkMode() {
  const checkbox = document.getElementById('checkbox')
  const orange = document.querySelector('.orange')
  const cyan = document.querySelector('.cyan')
  const darkCyan = document.querySelector('.darkcyan')
  const container = document.querySelector('.container')


  if (checkbox.checked) {
    orange.classList.add('invert')
    cyan.classList.add('invert')
    darkCyan.classList.add('invert')
    container.style.backgroundColor = "#000"

  } else {
    orange.classList.remove('invert')
    cyan.classList.remove('invert')
    darkCyan.classList.remove('invert')
    container.style.backgroundColor = "#fff"
  }
}