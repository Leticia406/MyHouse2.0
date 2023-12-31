import  express from "express";
import cors from "cors";
import { Cliente } from "./Clientes.js";

let lista_dados = [
    new Cliente(1,'47350005857', "Leticia Pires Nogueira", "asdfghjkl@gmail.com", "Bebedouro", '14708064', '179999-9999', "Sao Paulo", '5555555',"99999999999", "01/02/2007" )]
                // CPF, Nome, Email, Cidade, CEP, Numero, Estado, RG, Telefone, Data_Nasc
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get("/produtos", (req, res)=>{
    return res.status(200).json(lista_dados)
})

app.post("/produtos/novos", (req,res)=>{
    const {CPF, Nome, Email, Cidade, CEP, Numero, Estado, RG, Telefone, Data_Nasc} = req.body;
    lista_dados.push(new Cliente(lista_dados.length + 1, 
    CPF, Nome, Email, Cidade, CEP, Numero, Estado, RG, Telefone, Data_Nasc));
    return res.status(200).json("cadastrado com sucesso")
    
})

app.put("/produtos/alterar/:id", (req,res)=>{
    const {id} = req.params;
    const{ desc, qtd, preco} = req.body;
    let produto = lista_mercado.find(obj => obj.id == id)
    produto.desc = desc;
    produto.qtd = qtd;
    produto.preco = preco;

    return res.status(200).json("Alterado com sucesso");

})
app.delete("/produtos/excluir/:id", (req, res)=>{
    const {id} = req.params;
    lista_mercado = lista_mercado.filter(p => p.id != id)

    return res.status(200).json("Deletado!");
})

app.listen(3000, ()=>{
    console.log("Running!")
})

