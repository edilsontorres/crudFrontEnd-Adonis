const url = `http://127.0.0.1:3333/`
let cadastro = document.querySelector('.newCompany');
let token = sessionStorage.getItem('token');




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

  if(result.status === 200){
    window.alert("Empresa cadastrada com sucesso!")
    window.location.href = `listCompany.html`
  } else {
    window.alert("Ops, algo deu errado")
    window.location.reload();
  }
})


