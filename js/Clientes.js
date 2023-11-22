export class Cliente{
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

    constructor(CPF, Nome, Email, Cidade, CEP, Numero, Estado, RG, Telefone, Data_Nasc){
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

export let lista_dados = [
    new Cliente (47350005857, "Leticia Pires Nogueira", "asdfghjkl@gmail.com", "Bebedouro", 14708064, 179999-9999, "Sao Paulo", 5555555, "01/02/2007" )]