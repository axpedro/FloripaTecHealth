class Vendedor{
    #nome;
    #sobrenome;
    #valorVendidoNoMes = 35;
    #salarioBase;
    
    constructor(nome,sobrenome,valorVendidoNoMes,salarioBase){
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#valorVendidoNoMes = valorVendidoNoMes;
        this.#salarioBase =salarioBase;
       

    }

    getnome(){
         return this.#nome
    }

    setnome(nome){
        this.#nome=nome;

    }

    get sobrenome(){
        return this.#sobrenome
   }

   set sobrenome(sobrenome){
       this.#sobrenome=sobrenome;

   }

   get valorVendidoNoMes(){
    return this.#valorVendidoNoMes
}

set valorVendidoNoMes(valorVendidoNoMes){
   this.#valorVendidoNoMes=valorVendidoNoMes;

}

get salarioBase(){
    return this.#salarioBase
}

set salarioBase(salarioBase){
   this.#salarioBase=salarioBase;

}
}



//Math.abs(valor)   transforma um valor em negativo em positiov, remove o negativo
class VendedorComissionado extends Vendedor{
    #taxaComissao;

    constructor(nome,sobrenome,salarioBase,taxaComissao){
        super.nome = nome;
        super.sobrenome = sobrenome;
        super.salarioBase = salarioBase;
        this.taxaComissao = taxaComissao;
        

    }
    
    
    getSalario(){
        return super.salarioBase+(this.taxaComissao*super.valorVendidoNoMes)
        }



    get taxaComissao(){
        if(taxaComissao >= 0.0 && taxaComissao <=1.0){
            this.#taxaComissao = taxaComissao;
        
        
        }
        else 
        alert("Taxa incorreta");
        
       
    }
    
    set taxaComissao(taxaComissao){
       this.salarioBase=taxaComissao;
    
    }

    

   

}

