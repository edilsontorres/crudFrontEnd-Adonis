const url = `http://127.0.0.1:3333/`;
//import { apiCompanies } from './registrar'


let singIn = document.querySelector('.form1');

let token = '';
let result = '';
singIn.addEventListener('submit', async login=>{
    login.preventDefault();
    const form = new FormData(singIn)
    const dados = Object.fromEntries(form)

    result = await fetch(`${url}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify(dados)
  })
  getToken()
})

async function getToken(){
  const response = await result.json()
 
  sessionStorage.setItem('token', response.token)
  if(response.token){
    window.location.href = `listCompany.html`
  } else {
    alert('login e/ou senha inválidos')
    location.reload();
  }
  
  
}


