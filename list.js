let url = `http://127.0.0.1:3333/`;
let token = sessionStorage.getItem('token');

async function pushToken(){
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
        resjson.find((e)=>{
        console.log({id: e.id, name: e.name})
        })
    })
}
pushToken();