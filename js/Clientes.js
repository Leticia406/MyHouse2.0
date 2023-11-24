export class Cliente{
    id;
    CPF;
    Nome;
    Email;
    Cidade;
    CEP;
    Numero;
    Estado;
    RG;
    Telefone;
    Data_Nasc;

    constructor(id, CPF, Nome, Email, Cidade, CEP, Numero, Estado, RG, Telefone, Data_Nasc){
        this.id = id;
        this.CPF = CPF;
        this.Nome = Nome;
        this.Email = Email;
        this.Cidade = Cidade;
        this.CEP = CEP;
        this.Numero = Numero;
        this.Estado = Estado;
        this.RG = RG;
        this.Telefone = Telefone;
        this.Data_Nasc = Data_Nasc;

    }
}