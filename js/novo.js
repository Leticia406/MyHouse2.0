document.querySelector("#btn").addEventListener('click',()=>{
    fetch("http://localhost:3000/produtos")
    .then((resposta)=>{
        if(resposta.status == 200){
            resposta.json().then((dados)=>{
                // dados é a lista de objetos que vem
                // da API
                const div = document.querySelector("#body");

                dados.map((produto)=>{

                    const CPF = document.createElement("td")
                    CPF.innerText = produto.CPF

                    const Nome = document.createElement("td")
                    Nome.innerText = produto.Nome

                    const Email = document.createElement("td")
                    Email.innerText = produto.Email

                    const Cidade = document.createElement("td")
                    Cidade.innerText = produto.Cidade

                    const CEP = document.createElement("td")
                    CEP.innerText = produto.CEP

                    const Numero = document.createElement("td")
                    Numero.innerText = produto.Numero

                    const Estado = document.createElement("td")
                    Estado.innerText = produto.Estado

                    const RG = document.createElement("td")
                    RG.innerText = produto.RG

                    const Telefone = document.createElement("td")
                    Telefone.innerText = produto.Telefone

                    const Data_Nasc = document.createElement("td")
                    Data_Nasc.innerText = produto.Data_Nasc

                    const linha = document.createElement("tr")
                    linha.append(CPF,Nome,Email,Cidade,CEP,Numero,Estado,RG,Telefone,Data_Nasc)
                    div.append(linha)
                })
            })
        }
    })
})