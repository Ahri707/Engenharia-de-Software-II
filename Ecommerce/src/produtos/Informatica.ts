import Produto from "../abstracts/Produto_abstract";

export type MetodoPagamento = 'vista' | 'prazo';

class Informatica extends Produto{
    static desconto_informatica: number = 0.1;
    protected metodo_pagamento: MetodoPagamento;

    constructor(nome: string, valor: number, metodo_pagamento: MetodoPagamento) {
        super(nome, valor);
        this.metodo_pagamento = metodo_pagamento;
    }

    public getMetodoPagamento(): MetodoPagamento {
        return this.metodo_pagamento;
    }

    public setMetodoPagamento(metodo_pagamento: MetodoPagamento): void {
        this.metodo_pagamento = metodo_pagamento;
    }

    public calcularPreco(): number {
        if(this.metodo_pagamento == 'vista'){
            return this.valor - (Informatica.desconto_informatica * this.valor);
        }
        return this.valor;
    }
}
export default Informatica;