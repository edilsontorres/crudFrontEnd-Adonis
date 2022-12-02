let url = `http://127.0.0.1:3333/`;
let token = sessionStorage.getItem('token');


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
    let dados = '';

    for(let i in lista){
        dados+= `<tr><th>${lista[i].id}</th>
                <th>${lista[i].name}</th>
                <th>${lista[i].initial_date}</th>
                <th>${lista[i].final_date}</th>
                </tr>`;
    }
    document.getElementById("dados").innerHTML = dados
    


}