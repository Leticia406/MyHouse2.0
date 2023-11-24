// const params = new URLSearchParams(window.location.search)

// const id = params.get("id");
// const CPF = params.get("CPF");
// const Nome = params.get("Nome");
// const Email = params.get("Email");
// const Cidade = params.get("Cidade");
// const CEP = params.get("CEP");
// const Numero = params.get("Numero");
// const Estado = params.get("Estado");
// const RG = params.get("RG");
// const Telefone = params.get("Telefone");
// const Data_Nasc = params.get("Data_Nasc");

// if(id != null && CPF != null && Nome != null && Email != null && Cidade != null && CEP != null && Numero != 
//     null && Estado != null && RG != null && Telefone != null && Data_Nasc != null )
// {
//     document.querySelector("button")
//     .addEventListener("click",()=>{
//         fetch(`http://localhost:3000/produtos/alterar/${id}`,{
//             method: 'PUT',
//             headers: {
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify({
//                 "mod" : document.querySelector("#id").value,
//                 "preco" : parseFloat(document.querySelector("#preco").value),
//                 "ano_lanc" : parseInt(document.querySelector("#ano_lanc").value)
//             })
//         }).then((resposta)=>{
//             if(resposta.status != 200){
//                 console.log(resposta.json())
//             }
//         })
//     })
// }else{
    document.querySelector("#post")
    .addEventListener("click",()=>{
        fetch(`http://localhost:3000/produtos/novos`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            //CPF, Nome, Email, Cidade, CEP, Numero, Estado, RG, Telefone, Data_Nasc
            body: JSON.stringify({                
                "CPF" : parseFloat(document.querySelector("#CPF").value),
                "Nome" : document.querySelector("#Nome").value,
                "Email" : document.querySelector("#Email").value,
                "Cidade" : document.querySelector("#CPF").value,
                "CEP" : parseFloat(document.querySelector("#CEP").value),
                "Numero" : parseFloat(document.querySelector("#Numero").value),
                "Estado" : document.querySelector("#CEP").value,
                "RG" : parseFloat(document.querySelector("#RG").value),
                "Telefone" : parseFloat(document.querySelector("#Telefone").value),
                "Data_Nasc" : document.querySelector("#Data_Nasc").value
            })
        }).then((resposta)=>{
            if(resposta.status != 200){
                console.log(resposta.json())
            }
        })
    })
// }