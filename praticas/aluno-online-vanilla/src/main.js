import './style.css'

const form = document.getElementById('form-login')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const erroEmail = document.getElementById('erro-email')
const erroSenha = document.getElementById('erro-senha')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  erroEmail.textContent = ''
  erroSenha.textContent = ''

  if (email.value === '') {
    erroEmail.textContent = 'O campo de email é obrigatório.'
  }

  if (senha.value === '') {
    erroSenha.textContent = 'O campo de senha é obrigatório.'
  }
})