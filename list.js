let url = `http://127.0.0.1:3333/`;
let token = sessionStorage.getItem('token');
let dados = document.getElementById("dados");


async function sendingToken(){
    let resultado = await fetch(`${url}companies`, {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${token}` 
        }
    }) 
    .then((res)=>{
        return res.json() 
    })
    .then((resjson)=>{
        montarLista(resjson);
    })
}
sendingToken();


function montarLista(lista){
    let tabela = '';

    for(let i in lista){
        tabela+= `<tr><th>${lista[i].id}</th>
                <th>${lista[i].name}</th>
                <th>${lista[i].initial_date}</th>
                <th>${lista[i].final_date}</th>
                <th>${lista[i].description}</th>
                <th>
                    <div class="acao">
                        <div class="editar">Editar</div>
                        <div class="deletar">Deletar</div>
                    </div>
                </th>
                </tr>`;

    }

    dados.innerHTML = tabela

}