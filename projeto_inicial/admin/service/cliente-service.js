// const listaClientes = ()=>{
//     const promise = new Promise((resolve, reject) =>{
//         //criação do objeto
//         const http = new XMLHttpRequest();
//         //configuração da requisição
//         http.open('GET', 'http://localhost:3000/profile');
//         //envio da requisição
//         http.send();
//         //lida com a resposta. onload é um listener do objeto http
//         http.onload = ()=>{
//                 if(http.status >= 400){
//                     //irá retornar o erro que é capturado pelo catch
//                     reject(JSON.parse(http.response));
//                 }
//                 else{
//                     //irá retornar o que será utilizado pleo then
//                     resolve(JSON.parse(http.response));
//                 }
//             }
//         })
//         console.log(promise);
//         return promise;
//     }

//Reescrevendo o listaClientes com fetch:
const listaClientes = ()=>{
    //por padrão, a fetch faz uma requisição do tipo GET e retorna uma promise
    return fetch('http://localhost:3000/profile')
    .then( resposta => {
        if(resposta.ok)
            return resposta.json()
        else
            throw new Error("Não foi possível listar os clientes");
    })
}

const criaClientes = (nome, email)=>{
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok)
            return resposta.body;
        else
        throw new Error("Não foi possível criar um cliente");
    })
}

const detalhaCliente = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        if(resposta.ok)
            return resposta.json()
        else
        throw new Error("Não foi detalhar clientes");
    })
}

const atualizaCliente = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok)
            return resposta.json();
        else
        throw new Error("Não foi possível atualizar o clientes");
    })
}

const deletaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta =>{
        if(!resposta.ok)
            throw new Error("Não foi possível deletar clientes");
     })
}

//lista de métodos exportados
export const clienteService = {
    listaClientes,
    criaClientes,
    deletaCliente,
    detalhaCliente,
    atualizaCliente
}
          
