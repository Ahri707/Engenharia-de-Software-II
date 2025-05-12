import Produto from "../abstracts/Produto_abstract";

/**
 * OBS: Typescipt não possui classes final por isso foi feita uma classe normal.
 */
class Vestuario extends Produto{
    protected quantidade: number;
    static desconto_qtd: number = 0.05;

    constructor(nome: string, valor: number, quantidade: number) {
         if (quantidade < 0) {
            throw new Error("A quantidade deve ser maior ou igual a zero.");
        }
        super(nome, valor);
        this.quantidade = quantidade;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        if (quantidade < 0) {
            throw new Error("A quantidade deve ser maior ou igual a zero.");
        }
        this.quantidade = quantidade;
    }

    public calcularPreco(): number {
        if(this.quantidade > 5){
            return this.valor - (Vestuario.desconto_qtd * this.valor);
        }
        return this.valor;
    }

} 
export default Vestuario;