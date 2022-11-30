const url = `http://127.0.0.1:3333/`
import { getToken } from './login'
let cadastro = document.querySelector('.form2');

cadastro.addEventListener('submit', async cadastrar=>{
  cadastrar.preventDefault();
  const form = new FormData(cadastro)
  const dados = Object.fromEntries(form)

  let result =  await fetch(`${url}companies`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },

  body: JSON.stringify(dados)
})
})
