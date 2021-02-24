let menuEl = document.querySelectorAll('header .container')[0]
let menu = document.getElementsByClassName('menu')[0]
menuEl.addEventListener('click', e => {
  if (Array.from(e.currentTarget.classList).includes('open')) {
      e.currentTarget.classList.remove('open')
      menu.style.right = '-100%'
      menu.style.transition = 'right .4s ease-in-out'
  } else {
      e.currentTarget.classList.add('open')
      menu.style.right = '0%'
      menu.style.transition = 'right .4s ease-in-out'
  }
})